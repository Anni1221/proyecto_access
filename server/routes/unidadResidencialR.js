const express = require('express');
const router = express.Router();
const unidadResidencialController = require('../controllers/unidadResidencialC');

// Obtener todas las unidades residenciales
router.get('/', unidadResidencialController.getAllUnidadesResidenciales);

// Obtener unidad residencial por ID
router.get('/:unidadResidencialId', unidadResidencialController.getUnidadResidencialById);

// Crear nueva unidad residencial
router.post('/', unidadResidencialController.createUnidadResidencial);

module.exports = router;
