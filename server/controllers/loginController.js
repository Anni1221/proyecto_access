const db = require('../utils/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require("../models/usuarios");

// Función para manejar el inicio de sesión
exports.login = async (req, res) => {
  const { numDoc, contrasenia } = req.body;
  try {
      // Busca al usuario por el número de documento
      const user = await Usuario.findOne({ where: { numDoc } });
      if (!user) {
          return res.status(401).json({ message: "Usuario no encontrado" });
      }
      // Compara la contraseña proporcionada con la almacenada
      const isContraseniaValid = bcrypt.compareSync(contrasenia, user.contrasenia);
      if (!isContraseniaValid) {
          return res.status(401).json({ message: "Contraseña incorrecta" });
      }
      // Genera un token JWT
      const token = jwt.sign(
          { id: user.id, role: user.rol }, // Asegúrate de que el campo de rol sea correcto
          process.env.JWT_SECRET,
          { expiresIn: "5h" }
      );
      res.json({ token, role: user.rol }); // Asegúrate de que el campo de rol sea correcto
  } catch (error) {
      res.status(500).json({ message: "Error en el login", error });
  }
};
  

// Función para manejar el registro (ejemplo)
exports.register = (req, res) => {
    // Lógica para registrar un nuevo usuario
};

//Registro Vigilante
exports.register = (req, res) => {
    const { tipoDocumento, nombres, apellidos, numDoc, telefono, correo, contrasenia } = req.body;
    const rol = 'Vigilante';

    db.query(
        'INSERT INTO Usuario (tipoDocumento, rol, nombres, apellidos, numDoc, telefono, correo, contrasenia) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [tipoDocumento, rol, nombres, apellidos, numDoc, telefono, correo, contrasenia],
        (err) => {
            if (err) {
                console.error("Error al registrar el usuario:", err);
                return res.status(500).send("Error al registrar el usuario");
            }
            res.send("Vigilante registrado exitosamente.");
        }
    );
};