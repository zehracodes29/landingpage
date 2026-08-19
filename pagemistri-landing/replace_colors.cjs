const fs = require('fs');
const path = require('path');

const directoryToScan = path.join(__dirname, 'src', 'components');

const replacements = [
  // Primary CTAs / Focus / Active Icons / Key Numbers
  { regex: /bg-\[#4400AF\] hover:bg-\[#310080\]/g, replace: 'bg-brand hover:bg-brand-hover' },
  { regex: /text-\[#4400AF\]/g, replace: 'text-brand' },
  { regex: /bg-\[#4400AF\]/g, replace: 'bg-brand' },
  { regex: /bg-\[#310080\]/g, replace: 'bg-brand-hover' },
  
  // Specific sections rules
  { regex: /text-purple-600/g, replace: 'text-brand' },
  { regex: /bg-purple-600/g, replace: 'bg-brand' },
  { regex: /bg-purple-700/g, replace: 'bg-brand' },
  { regex: /hover:bg-purple-700/g, replace: 'hover:bg-brand-hover' },
  { regex: /hover:bg-purple-800/g, replace: 'hover:bg-brand-hover' },
  { regex: /text-purple-700/g, replace: 'text-brand' },
  
  { regex: /border-purple-600/g, replace: 'border-brand' },
  { regex: /border-\[#4400AF\]/g, replace: 'border-brand' },
  { regex: /hover:text-purple-600/g, replace: 'hover:text-brand' },
  
  // Opacity backgrounds
  { regex: /bg-purple-50/g, replace: 'bg-brand-surface-xs' },
  { regex: /bg-purple-100/g, replace: 'bg-brand-surface-sm' },
  { regex: /bg-purple-900\/40/g, replace: 'bg-brand-surface-sm' },
  { regex: /bg-purple-900\/30/g, replace: 'bg-brand-surface-sm' },
  { regex: /bg-\[#5841D8\]\/10/g, replace: 'bg-brand-surface-md' },
  
  // Text colors
  { regex: /text-slate-900/g, replace: 'text-text-primary' },
  { regex: /text-\[#111827\]/g, replace: 'text-text-primary' },
  { regex: /text-slate-600/g, replace: 'text-text-muted' },
  { regex: /text-slate-500/g, replace: 'text-text-secondary' },
  
  // Hardcoded purples
  { regex: /#5841D8/gi, replace: '#4400AF' },
  { regex: /#5B06BE/gi, replace: '#4400AF' },
  { regex: /#7C00FF/gi, replace: '#4400AF' },
  { regex: /#8B00FF/gi, replace: '#4400AF' },
  { regex: /#6D00D9/gi, replace: '#4400AF' },
  { regex: /#9B00FF/gi, replace: '#4400AF' },
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
