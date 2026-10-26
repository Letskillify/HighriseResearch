import fs from 'fs';

const content = fs.readFileSync('highrise_report.html', 'utf8');

// Match finding cards
// Look for finding-card
const findings = [];
const cardRegex = /<div class="finding-card">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;

// Let's do a more robust regex or split
// Let's inspect how finding-card is structured
const cardStarts = [];
let idx = 0;
while ((idx = content.indexOf('<div class="finding-card">', idx)) !== -1) {
  cardStarts.push(idx);
  idx += 26;
}

console.log('Total finding cards found:', cardStarts.length);

const parsed = [];
for (let i = 0; i < cardStarts.length; i++) {
  const start = cardStarts[i];
  const end = i + 1 < cardStarts.length ? cardStarts[i + 1] : content.indexOf('<!-- ═══', start);
  const block = content.slice(start, end !== -1 ? end : start + 5000);

  const ruleMatch = block.match(/<div class="finding-rule">([^<]+)<\/div>/);
  const impactMatch = block.match(/<span class="impact-badge[^"]*">([^<]+)<\/span>/);
  const descMatch = block.match(/<div class="finding-desc">([\s\S]*?)<\/div>/);
  const fixMatch = block.match(/<div class="finding-fix">([\s\S]*?)<\/div>/);
  const codeMatch = block.match(/<div class="finding-code">([\s\S]*?)<\/div>/);
  const selectorMatch = block.match(/<div class="finding-selector">([\s\S]*?)<\/div>/);
  const pagesMatch = block.match(/<div class="pages-list">([\s\S]*?)<\/div>/);

  parsed.push({
    rule: ruleMatch ? ruleMatch[1].trim() : '',
    impact: impactMatch ? impactMatch[1].trim() : '',
    desc: descMatch ? descMatch[1].trim().replace(/<[^>]+>/g, '') : '',
    fix: fixMatch ? fixMatch[1].trim().replace(/<[^>]+>/g, '') : '',
    code: codeMatch ? codeMatch[1].trim() : '',
    selector: selectorMatch ? selectorMatch[1].trim() : '',
    pages: pagesMatch ? pagesMatch[1].trim().replace(/<[^>]+>/g, ' ') : ''
  });
}

fs.writeFileSync('scripts/parsed_findings.json', JSON.stringify(parsed, null, 2));

console.log('Unique rules:');
const byRule = {};
parsed.forEach(p => {
  if (!byRule[p.rule]) byRule[p.rule] = [];
  byRule[p.rule].push(p);
});
for (const [r, list] of Object.entries(byRule)) {
  console.log(`- [${list[0].impact}] ${r} (${list.length} instances in cards)`);
}
