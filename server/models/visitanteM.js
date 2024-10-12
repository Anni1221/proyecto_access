const { readFile, writeFile } = require('../utils/utils');

// Función para obtener todos los visitantes
const getAllVisitantes = () => {
  const data = readFile();
  return data.visitante;
};

// Función para obtener un visitante por ID
const getVisitanteById = (visitanteId) => {
  const data = readFile();
  return data.visitante.find(v => v.visitanteId === parseInt(visitanteId, 10));
};

// Función para crear un nuevo visitante
const createVisitante = (nuevoVisitante) => {
  const data = readFile();
  nuevoVisitante.visitanteId = data.visitante.length ? Math.max(data.visitante.map(v => v.visitanteId)) + 1 : 1;
  data.visitante.push(nuevoVisitante);
  writeFile(data);
  return nuevoVisitante;
};

module.exports = {
  getAllVisitantes,
  getVisitanteById,
  createVisitante,
};
