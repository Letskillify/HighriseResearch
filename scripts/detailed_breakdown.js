import fs from 'fs';

const issues = JSON.parse(fs.readFileSync('scripts/extracted_issues.json', 'utf8'));

function analyzeRule(name) {
  const match = issues.filter(i => i.rule.toLowerCase().includes(name.toLowerCase()));
  console.log(`\n===============================================================`);
  console.log(`RULE: ${name}`);
  const pages = new Set(match.map(m => m.page));
  console.log(`Pages (${pages.size}):`, Array.from(pages));
  
  const allElements = [];
  match.forEach(m => m.elements.forEach(e => allElements.push({ page: m.page, ...e })));
  console.log(`Total instances: ${allElements.length}`);

  const bySnippet = {};
  allElements.forEach(e => {
    if (!bySnippet[e.code]) bySnippet[e.code] = { count: 0, pages: new Set(), selector: e.selector };
    bySnippet[e.code].count++;
    bySnippet[e.code].pages.add(e.page);
  });

  console.log(`Unique snippets: ${Object.keys(bySnippet).length}`);
  Object.entries(bySnippet).forEach(([code, data], idx) => {
    console.log(`\n[${idx + 1}] (${data.count}x on ${data.pages.size} pages) [Selector: ${data.selector}]`);
    console.log(`Pages: ${Array.from(data.pages).slice(0, 3).join(', ')}${data.pages.size > 3 ? '...' : ''}`);
    console.log(`HTML: ${code}`);
  });
}

analyzeRule('button');
analyzeRule('form element');
analyzeRule('links must have discernible text');
