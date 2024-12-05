const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Visitante = sequelize.define("Visitante", {
  idVisitante: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombresVisitante: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  apellidosVisitante: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  telefonoVisitante: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  tipoDocumentoVisitante: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  numDocVisitante: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "visitante",
  timestamps: false,
});

module.exports = Visitante;