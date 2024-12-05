const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Vehiculo = sequelize.define("Vehiculo", {
  idVehiculo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipoVehiculo: {
    type: DataTypes.ENUM('Automovil', 'Bicicleta', 'Motocicleta'),
    allowNull: true,
  },
  placa: {
    type: DataTypes.STRING(6),
    allowNull: false,
    unique: true,
  },
  modelo: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  color: {
    type: DataTypes.ENUM('Rojo', 'Azul', 'Negro', 'Blanco', 'Gris'),
    allowNull: true,
  },
  marca: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  Residente: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: "vehiculo",
  timestamps: false,
});

module.exports = Vehiculo;