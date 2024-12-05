const cors = require('cors');

const corsOptions = {
  origin: '*', // Cambia esto a tu dominio en producción
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;