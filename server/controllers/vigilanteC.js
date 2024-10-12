const { readFile, writeFile } = require('../utils/utils');

// Función para obtener todos los vigilantes
const getAllVigilantes = async () => {
  const data = await readFile();
  return data.Vigilante || [];
};

// Función para obtener un vigilante por ID
const getVigilanteById = async (vigilanteId) => {
  const data = await readFile();
  return (data.Vigilante || []).find(v => v.VigilanteId === parseInt(vigilanteId, 10));
};

// Función para crear un nuevo vigilante
const createVigilante = async (nuevoVigilante) => {
  const data = await readFile();
  nuevoVigilante.VigilanteId = data.Vigilante.length ? Math.max(data.Vigilante.map(v => v.VigilanteId)) + 1 : 1;
  data.Vigilante.push(nuevoVigilante);
  await writeFile(data);
  return nuevoVigilante;
};

module.exports = {
  getAllVigilantes,
  getVigilanteById,
  createVigilante,
};
