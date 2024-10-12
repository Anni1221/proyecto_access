const { readFile, writeFile } = require('../utils/utils');

// Obtener todos los parqueaderos
const getAllParqueaderos = (req, res) => {
  const data = readFile();
  res.json(data.parqueadero);
};

// Obtener parqueadero por ID
const getParqueaderoById = (req, res) => {
  const { parqueaderoId } = req.params;
  const data = readFile();
  const parqueadero = data.parqueadero.find(p => p.parqueaderoId === parseInt(parqueaderoId, 10));
  if (parqueadero) {
    res.json(parqueadero);
  } else {
    res.status(404).json({ message: 'Parqueadero no encontrado' });
  }
};

// Crear nuevo parqueadero
const createParqueadero = (req, res) => {
  const data = readFile();
  const nuevoParqueadero = req.body;
  nuevoParqueadero.parqueaderoId = data.parqueadero.length ? Math.max(data.parqueadero.map(p => p.parqueaderoId)) + 1 : 1;
  data.parqueadero.push(nuevoParqueadero);
  writeFile(data);
  res.status(201).json(nuevoParqueadero);
};

module.exports = {
  getAllParqueaderos,
  getParqueaderoById,
  createParqueadero,
};
