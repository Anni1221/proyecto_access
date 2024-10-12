const express = require('express');
const router = express.Router();
const vigilanteController = require('../controllers/vigilanteC');

// Obtener todos los vigilantes
router.get('/', vigilanteController.getAllVigilantes);

// Obtener un vigilante por ID
router.get('/:vigilanteId', vigilanteController.getVigilanteById);

// Crear un nuevo vigilante
router.post('/', vigilanteController.createVigilante);

module.exports = router;
