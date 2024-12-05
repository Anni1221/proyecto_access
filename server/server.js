const express = require("express");
const bodyParser = require('body-parser');
const autenticacionRoutes = require('./routes/autenticacionRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const agendamientosRoutes = require('./routes/agendamientosRoutes');
const corsMiddleware = require('./middleware/corsMiddleware');
const authMiddleware = require('./middleware/authnMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(corsMiddleware);
app.use(express.json());
app.use(authMiddleware);
app.use('/api/autenticacion', autenticacionRoutes);

// Rutas
app.use(autenticacionRoutes);
app.use(usuariosRoutes);
app.use(agendamientosRoutes);

// Middleware de manejo de errores
app.use(errorMiddleware);

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});