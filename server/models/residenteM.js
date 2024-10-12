const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de Residentes
const residenteSchema = new Schema({
  tipoDocumento: { type: String, required: true },
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  numdoc: { type: Number, required: true, unique: true },
  telefono: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contrasenia: { type: String, required: true },
  torre: { type: String },
  apartamento: { type: String },
  vehiculo: { type: Boolean, default: false },
  placa: { type: String },
  modelo: { type: String },
  color: { type: String },
  residenteId: { type: Number }
});

// Crear el modelo 'Residente' basado en el esquema
const Residente = mongoose.model('Residente', residenteSchema);

// Exportar el modelo
module.exports = Residente;