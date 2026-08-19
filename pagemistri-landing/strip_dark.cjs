const fs = require('fs');
const path = require('path');

const directoryToScan = path.join(__dirname, 'src', 'components');

const replacements = [
  // Remove dark: variants of purple
  { regex: /dark:text-purple-[34]00(\/80)?/g, replace: '' },
  { regex: /dark:bg-purple-9[05]0(\/[0-9]+)?/g, replace: '' },
  { regex: /dark:border-purple-[89]00(\/[0-9]+)?/g, replace: '' },
  { regex: /dark:group-hover:bg-purple-900(\/[0-9]+)?/g, replace: '' },
  
  // Lead Form focus rings
  { regex: /ring-purple-600/g, replace: 'ring-brand' },
  
  // Gradients
  { regex: /bg-gradient-to-[brl] from-[a-z0-9\/-]+ (via-[a-z0-9\/-]+ )?to-[a-z0-9\/-]+/g, replace: 'bg-gradient-to-br from-brand-surface-md to-brand-surface-xs' },
  
  // Pricing
  { regex: /border-purple-200/g, replace: 'border-brand-border' },
  { regex: /bg-indigo-950\/90/g, replace: 'bg-brand' },
  { regex: /bg-purple-900/g, replace: 'bg-brand' }, 
  
  { regex: /border-purple-300\/40/g, replace: 'border-white/40' },
  { regex: /text-purple-300/g, replace: 'text-brand' },
  { regex: /text-purple-200/g, replace: 'text-white' }, 
  
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
    // Clean up empty classes left by removing dark: classes (e.g. `class="  "`)
    content = content.replace(/ className="([^"]*)"/g, (match, p1) => {
      return ` className="${p1.replace(/\s+/g, ' ').trim()}"`;
    });
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated: ' + file);
      count++;
    }
  }
  console.log(`Updated ${count} files.`);
});
