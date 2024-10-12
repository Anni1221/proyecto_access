const express = require('express');
const router = express.Router();
const { obtenerResidentesController, agregarResidenteController } = require('../controllers/residenteC'); // Asegúrate de usar el nombre correcto

/*// Ruta para crear un residente
router.post('/residentes', async (req, res) => {
    try {
      console.log('Datos recibidos del frontend:', req.body);  // Verifica que lleguen los datos correctos
      const nuevoResidente = new Residente(req.body);
      await nuevoResidente.save();
      res.status(201).json({ message: 'Residente registrado con éxito' });
    } catch (error) {
      console.error('Error al registrar el residente:', error);
      res.status(500).json({ message: 'Error al registrar el residente' });
    }
  });  

// Importar el controlador de residentes
const residenteController = require('../controllers/residenteC');

// Importar el modelo Residente
const Residente = require('../models/residenteM');*/
// Obtener todos los residentes
router.get('/', obtenerResidentesController);

// Agregar nuevo residente
router.post('/', agregarResidenteController);

// Exportar el enrutador
module.exports = router;