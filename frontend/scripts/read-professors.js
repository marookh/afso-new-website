const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const excelPath = path.join(__dirname, '../public/assets/AFSO Web Assets/A Professors Directory.xlsx');
const workbook = XLSX.readFile(excelPath);

// Get the first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON
const professors = XLSX.utils.sheet_to_json(worksheet);

// Output the data
console.log('Total professors:', professors.length);
console.log('\nFirst 5 professors:');
console.log(JSON.stringify(professors.slice(0, 5), null, 2));

// Save to JSON file for easier access
const outputPath = path.join(__dirname, '../public/assets/professors-data.json');
fs.writeFileSync(outputPath, JSON.stringify(professors, null, 2));
console.log('\nData saved to:', outputPath);

