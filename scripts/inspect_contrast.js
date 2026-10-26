import fs from 'fs';

const issues = JSON.parse(fs.readFileSync('scripts/extracted_issues.json', 'utf8'));

const contrastIssues = issues.filter(i => i.rule.toLowerCase().includes('contrast'));
const allContrastElements = [];
contrastIssues.forEach(m => m.elements.forEach(e => allContrastElements.push({ page: m.page, ...e })));

console.log(`Total contrast instances: ${allContrastElements.length}`);

const bySnippet = {};
allContrastElements.forEach(e => {
  // Normalize code a bit to group
  const key = e.code.replace(/\s+/g, ' ').slice(0, 200);
  if (!bySnippet[key]) bySnippet[key] = { count: 0, pages: new Set(), selector: e.selector, fullCode: e.code };
  bySnippet[key].count++;
  bySnippet[key].pages.add(e.page);
});

console.log(`Unique snippets: ${Object.keys(bySnippet).length}`);
// Sort by count desc
const sorted = Object.entries(bySnippet).sort((a, b) => b[1].count - a[1].count);

sorted.forEach(([shortCode, data], idx) => {
  console.log(`\n#${idx + 1} (${data.count} instances on ${data.pages.size} pages) [Selector: ${data.selector}]`);
  console.log(`Pages: ${Array.from(data.pages).slice(0, 3).join(', ')}${data.pages.size > 3 ? '...' : ''}`);
  console.log(`HTML: ${data.fullCode}`);
});
