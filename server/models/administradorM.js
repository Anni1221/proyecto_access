// models/administradorModel.js

const { readFile, writeFile } = require('../utils/utils');

// Función para obtener todos los administradores
const getAllAdministradores = () => {
  const data = readFile();
  return data.Administrador;
};

// Función para obtener un administrador por ID
const getAdministradorById = (AdministradorId) => {
  const data = readFile();
  return data.Administrador.find(a => a.AdministradorId === parseInt(AdministradorId, 10));
};

// Función para agregar un nuevo administrador
const addAdministrador = (nuevoAdmin) => {
  const data = readFile();
  const nuevoId = data.Administrador.length ? Math.max(data.Administrador.map(a => a.AdministradorId)) + 1 : 1;
  nuevoAdmin.AdministradorId = nuevoId;
  data.Administrador.push(nuevoAdmin);
  writeFile(data);
  return nuevoAdmin;
};

// Función para iniciar sesión como administrador
const loginAdministrador = (numdoc, contrasenia) => {
  const data = readFile();
  return data.Administrador.find(a => a.numdoc === numdoc && a.contrasenia === contrasenia);
};

module.exports = {
  getAllAdministradores,
  getAdministradorById,
  addAdministrador,
  loginAdministrador,
};
