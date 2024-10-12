const { readFile, writeFile } = require('../utils/utils');

// Obtener todas las unidades residenciales
const getAllUnidadesResidenciales = (req, res) => {
  const data = readFile();
  res.json(data.unidadResidencial);
};

// Obtener unidad residencial por ID
const getUnidadResidencialById = (req, res) => {
  const { unidadResidencialId } = req.params;
  const data = readFile();
  const unidad = data.unidadResidencial.find(u => u.unidadResidencialId === parseInt(unidadResidencialId, 10));
  if (unidad) {
    res.json(unidad);
  } else {
    res.status(404).json({ message: 'Unidad Residencial no encontrada' });
  }
};

// Crear nueva unidad residencial
const createUnidadResidencial = (req, res) => {
  const data = readFile();
  const nuevaUnidad = req.body;
  nuevaUnidad.unidadResidencialId = data.unidadResidencial.length ? Math.max(data.unidadResidencial.map(u => u.unidadResidencialId)) + 1 : 1;
  data.unidadResidencial.push(nuevaUnidad);
  writeFile(data);
  res.status(201).json(nuevaUnidad);
};

module.exports = {
  getAllUnidadesResidenciales,
  getUnidadResidencialById,
  createUnidadResidencial,
};
