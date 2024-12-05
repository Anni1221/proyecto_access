const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/Usuario', usuarioController.getUsers);
router.post('/create', usuarioController.createResident);

module.exports = router;