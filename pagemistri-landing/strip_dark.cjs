const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    // Replace all dark:classes
    content = content.replace(/dark:[a-zA-Z0-9\-\/\[\]\#\.]+/g, '');
    // Clean up double spaces caused by the deletion
    content = content.replace(/ {2,}/g, ' ');
    // Clean up spaces before quotes
    content = content.replace(/ "\}/g, '"}');
    content = content.replace(/ '\} /g, "'}");
    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
