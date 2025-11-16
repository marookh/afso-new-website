const data = require('../lib/professors-data.json');

const check = ['O\'Brien', 'O\'Hara', 'Hussein', 'Ferriss', 'Akhtari'];

console.log('Checking photos for problematic professors:\n');
check.forEach(name => {
  const found = data.find(p => 
    p.name.toLowerCase().includes(name.toLowerCase()) || 
    p.originalName.toLowerCase().includes(name.toLowerCase())
  );
  if (found) {
    console.log(`${name}:`);
    console.log(`  Name: ${found.name}`);
    console.log(`  Image: ${found.image || 'MISSING'}`);
    console.log(`  Found Photo: ${found.foundPhoto}`);
    console.log('');
  } else {
    console.log(`${name}: NOT FOUND in data\n`);
  }
});

