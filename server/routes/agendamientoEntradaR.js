const express = require('express');
const router = express.Router();
const agendamientoEntradaController = require('../controllers/agendamientoEntradaC');

// Obtener todos los agendamientos de entrada
router.get('/', agendamientoEntradaController.getAllAgendamientos);

// Obtener agendamiento por ID
router.get('/:agendamientoEntradaId', agendamientoEntradaController.getAgendamientoById);

// Crear nuevo agendamiento de entrada
router.post('/', agendamientoEntradaController.createAgendamiento);

module.exports = router;
