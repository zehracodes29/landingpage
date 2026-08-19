const fs = require('fs');
const path = require('path');

const directoryToScan = path.join(__dirname, 'src', 'components');

const replacements = [
  // Fix broken surface classes caused by partial regex replacements
  { regex: /bg-\[#4400AF\]-surface-xs/g, replace: 'bg-[rgba(68,0,175,0.05)]' },
  { regex: /bg-\[#4400AF\]-surface-sm/g, replace: 'bg-[rgba(68,0,175,0.08)]' },
  { regex: /bg-\[#4400AF\]-surface-md/g, replace: 'bg-[rgba(68,0,175,0.10)]' },
  { regex: /hover:bg-\[#4400AF\]-surface-[a-z]+/g, replace: 'hover:bg-[rgba(68,0,175,0.06)]' },
  
  // Just in case border-brand-border broke to border-[#4400AF]-border
  { regex: /border-\[#4400AF\]-border/g, replace: 'border-[rgba(68,0,175,0.18)]' }
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
