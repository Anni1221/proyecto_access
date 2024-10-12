const Resident = require('../models/residenteM');

// Crear un nuevo residente
exports.createResident = async (req, res) => {
  try {
    const newResident = new Resident(req.body);
    await newResident.save();
    res.status(201).json(newResident);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener todos los residentes
exports.getResidents = async (req, res) => {
  try {
    const residents = await Resident.find();
    res.status(200).json(residents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
