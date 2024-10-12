const { readFile, writeFile } = require('../utils/utils');

// Función para obtener todas las unidades residenciales
const getAllUnidadesResidenciales = () => {
  const data = readFile();
  return data.unidadResidencial;
};

// Función para obtener una unidad residencial por ID
const getUnidadResidencialById = (unidadResidencialId) => {
  const data = readFile();
  return data.unidadResidencial.find(u => u.unidadResidencialId === parseInt(unidadResidencialId, 10));
};

// Función para crear una nueva unidad residencial
const createUnidadResidencial = (nuevaUnidad) => {
  const data = readFile();
  nuevaUnidad.unidadResidencialId = data.unidadResidencial.length ? Math.max(data.unidadResidencial.map(u => u.unidadResidencialId)) + 1 : 1;
  data.unidadResidencial.push(nuevaUnidad);
  writeFile(data);
  return nuevaUnidad;
};

module.exports = {
  getAllUnidadesResidenciales,
  getUnidadResidencialById,
  createUnidadResidencial,
};
