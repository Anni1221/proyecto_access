const { readFile, writeFile } = require('../utils/utils');

// Función para obtener todos los vigilantes
const getAllVigilantes = () => {
  const data = readFile();
  return data.Vigilante;
};

// Función para obtener un vigilante por ID
const getVigilanteById = (vigilanteId) => {
  const data = readFile();
  return data.Vigilante.find(v => v.vigilanteId === parseInt(vigilanteId, 10));
};

// Función para crear un nuevo vigilante
const createVigilante = (nuevoVigilante) => {
  const data = readFile();
  nuevoVigilante.vigilanteId = data.Vigilante.length ? Math.max(data.Vigilante.map(v => v.vigilanteId)) + 1 : 1;
  data.Vigilante.push(nuevoVigilante);
  writeFile(data);
  return nuevoVigilante;
};

module.exports = {
  getAllVigilantes,
  getVigilanteById,
  createVigilante,
};
