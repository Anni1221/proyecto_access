const express = require('express');
const router = express.Router();
const visitanteController = require('../controllers/visitanteC');

// Obtener todos los visitantes
router.get('/', visitanteController.getAllVisitantes);

// Obtener visitante por ID
router.get('/:visitanteId', visitanteController.getVisitanteById);

// Crear nuevo visitante
router.post('/', visitanteController.createVisitante);

module.exports = router;
