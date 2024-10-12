const express = require('express');
const router = express.Router();
const vehiculoController = require('../controllers/vehiculoC');

// Obtener todos los vehículos
router.get('/', vehiculoController.getAllVehiculos);

// Obtener vehículo por ID
router.get('/:vehiculoId', vehiculoController.getVehiculoById);

// Crear nuevo vehículo
router.post('/', vehiculoController.createVehiculo);

module.exports = router;
