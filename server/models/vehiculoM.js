const { readFile, writeFile } = require('../utils/utils');

// Función para obtener todos los vehículos
const getAllVehiculos = () => {
  const data = readFile();
  return data.vehiculo;
};

// Función para obtener un vehículo por ID
const getVehiculoById = (vehiculoId) => {
  const data = readFile();
  return data.vehiculo.find(v => v.vehiculoId === parseInt(vehiculoId, 10));
};

// Función para crear un nuevo vehículo
const createVehiculo = (nuevoVehiculo) => {
  const data = readFile();
  nuevoVehiculo.vehiculoId = data.vehiculo.length ? Math.max(data.vehiculo.map(v => v.vehiculoId)) + 1 : 1;
  data.vehiculo.push(nuevoVehiculo);
  writeFile(data);
  return nuevoVehiculo;
};

module.exports = {
  getAllVehiculos,
  getVehiculoById,
  createVehiculo,
};
