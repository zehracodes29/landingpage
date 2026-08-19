const fs = require('fs');
const path = require('path');

const directoryToScan = path.join(__dirname, 'src', 'components');

const replacements = [
  // Backgrounds
  { regex: /\bbg-brand-hover\b/g, replace: 'bg-[#310080]' },
  { regex: /\bbg-brand\b/g, replace: 'bg-[#4400AF]' },
  
  // Surfaces
  { regex: /\bbg-brand-surface-xs0\/10\b/g, replace: 'bg-[rgba(68,0,175,0.05)]' }, // Fix any weird merges
  { regex: /\bbg-brand-surface-xs\b/g, replace: 'bg-[rgba(68,0,175,0.05)]' },
  { regex: /\bbg-brand-surface-sm\b/g, replace: 'bg-[rgba(68,0,175,0.08)]' },
  { regex: /\bbg-brand-surface-md\b/g, replace: 'bg-[rgba(68,0,175,0.10)]' },
  
  // Text
  { regex: /\btext-brand\b/g, replace: 'text-[#4400AF]' },
  { regex: /\btext-brand-hover\b/g, replace: 'text-[#310080]' },
  
  { regex: /\btext-text-primary\b/g, replace: 'text-[#111827]' },
  { regex: /\btext-text-secondary\b/g, replace: 'text-[#52627A]' },
  { regex: /\btext-text-muted\b/g, replace: 'text-[#6B7280]' },
  
  // Borders
  { regex: /\bborder-brand-border\b/g, replace: 'border-[rgba(68,0,175,0.18)]' },
  { regex: /\bborder-brand\b/g, replace: 'border-[#4400AF]' },
  { regex: /\bborder-border-neutral\b/g, replace: 'border-slate-200' },
  
  // Rings
  { regex: /\bring-brand\b/g, replace: 'ring-[#4400AF]' },
  
];

function walk(dir, done) {
  let results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.tsx')) {
            results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
}

walk(directoryToScan, (err, files) => {
  if (err) throw err;
  let count = 0;
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    for (const r of replacements) {
      content = content.replace(r.regex, r.replace);
    }
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated: ' + file);
      count++;
    }
  }
  console.log(`Updated ${count} files.`);
});
