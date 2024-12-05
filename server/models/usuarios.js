const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Usuario = sequelize.define("Usuario", {
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipoDocumento: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  rol: {
    type: DataTypes.ENUM('Administrador', 'Vigilante', 'Residente'),
    allowNull: true,
  },
  nombres: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  numDoc: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true,
  },
  telefono: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  torre: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  apartamento: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING(50),
    allowNull: true,
    unique: true,
  },
  contrasenia: {
    type: DataTypes.STRING, // Cambia a STRING si deseas almacenar contraseñas en texto plano
    allowNull: false,
  },
}, {
  tableName: "usuario",
  timestamps: false, // Cambia esto si deseas utilizar timestamps
});

module.exports = Usuario;