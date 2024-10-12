const { readFile, writeFile } = require('../utils/utils');

// Obtener todos los administradores
const getAllAdministradores = (req, res) => {
  const data = readFile();
  res.json(data.Administrador);
};

// Obtener un administrador por ID
const getAdministradorById = (req, res) => {
  const { AdministradorId } = req.params;
  const data = readFile();
  const admin = data.Administrador.find(a => a.AdministradorId === parseInt(AdministradorId, 10));
  if (admin) {
    res.json(admin);
  } else {
    res.status(404).json({ message: 'Administrador no encontrado' });
  }
};

// Iniciar sesión como administrador
const loginAdministrador = (req, res) => {
  const { numdoc, contrasenia } = req.body;
  const data = readFile();
  const admin = data.Administrador.find(a => a.numdoc === numdoc && a.contrasenia === contrasenia);
  if (admin) {
    res.status(200).json({ success: true, admin });
  } else {
    res.status(401).json({ success: false, message: 'Credenciales incorrectas.' });
  }
};

// Agregar un nuevo administrador
const addAdministrador = (req, res) => {
  const nuevoAdmin = req.body;
  const data = readFile();
  const nuevoId = data.Administrador.length ? Math.max(data.Administrador.map(a => a.AdministradorId)) + 1 : 1;
  nuevoAdmin.AdministradorId = nuevoId;
  data.Administrador.push(nuevoAdmin);
  writeFile(data);
  res.status(201).json(nuevoAdmin);
};

module.exports = {
  getAllAdministradores,
  getAdministradorById,
  loginAdministrador,
  addAdministrador,
};
