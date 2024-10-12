const { readFile, writeFile } = require('../utils/utils');

// Función para obtener todos los parqueaderos
const getAllParqueaderos = () => {
  const data = readFile();
  return data.parqueadero;
};

// Función para obtener un parqueadero por ID
const getParqueaderoById = (parqueaderoId) => {
  const data = readFile();
  return data.parqueadero.find(p => p.parqueaderoId === parseInt(parqueaderoId, 10));
};

// Función para crear un nuevo parqueadero
const createParqueadero = (nuevoParqueadero) => {
  const data = readFile();
  nuevoParqueadero.parqueaderoId = data.parqueadero.length ? Math.max(data.parqueadero.map(p => p.parqueaderoId)) + 1 : 1;
  data.parqueadero.push(nuevoParqueadero);
  writeFile(data);
  return nuevoParqueadero;
};

module.exports = {
  getAllParqueaderos,
  getParqueaderoById,
  createParqueadero,
};
