const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NOMBRE, process.env.DB_NUMDOC, process.env.DB_CONTRASENIA, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  });
  
  module.exports = sequelize;