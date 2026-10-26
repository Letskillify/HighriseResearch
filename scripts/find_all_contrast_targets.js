import fs from 'fs';
import path from 'path';

const issues = JSON.parse(fs.readFileSync('scripts/extracted_issues.json', 'utf8'));
const contrastIssues = issues.filter(i => i.rule.toLowerCase().includes('contrast'));
const allContrastElements = [];
contrastIssues.forEach(m => m.elements.forEach(e => allContrastElements.push({ page: m.page, ...e })));

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles('src');
const fileContents = {};
files.forEach(f => fileContents[f] = fs.readFileSync(f, 'utf8'));

// Unique by code
const uniqueMap = new Map();
allContrastElements.forEach(item => {
  if (!uniqueMap.has(item.code)) {
    uniqueMap.set(item.code, { count: 0, pages: new Set(), selector: item.selector, code: item.code });
  }
  const u = uniqueMap.get(item.code);
  u.count++;
  u.pages.add(item.page);
});

console.log(`Unique contrast elements: ${uniqueMap.size}`);

const results = [];

for (const [code, info] of uniqueMap.entries()) {
  // Try to find matching file
  // Clean html entities
  let cleanCode = code
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');

  // find text
  const textMatches = cleanCode.match(/>([^<]+)</g);
  const textPieces = textMatches ? textMatches.map(t => t.slice(1, -1).trim()).filter(t => t.length > 3) : [];

  let candidateFiles = [];
  if (textPieces.length > 0) {
    files.forEach(f => {
      if (textPieces.some(tp => fileContents[f].includes(tp))) {
        candidateFiles.push(f);
      }
    });
  }

  results.push({
    count: info.count,
    pages: Array.from(info.pages),
    selector: info.selector,
    code: cleanCode,
    textPieces,
    candidateFiles
  });
}

fs.writeFileSync('scripts/contrast_analysis.json', JSON.stringify(results, null, 2));

results.forEach((r, idx) => {
  console.log(`\n[#${idx + 1}] (${r.count}x on ${r.pages.length} pages) [${r.selector}]`);
  console.log(`Files: ${r.candidateFiles.join(', ') || 'NONE FOUND'}`);
  console.log(`Code: ${r.code.slice(0, 140)}`);
});
