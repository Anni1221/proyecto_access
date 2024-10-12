const { readFile, writeFile } = require('../utils/utils');

// Obtener todos los vehículos
const getAllVehiculos = (req, res) => {
  const data = readFile();
  res.json(data.vehiculo);
};

// Obtener vehículo por ID
const getVehiculoById = (req, res) => {
  const { vehiculoId } = req.params;
  const data = readFile();
  const vehiculo = data.vehiculo.find(v => v.vehiculoId === parseInt(vehiculoId, 10));
  if (vehiculo) {
    res.json(vehiculo);
  } else {
    res.status(404).json({ message: 'Vehículo no encontrado' });
  }
};

// Crear nuevo vehículo
const createVehiculo = (req, res) => {
  const data = readFile();
  const nuevoVehiculo = req.body;
  nuevoVehiculo.vehiculoId = data.vehiculo.length ? Math.max(data.vehiculo.map(v => v.vehiculoId)) + 1 : 1;
  data.vehiculo.push(nuevoVehiculo);
  writeFile(data);
  res.status(201).json(nuevoVehiculo);
};

module.exports = {
  getAllVehiculos,
  getVehiculoById,
  createVehiculo,
};
