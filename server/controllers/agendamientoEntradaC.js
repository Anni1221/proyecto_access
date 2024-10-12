const { readFile, writeFile } = require('../utils/utils');

// Obtener todos los agendamientos de entrada
const getAllAgendamientos = (req, res) => {
  const data = readFile();
  res.json(data.agendamientoEntrada || []);
};

// Obtener agendamiento por ID
const getAgendamientoById = (req, res) => {
  const { agendamientoEntradaId } = req.params;
  const data = readFile();
  const agendamiento = (data.agendamientoEntrada || []).find(a => a.agendamientoEntradaId === parseInt(agendamientoEntradaId, 10));
  if (agendamiento) {
    res.json(agendamiento);
  } else {
    res.status(404).json({ message: 'Agendamiento no encontrado' });
  }
};

// Crear nuevo agendamiento de entrada
const createAgendamiento = (req, res) => {
  const data = readFile();
  const nuevoAgendamiento = req.body;
  nuevoAgendamiento.agendamientoEntradaId = data.agendamientoEntrada.length ? Math.max(data.agendamientoEntrada.map(a => a.agendamientoEntradaId)) + 1 : 1;
  data.agendamientoEntrada.push(nuevoAgendamiento);
  writeFile(data);
  res.status(201).json(nuevoAgendamiento);
};

module.exports = {
  getAllAgendamientos,
  getAgendamientoById,
  createAgendamiento,
};
