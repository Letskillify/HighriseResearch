import fs from 'fs';

const findings = JSON.parse(fs.readFileSync('scripts/parsed_findings.json', 'utf8'));

console.log('=== BUTTONS MUST HAVE DISCERNIBLE TEXT ===');
findings.filter(f => f.rule.includes('Buttons must have discernible text')).forEach(f => {
  console.log('Selector:', f.selector);
  console.log('Code:', f.code);
  console.log('Fix:', f.fix);
  console.log('Pages:', f.pages);
  console.log('---');
});

console.log('\n=== FORM ELEMENTS MUST HAVE LABELS ===');
findings.filter(f => f.rule.includes('Form elements must have labels')).forEach(f => {
  console.log('Selector:', f.selector);
  console.log('Code:', f.code);
  console.log('Fix:', f.fix);
  console.log('Pages:', f.pages);
  console.log('---');
});

console.log('\n=== LINKS MUST HAVE DISCERNIBLE TEXT ===');
const linkFindings = findings.filter(f => f.rule.includes('Links must have discernible text'));
const uniqueLinkCodes = new Set();
linkFindings.forEach(f => {
  uniqueLinkCodes.add(f.code + ' | ' + f.selector);
});
console.log('Unique link issues count:', uniqueLinkCodes.size);
uniqueLinkCodes.forEach(c => console.log(c));

console.log('\n=== COLOR CONTRAST ISSUES ===');
const contrastFindings = findings.filter(f => f.rule.includes('color contrast'));
const uniqueContrast = new Set();
contrastFindings.forEach(f => {
  uniqueContrast.add(f.selector + ' ---> ' + f.code);
});
console.log('Unique contrast count:', uniqueContrast.size);
Array.from(uniqueContrast).slice(0, 30).forEach(c => console.log(c));
