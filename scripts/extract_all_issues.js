import fs from 'fs';

const content = fs.readFileSync('highrise_report.html', 'utf8');

// The report has sections for each page:
// <div style="background:#0d3d47;color:#fff;padding:10px 16px;border-radius:6px 6px 0 0;font-size:13px;font-weight:700">
//   highriseresearch.in (or URL)

const pageSectionRegex = /<div style="background:#0d3d47;color:#fff;padding:10px 16px;border-radius:6px 6px 0 0;font-size:13px;font-weight:700">\s*([^\s<]+)/g;

let pageMatches = [];
let m;
while ((m = pageSectionRegex.exec(content)) !== null) {
  pageMatches.push({ url: m[1], index: m.index });
}

console.log(`Found ${pageMatches.length} page sections`);

const allIssues = [];

for (let i = 0; i < pageMatches.length; i++) {
  const current = pageMatches[i];
  const next = pageMatches[i + 1];
  const pageChunk = content.slice(current.index, next ? next.index : content.length);

  // Parse finding-cards in this page chunk
  const cardRegex = /<div class="finding-card">([\s\S]*?)(?=<div class="finding-card">|<\/div>\s*<\/div>\s*<\/div>\s*<div style="margin-bottom:40px">|$)/g;
  let cardMatch;
  while ((cardMatch = cardRegex.exec(pageChunk)) !== null) {
    const cardContent = cardMatch[1];
    const ruleMatch = cardContent.match(/<div class="finding-rule">([^<]+)<\/div>/);
    const impactMatch = cardContent.match(/<span class="impact-badge[^>]*>([^<]+)<\/span>/);
    const rule = ruleMatch ? ruleMatch[1].trim() : 'Unknown';
    const impact = impactMatch ? impactMatch[1].trim() : 'Unknown';

    // Parse affected elements
    const elementRegex = /<div class="finding-selector"[^>]*>([\s\S]*?)<\/div>\s*<div class="finding-code"[^>]*>([\s\S]*?)<\/div>/g;
    let elemMatch;
    const elements = [];
    while ((elemMatch = elementRegex.exec(cardContent)) !== null) {
      elements.push({
        selector: elemMatch[1].trim(),
        code: elemMatch[2].trim().replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&')
      });
    }

    allIssues.push({
      page: current.url,
      rule,
      impact,
      elements
    });
  }
}

fs.writeFileSync('scripts/extracted_issues.json', JSON.stringify(allIssues, null, 2));

console.log(`Total rule occurrences across pages: ${allIssues.length}`);

// Summarize by rule
const summary = {};
allIssues.forEach(iss => {
  if (!summary[iss.rule]) {
    summary[iss.rule] = { impact: iss.impact, pages: new Set(), totalElements: 0, elements: [] };
  }
  summary[iss.rule].pages.add(iss.page);
  summary[iss.rule].totalElements += iss.elements.length;
  iss.elements.forEach(el => {
    summary[iss.rule].elements.push({ page: iss.page, ...el });
  });
});

for (const [rule, data] of Object.entries(summary)) {
  console.log(`\n==================================================`);
  console.log(`RULE: ${rule} [${data.impact}]`);
  console.log(`Pages affected (${data.pages.size}): ${Array.from(data.pages).join(', ')}`);
  console.log(`Total elements: ${data.totalElements}`);
  
  // Group elements by unique code snippet
  const codeGroups = {};
  data.elements.forEach(el => {
    const key = el.code;
    if (!codeGroups[key]) codeGroups[key] = { count: 0, pages: new Set(), selector: el.selector };
    codeGroups[key].count++;
    codeGroups[key].pages.add(el.page);
  });

  console.log(`Unique element snippets: ${Object.keys(codeGroups).length}`);
  for (const [code, info] of Object.entries(codeGroups)) {
    console.log(`  - (${info.count}x on ${info.pages.size} pages) [${info.selector}]`);
    console.log(`    Snippet: ${code.slice(0, 150)}`);
  }
}
