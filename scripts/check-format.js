const fs = require('fs');
for (const file of ['index.html','manifest.json','README.md']) {
  const text = fs.readFileSync(file,'utf8');
  if (!text.endsWith('\n')) throw new Error(`${file} must end with newline`);
}
console.log('Format check passed');
