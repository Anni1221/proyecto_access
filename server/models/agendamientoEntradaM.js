const { readFile, writeFile } = require('../utils/utils');

// Función para obtener todos los agendamientos de entrada
const getAllAgendamientos = async () => {
  const data = await readFile();
  return data.agendamientoEntrada || [];
};

// Función para obtener un agendamiento de entrada por ID
const getAgendamientoById = async (agendamientoEntradaId) => {
  const data = await readFile();
  return (data.agendamientoEntrada || []).find(a => a.agendamientoEntradaId === parseInt(agendamientoEntradaId, 10));
};

// Función para crear un nuevo agendamiento de entrada
const createAgendamiento = async (nuevoAgendamiento) => {
  const data = await readFile();
  nuevoAgendamiento.agendamientoEntradaId = data.agendamientoEntrada.length ? Math.max(data.agendamientoEntrada.map(a => a.agendamientoEntradaId)) + 1 : 1;
  data.agendamientoEntrada.push(nuevoAgendamiento);
  await writeFile(data);
  return nuevoAgendamiento;
};

module.exports = {
  getAllAgendamientos,
  getAgendamientoById,
  createAgendamiento,
};
