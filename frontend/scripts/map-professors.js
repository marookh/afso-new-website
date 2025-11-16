const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file directly
const excelPath = path.join(__dirname, '../public/assets/AFSO Web Assets/A Professors Directory.xlsx');
const workbook = XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const professorsData = XLSX.utils.sheet_to_json(worksheet);

// Get all photo filenames
const photosDir = path.join(__dirname, '../public/assets/AFSO Web Assets/AFSO A to Z Professor Photos');
const photoFiles = fs.readdirSync(photosDir);

// Function to normalize names for matching
function normalizeName(name) {
  if (!name) return '';
  return name
    .toLowerCase()
    .normalize('NFD') // Normalize unicode characters (ö -> o + combining mark)
    .replace(/[\u0300-\u036f]/g, '') // Remove combining marks
    .replace(/'/g, '') // Remove apostrophes
    .replace(/_/g, '') // Remove underscores
    .replace(/,/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Function to extract name parts
function extractNameParts(name) {
  const normalized = normalizeName(name);
  const parts = normalized.split(' ').filter(p => p.length > 0);
  return {
    all: parts,
    first: parts[0],
    last: parts[parts.length - 1],
    middle: parts.slice(1, -1)
  };
}

// Function to find matching photo file
function findPhotoFile(excelName, photoFiles) {
  const excelParts = extractNameParts(excelName);
  
  // Try multiple matching strategies
  for (const photoFile of photoFiles) {
    const photoName = photoFile.replace(/\.(png|jpg|jpeg)$/i, '');
    const photoParts = extractNameParts(photoName);
    
    // Strategy 1: All parts match (order doesn't matter)
    const excelWords = new Set(excelParts.all);
    const photoWords = new Set(photoParts.all);
    if (excelWords.size === photoWords.size && 
        [...excelWords].every(word => photoWords.has(word))) {
      return photoFile;
    }
    
    // Strategy 2: Last name and first name match (handles different orders)
    if (excelParts.last && photoParts.last && 
        excelParts.first && photoParts.first &&
        excelParts.last === photoParts.last && 
        excelParts.first === photoParts.first) {
      return photoFile;
    }
    
    // Strategy 3: Last name matches and at least one other name part
    if (excelParts.last && photoParts.last && 
        excelParts.last === photoParts.last) {
      const otherMatches = excelParts.all.filter(part => 
        part !== excelParts.last && photoParts.all.includes(part)
      );
      if (otherMatches.length > 0) {
        return photoFile;
      }
    }
    
    // Strategy 4: Handle common variations
    // Akhtari vs Akhatari
    if ((normalizeName(excelName).includes('akhtari') || normalizeName(excelName).includes('akhatari')) &&
        (normalizeName(photoName).includes('akhtari') || normalizeName(photoName).includes('akhatari'))) {
      const excelWords = new Set(excelParts.all);
      const photoWords = new Set(photoParts.all);
      if ([...excelWords].filter(w => w !== 'akhtari' && w !== 'akhatari').every(word => 
          photoWords.has(word) || photoWords.has(word.replace('akhtari', 'akhatari').replace('akhatari', 'akhtari')))) {
        return photoFile;
      }
    }
    
    // Strategy 5: Handle Ferris vs Ferriss
    if ((normalizeName(excelName).includes('ferris') || normalizeName(excelName).includes('ferriss')) &&
        (normalizeName(photoName).includes('ferris') || normalizeName(photoName).includes('ferriss'))) {
      const excelWords = new Set(excelParts.all);
      const photoWords = new Set(photoParts.all);
      if ([...excelWords].filter(w => w !== 'ferris' && w !== 'ferriss').every(word => 
          photoWords.has(word) || photoWords.has(word.replace('ferris', 'ferriss').replace('ferriss', 'ferris')))) {
        return photoFile;
      }
    }
  }
  
  return null;
}

// Map professors to their photos
const mappedProfessors = professorsData.map(prof => {
  const photoFile = findPhotoFile(prof.Name, photoFiles);
  const photoPath = photoFile 
    ? `/assets/AFSO Web Assets/AFSO A to Z Professor Photos/${photoFile}`
    : null;
  
  // Format name (remove comma, capitalize properly)
  const nameParts = prof.Name.split(',').map(s => s.trim());
  const formattedName = nameParts.length > 1 
    ? `${nameParts[1]} ${nameParts[0]}`.trim()
    : prof.Name.trim();
  
  return {
    name: formattedName,
    bio: prof['Bio '] || prof.Bio || '',
    image: photoPath,
    originalName: prof.Name,
    foundPhoto: !!photoFile
  };
});

// Sort alphabetically by last name
mappedProfessors.sort((a, b) => {
  const aLast = a.name.split(' ').pop() || '';
  const bLast = b.name.split(' ').pop() || '';
  return aLast.localeCompare(bLast);
});

// Check for specific professors
const checkProfessors = ['O\'Brien', 'O\'Hara', 'Hussein', 'Ferriss', 'Ferris', 'Akhtari', 'Akhatari'];
checkProfessors.forEach(checkName => {
  const found = mappedProfessors.find(p => 
    normalizeName(p.name).includes(normalizeName(checkName)) ||
    normalizeName(p.originalName).includes(normalizeName(checkName))
  );
  if (found) {
    console.log(`\n${checkName}:`);
    console.log(`  Name: ${found.name}`);
    console.log(`  Photo: ${found.image || 'NOT FOUND'}`);
    console.log(`  Found: ${found.foundPhoto}`);
  }
});

// Save mapped data
const outputPath = path.join(__dirname, '../lib/professors-data.json');
fs.writeFileSync(outputPath, JSON.stringify(mappedProfessors, null, 2));
console.log(`\nMapped ${mappedProfessors.length} professors`);
console.log(`Found photos for ${mappedProfessors.filter(p => p.foundPhoto).length} professors`);
console.log(`Saved to: ${outputPath}`);
