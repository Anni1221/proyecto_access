const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/accesscheck', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB correctamente'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Definir tus rutas y lógica aquí
const port = process.env.PORT || 2624;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

const residenteRoutes = require('./routes/residenteR');
app.use('/api', residenteRoutes);
