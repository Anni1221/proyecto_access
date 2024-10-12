const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/administradorC');

// Obtener todos los administradores
router.get('/', administradorController.getAllAdministradores);

// Obtener un administrador por ID
router.get('/:AdministradorId', administradorController.getAdministradorById);

// Iniciar sesión como administrador
router.post('/login', administradorController.loginAdministrador);

// Agregar un nuevo administrador
router.post('/', administradorController.addAdministrador);

module.exports = router;
