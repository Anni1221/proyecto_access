const fs = require('fs');
const path = require('path');

// Ruta al archivo db.json
const dbPath = path.join(__dirname, '../db.json');  // Apunta a la ruta correcta fuera de 'utils'

// Función para leer el archivo JSON
function readFile() {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error al leer el archivo:', err);
    return {};
  }
}

// Función para escribir en el archivo JSON
function writeFile(data) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
    console.log('Archivo guardado correctamente');
  } catch (err) {
    console.error('Error al escribir en el archivo:', err);
  }
}

module.exports = {
  readFile,
  writeFile,
};
