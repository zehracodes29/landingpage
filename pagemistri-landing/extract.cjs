const fs = require('fs');
const https = require('https');
https.get('https://pagemistri-services.pagemistri.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // Find all texts inside <p> or <h3> inside the section with data-page-slug
    const matches = data.match(/<h3[^>]*>(.*?)<\/h3>/g);
    if(matches) {
       matches.forEach(m => console.log(m));
    }
  });
});
