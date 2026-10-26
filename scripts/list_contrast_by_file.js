import fs from 'fs';
import path from 'path';

const issues = JSON.parse(fs.readFileSync('scripts/extracted_issues.json', 'utf8'));

// Filter contrast
const contrastIssues = issues.filter(i => i.rule.toLowerCase().includes('contrast'));
const allContrastElements = [];
contrastIssues.forEach(m => m.elements.forEach(e => allContrastElements.push({ page: m.page, ...e })));

console.log(`Total contrast instances: ${allContrastElements.length}`);

// Group by unique code
const unique = new Map();
allContrastElements.forEach(e => {
  if (!unique.has(e.code)) {
    unique.set(e.code, { count: 0, pages: new Set(), selector: e.selector, code: e.code });
  }
  const u = unique.get(e.code);
  u.count++;
  u.pages.add(e.page);
});

console.log(`Unique items: ${unique.size}`);

// Read all src files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.html')) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}
const srcFiles = getAllFiles('src');
srcFiles.push('index.html');

const fileTexts = {};
srcFiles.forEach(f => fileTexts[f] = fs.readFileSync(f, 'utf8'));

const mapped = [];
const unmapped = [];

for (const [code, item] of unique.entries()) {
  // Extract key search terms
  // e.g. text between tags
  const textMatch = code.match(/>([^<]+)</);
  const text = textMatch ? textMatch[1].trim() : '';

  let foundFile = null;
  for (const f of srcFiles) {
    if (text && text.length > 4 && fileTexts[f].includes(text)) {
      foundFile = f;
      break;
    }
  }

  if (foundFile) {
    mapped.push({ ...item, file: foundFile, text });
  } else {
    // try finding by distinct class sequence
    const classMatch = code.match(/class="([^"]+)"/);
    const classes = classMatch ? classMatch[1] : '';
    let foundByClass = null;
    for (const f of srcFiles) {
      if (classes && fileTexts[f].includes(classes)) {
        foundByClass = f;
        break;
      }
    }
    if (foundByClass) {
      mapped.push({ ...item, file: foundByClass, text: classes });
    } else {
      unmapped.push(item);
    }
  }
}

console.log(`Mapped items: ${mapped.length}`);
console.log(`Unmapped items: ${unmapped.length}`);

// Group mapped by file
const byFile = {};
mapped.forEach(m => {
  if (!byFile[m.file]) byFile[m.file] = [];
  byFile[m.file].push(m);
});

for (const [file, items] of Object.entries(byFile)) {
  const totalCount = items.reduce((s, it) => s + it.count, 0);
  console.log(`\n======================================================`);
  console.log(`FILE: ${file} (${totalCount} instances, ${items.length} unique)`);
  items.forEach(it => {
    console.log(`  [${it.count}x on ${it.pages.size} pages] Text: "${it.text.slice(0, 40)}"`);
    console.log(`    HTML: ${it.code.slice(0, 100)}`);
  });
}

if (unmapped.length > 0) {
  console.log('\n=== UNMAPPED ITEMS ===');
  unmapped.forEach(it => {
    console.log(`[${it.count}x] Selector: ${it.selector}`);
    console.log(`  HTML: ${it.code}`);
  });
}
