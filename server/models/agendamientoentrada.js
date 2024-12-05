const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AgendamientoEntrada = sequelize.define("AgendamientoEntrada", {
  idAgendamiento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  horaInicio: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  horaFin: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  numPersonas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 5,
    },
  },
  estado: {
    type: DataTypes.ENUM('Pendiente', 'Aceptada', 'Rechazada'),
    defaultValue: 'Pendiente',
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  visitanteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vehiculoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "agendamientoentrada",
  timestamps: false,
});

module.exports = AgendamientoEntrada;