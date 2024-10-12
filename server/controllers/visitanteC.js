const { readFile, writeFile } = require('../utils/utils');

// Obtener todos los visitantes
const getAllVisitantes = (req, res) => {
  const data = readFile();
  res.json(data.visitante);
};

// Obtener visitante por ID
const getVisitanteById = (req, res) => {
  const { visitanteId } = req.params;
  const data = readFile();
  const visitante = data.visitante.find(v => v.visitanteId === parseInt(visitanteId, 10));
  if (visitante) {
    res.json(visitante);
  } else {
    res.status(404).json({ message: 'Visitante no encontrado' });
  }
};

// Crear nuevo visitante
const createVisitante = (req, res) => {
  const data = readFile();
  const nuevoVisitante = req.body;
  nuevoVisitante.visitanteId = data.visitante.length ? Math.max(data.visitante.map(v => v.visitanteId)) + 1 : 1;
  data.visitante.push(nuevoVisitante);
  writeFile(data);
  res.status(201).json(nuevoVisitante);
};

module.exports = {
  getAllVisitantes,
  getVisitanteById,
  createVisitante,
};
