import fs from 'fs';
import path from 'path';

const issues = JSON.parse(fs.readFileSync('scripts/extracted_issues.json', 'utf8'));

// Read all jsx/js files in src
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

const allSrcFiles = getAllFiles('src');
allSrcFiles.push('index.html');

console.log(`Found ${allSrcFiles.length} source files`);

const fileContents = {};
allSrcFiles.forEach(f => {
  fileContents[f] = fs.readFileSync(f, 'utf8');
});

// Group issues by rule
const byRule = {};
issues.forEach(iss => {
  if (!byRule[iss.rule]) byRule[iss.rule] = [];
  iss.elements.forEach(el => {
    byRule[iss.rule].push({
      page: iss.page,
      ...el
    });
  });
});

for (const [rule, elements] of Object.entries(byRule)) {
  console.log(`\n======================================================`);
  console.log(`RULE: ${rule} (${elements.length} instances)`);
  
  // Find unique selectors/codes
  const uniqueItems = new Map();
  elements.forEach(e => {
    const key = e.code;
    if (!uniqueItems.has(key)) {
      uniqueItems.set(key, { count: 0, pages: new Set(), selector: e.selector, code: e.code });
    }
    const item = uniqueItems.get(key);
    item.count++;
    item.pages.add(e.page);
  });

  console.log(`Unique items: ${uniqueItems.size}`);
  
  for (const [code, item] of uniqueItems.entries()) {
    // Try to find matching text in source files
    // Extract a distinctive text or class substring from code
    const classMatch = code.match(/class="([^"]+)"/);
    const classes = classMatch ? classMatch[1].split(/\s+/).filter(c => c.length > 3 && !c.includes(':')) : [];
    
    // Also extract inner text if any
    const textMatch = code.match(/>([^<]+)</);
    const innerText = textMatch ? textMatch[1].trim() : '';

    const matches = [];
    allSrcFiles.forEach(file => {
      const content = fileContents[file];
      if (innerText && innerText.length > 3 && content.includes(innerText)) {
        matches.push({ file, reason: `text: "${innerText.slice(0, 30)}"` });
      }
    });

    console.log(`\nItem (${item.count}x on ${item.pages.size} pages) [${item.selector}]`);
    console.log(`Code: ${code.slice(0, 120)}`);
    if (matches.length > 0) {
      console.log(`Found in files:`, matches.map(m => `${m.file} (${m.reason})`).join(', '));
    } else {
      console.log(`Not directly matched by inner text, testing classes...`);
    }
  }
}
