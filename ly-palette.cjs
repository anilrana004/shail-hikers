const fs = require('fs');
const path = require('path');

const replacements = [
  ['#2D1B1E', '#FFFFFF'],
  ['#1A0E10', '#E6D8C4'],
  ['#B5525E', '#F88379'],
  ['#FAD4D8', '#1A1A1A'],
  ['#E8A0AA', '#4A4A4A'],
  ['#C9A84C', '#D4A843'],
  ['#A8C5DA', '#82C8E5'],
  ['#2D5016', '#2D6A4F'],
  ['#FDF6F7', '#FFFFFF'],
  ['rgba(181,82,94', 'rgba(248,131,121'],
  ['rgba(45,27,30,0.88)', 'rgba(255,255,255,0.95)'],
  ['rgba(45,27,30,0.95)', 'rgba(255,255,255,0.95)'],
  ['rgba(45,27,30,0.9)', 'rgba(255,255,255,0.95)'],
  ['rgba(45,27,30,0.8)', 'rgba(255,255,255,0.9)'],
  ['rgba(45,27,30,0.7)', 'rgba(255,255,255,0.85)'],
  ['rgba(45,27,30,0.5)', 'rgba(255,255,255,0.7)'],
  ['rgba(45,27,30,0.3)', 'rgba(255,255,255,0.4)'],
  ['rgba(45,27,30,0.2)', 'rgba(255,255,255,0.25)'],
  ['rgba(45,27,30,0.1)', 'rgba(255,255,255,0.15)'],
  ['rgba(45,27,30,0.05)', 'rgba(255,255,255,0.08)'],
  ['rgba(26,14,16,0.88)', 'rgba(255,255,255,0.95)'],
  ['rgba(26,14,16,0.95)', 'rgba(255,255,255,0.95)'],
  ['rgba(26,14,16,0.9)', 'rgba(255,255,255,0.95)'],
  ['rgba(26,14,16,0.8)', 'rgba(255,255,255,0.9)'],
  ['rgba(26,14,16,0.7)', 'rgba(255,255,255,0.85)'],
  ['rgba(26,14,16,0.6)', 'rgba(255,255,255,0.8)'],
  ['rgba(26,14,16,0.5)', 'rgba(255,255,255,0.7)'],
  ['rgba(26,14,16,0.4)', 'rgba(255,255,255,0.5)'],
  ['rgba(26,14,16,0.3)', 'rgba(255,255,255,0.4)'],
  ['rgba(26,14,16,0.2)', 'rgba(255,255,255,0.25)'],
  ['rgba(26,14,16,0.1)', 'rgba(255,255,255,0.15)'],
  ['rgba(26,14,16,0.05)', 'rgba(255,255,255,0.08)'],
  ["bg-[#2D1B1E]", "bg-white"],
  ["bg-[#1A0E10]", "bg-[#E6D8C4]"],
  ["bg-[#B5525E]", "bg-[#F88379]"],
  ["text-[#FAD4D8]", "text-[#1A1A1A]"],
  ["text-[#E8A0AA]", "text-[#4A4A4A]"],
  ["text-[#C9A84C]", "text-[#D4A843]"],
  ["bg-[#C9A84C]", "bg-[#D4A843]"],
  ["border-[#B5525E]", "border-[#F88379]"],
  ["border-[#E8A0AA]", "border-[#F88379]"],
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules') {
      files.push(...walk(full));
    } else if (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) {
      files.push(full);
    }
  }
  return files;
}

const srcDir = path.join(__dirname, 'src/frontend/src');
const files = walk(srcDir);
let changed = 0;

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  let modified = content;
  for (const [from, to] of replacements) {
    if (modified.includes(from)) {
      modified = modified.split(from).join(to);
    }
  }
  if (modified !== content) {
    fs.writeFileSync(f, modified);
    changed++;
    console.log('patched:', path.relative(srcDir, f));
  }
}

console.log('Total changed:', changed);
