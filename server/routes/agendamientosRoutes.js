const express = require('express');
const router = express.Router();
const agendamientoController = require('../controllers/agendamientoController');

router.get('/agendamientos', agendamientoController.getAppointments);
router.put('/actualizar-agendamiento', agendamientoController.updateAppointment);

module.exports = router;