const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('index.html','utf8');
for (const f of ['manifest.json','data/iv-master.json','data/meal-master.json','data/enteral-master.json','data/ons-master.json']) JSON.parse(fs.readFileSync(f,'utf8'));
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
for (const code of scripts) new vm.Script(code, { filename: 'index.html.inline.js' });
if (!/<main id="app-start">/.test(html)) throw new Error('Missing app-start main landmark');
if (!/prefers-reduced-motion/.test(html)) throw new Error('Missing reduced motion handling');
console.log('Static validation passed');
