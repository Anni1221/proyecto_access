const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Parqueadero = sequelize.define("Parqueadero", {
  idParqueadero: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TipoParqueadero: {
    type: DataTypes.ENUM('Automovil', 'Bicicleta', 'Motocicleta'),
    allowNull: true,
  },
  CantidadParqueadero: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  vehiculoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "parqueadero",
  timestamps: false,
});

module.exports = Parqueadero;