const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require('cors');
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "access_check"
});

// Agregar agendamiento
app.post("/agendamiento", (req, res) => {
    const {
        fechaInicio,
        fechaFin,
        horaInicio,
        horaFin,
        numPersonas,
        nombres,
        apellidos,
        tipoDocumento,
        numDoc,
        telefono,
        torre,
        apartamento,
        vehiculo,
        tipoVehiculo,
        placa,
        modelo,
        color,
        marca
    } = req.body;

    // Validar los datos recibidos
    if (!fechaInicio || !fechaFin || !horaInicio || !horaFin || !numPersonas || !nombres || !apellidos || !tipoDocumento || !numDoc || !telefono || !torre || !apartamento) {
        return res.status(400).send("Todos los campos son obligatorios.");
    }

    // Validar el campo marca para bicicletas
    if (vehiculo === 'Si' && tipoVehiculo === 'Bicicleta' && !marca) {
        return res.status(400).send("El campo marca es obligatorio para bicicletas.");
    }

    // Insertar en la tabla visitante
    const visitanteQuery = `
        INSERT INTO visitante (nombres, apellidos, tipoDocumento, numDoc, telefono)
        VALUES (?, ?, ?, ?, ?)`;

    const visitanteValues = [nombres, apellidos, tipoDocumento, numDoc, telefono];

    db.query(visitanteQuery, visitanteValues, (err, result) => {
        if (err) {
            console.error("Error al registrar el visitante:", err);
            return res.status(500).send("Error al registrar el visitante");
        }

        const visitanteId = result.insertId; // Obtener el ID del visitante registrado

        // Insertar torre y apartamento en la tabla usuario
        const usuarioQuery = `
            INSERT INTO usuario (torre, apartamento)
            VALUES (?, ?)`;

        const usuarioValues = [torre, apartamento];

        db.query(usuarioQuery, usuarioValues, (err, result) => {
            if (err) {
                console.error("Error al registrar el usuario:", err);
                return res.status(500).send("Error al registrar el usuario");
            }

            const usuarioId = result.insertId; // Obtener el ID del usuario registrado

            // Si hay vehículo, insertar en la tabla vehiculo
            let vehiculoId = null; // Inicializar vehiculoId como null

            if (vehiculo === 'Si') {
                let vehiculoQuery;
                let vehiculoValues;

                if (tipoVehiculo === 'Bicicleta') {
                    // Para bicicletas, solo insertar marca y color
                    vehiculoQuery = `
                        INSERT INTO vehiculo (tipoVehiculo, placa, modelo, color, marca)
                        VALUES (?, ?, ?, ?, ?)`;

                    vehiculoValues = [tipoVehiculo, null, null, color, marca]; // placa y modelo como NULL
                } else {
                    // Para automóviles y motocicletas, insertar placa, modelo, color y marca
                    vehiculoQuery = `
                        INSERT INTO vehiculo (tipoVehiculo, placa, modelo, color, marca)
                        VALUES (?, ?, ?, ?, ?)`;

                    vehiculoValues = [tipoVehiculo, placa, modelo, color, marca]; // marca se incluye
                }

                db.query(vehiculoQuery, vehiculoValues, (err, result) => {
                    if (err) {
                        console.error("Error al registrar el vehículo:", err);
                        return res.status(500).send("Error al registrar el vehículo");
                    }

                    vehiculoId = result.insertId; // Obtener el ID del vehículo registrado
                    // Ahora que tenemos el vehiculoId, podemos continuar con el agendamiento
                    insertAgendamiento();
                });
            } else {
                // Si no hay vehículo, continuar con el agendamiento
                insertAgendamiento();
            }

            // Función para insertar en agendamientoentrada
            function insertAgendamiento() {
                let agendamientoQuery;
                let agendamientoValues;

                if (vehiculo === 'Si') {
                    agendamientoQuery = `
                        INSERT INTO agendamientoentrada (fechaInicio, fechaFin, horaInicio, horaFin, numPersonas, visitanteId, vehiculoId, usuarioId)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

                    agendamientoValues = [
                        fechaInicio,
                        fechaFin,
                        horaInicio,
                        horaFin,
                        numPersonas,
                        visitanteId,
                        vehiculoId, // Incluir vehiculoId
                        usuarioId
                    ];
                } else {
                    agendamientoQuery = `
 INSERT INTO agendamientoentrada (fechaInicio, fechaFin, horaInicio, horaFin, numPersonas, visitanteId, usuarioId)
                        VALUES (?, ?, ?, ?, ?, ?, ?)`;

                    agendamientoValues = [
                        fechaInicio,
                        fechaFin,
                        horaInicio,
                        horaFin,
                        numPersonas,
                        visitanteId,
                        usuarioId // No incluir vehiculoId
                    ];
                }

                db.query(agendamientoQuery, agendamientoValues, (err) => {
                    if (err) {
                        console.error("Error al registrar el agendamiento:", err);
                        return res.status(500).send("Error al registrar el agendamiento");
                    }

                    // Enviar mensaje de éxito después de registrar el agendamiento
                    res.status(200).send("Agendamiento, visitante y vehículo registrados con éxito");
                });
            }
        });
    });
});

//AGENDAMIENTO_SORPRESA
app.post("/agendamiento/sorpresa", (req, res) => {
    const {
        fechaInicio,
        fechaFin,
        horaInicio,
        horaFin,
        numPersonas,
        nombres,
        apellidos,
        tipoDocumento,
        numDoc,
        telefono,
        torre,
        apartamento,
        vehiculo,
        tipoVehiculo,
        placa,
        modelo,
        color,
        marca
    } = req.body;

    // Validar los datos recibidos
    if (!fechaInicio || !fechaFin || !horaInicio || !horaFin || !numPersonas || !nombres || !apellidos || !tipoDocumento || !numDoc || !telefono || !torre || !apartamento) {
        return res.status(400).send("Todos los campos son obligatorios.");
    }

    // Validar el campo marca para bicicletas
    if (vehiculo === 'Si' && tipoVehiculo === 'Bicicleta' && !marca) {
        return res.status(400).send("El campo marca es obligatorio para bicicletas.");
    }

    // Insertar en la tabla visitante
    const visitanteQuery = `
        INSERT INTO visitante (nombres, apellidos, tipoDocumento, numDoc, telefono)
        VALUES (?, ?, ?, ?, ?)`;

    const visitanteValues = [nombres, apellidos, tipoDocumento, numDoc, telefono];

    console.log("Insertando visitante:", visitanteValues); // Agregar log

    db.query(visitanteQuery, visitanteValues, (err, result) => {
        if (err) {
            console.error("Error al registrar el visitante:", err);
            return res.status(500).send("Error al registrar el visitante");
        }

        const visitanteId = result.insertId; // Obtener el ID del visitante registrado
        console.log("Visitante registrado con ID:", visitanteId); // Agregar log

        // Insertar torre y apartamento en la tabla usuario
        const usuarioQuery = `
            INSERT INTO usuario (torre, apartamento)
            VALUES (?, ?)`;

        const usuarioValues = [torre, apartamento];

        console.log("Insertando usuario:", usuarioValues); // Agregar log

        db.query(usuarioQuery, usuarioValues, (err, result) => {
            if (err) {
                console.error("Error al registrar el usuario:", err);
                return res.status(500).send("Error al registrar el usuario");
            }

            const usuarioId = result.insertId; // Obtener el ID del usuario registrado
            console.log("Usuario registrado con ID:", usuarioId); // Agregar log

            // Si hay vehículo, insertar en la tabla vehiculo
            let vehiculoId = null; // Inicializar vehiculoId como null

            if (vehiculo === 'Si') {
                let vehiculoQuery;
                let vehiculoValues;

                if (tipoVehiculo === 'Bicicleta') {
                    // Para bicicletas, solo insertar marca y color
                    vehiculoQuery = `
                        INSERT INTO vehiculo (tipoVehiculo, placa, modelo, color, marca)
                        VALUES (?, ?, ?, ?, ?)`;

                    vehiculoValues = [tipoVehiculo, null, null, color, marca]; // placa y modelo como NULL
                } else {
                    // Para automóviles y motocicletas, insertar placa, modelo, color y marca
                    vehiculoQuery = `
                        INSERT INTO vehiculo (tipoVehiculo, placa, modelo, color, marca)
                        VALUES (?, ?, ?, ?, ?)`;

                    vehiculoValues = [tipoVehiculo, placa, modelo, color, marca]; // marca se incluye
                }

                console.log("Insertando vehículo:", vehiculoValues); // Agregar log

                db.query(vehiculoQuery, vehiculoValues, (err, result) => {
                    if (err) {
                        console.error("Error al registrar el vehículo:", err);
                        return res.status(500).send("Error al registrar el vehículo");
                    }

                    vehiculoId = result.insertId; // Obtener el ID del vehículo registrado
                    console.log("Veh ículo registrado con ID:", vehiculoId); // Agregar log
                    // Ahora que tenemos el vehiculoId, podemos continuar con el agendamiento
                    insertAgendamiento();
                });
            } else {
                // Si no hay vehículo, continuar directamente con el agendamiento
                insertAgendamiento();
            }

            function insertAgendamiento() {
                // Insertar en la tabla agendamiento
                const agendamientoQuery = `
                    INSERT INTO agendamientoentrada (fechaInicio, fechaFin, horaInicio, horaFin, numPersonas, estado, visitanteId, usuarioId, vehiculoId)
                    VALUES (?, ?, ?, ?, ?, 'Activo', ?, ?, ?)`;

                const agendamientoValues = [fechaInicio, fechaFin, horaInicio, horaFin, numPersonas, visitanteId, usuarioId, vehiculoId];

                console.log("Insertando agendamiento:", agendamientoValues); // Agregar log

                db.query(agendamientoQuery, agendamientoValues, (err, result) => {
                    if (err) {
                        console.error("Error al registrar el agendamiento:", err);
                        return res.status(500).send("Error al registrar el agendamiento");
                    }

                    res.status(201).send("Agendamiento registrado con éxito.");
                });
            }
        });
    });
}); 

//VER REPORTES
app.get("/reportes/:date", (req, res) => {
    const date = req.params.date; // Obtener la fecha del parámetro de la URL

    // Consulta SQL para obtener los reportes
    const query = `
        SELECT 
            HOUR(horaInicio) AS hora,
            COUNT(*) AS visitas
        FROM agendamientoentrada
        WHERE DATE(fechaInicio) = ?
        GROUP BY HOUR(horaInicio);
    `;

    db.query(query, [date], (err, results) => {
        if (err) {
            console.error("Error al obtener reportes:", err);
            return res.status(500).send("Error al obtener reportes");
        }

        // Inicializa un arreglo de 24 elementos con 0
        const dailyData = Array(24).fill(0);
        let totalVisitas = 0; // Variable para contar el total de visitas

        // Asigna el número de visitas a la hora correspondiente
        results.forEach(row => {
            dailyData[row.hora] = row.visitas; // row.hora es el índice de la hora
            totalVisitas += row.visitas; // Sumar al total de visitas
        });

        res.json({
            daily: dailyData,
            total: totalVisitas, // Incluir el total de visitas
            date: date // Incluir la fecha para referencia
        });
    });
});

// Función para obtener visitas de la semana
async function getVisitasDeLaSemana(startDate, endDate) {
    const [rows] = await connection.execute(`
        SELECT DATE(fechaInicio) AS fecha, COUNT(*) AS cantidad
        FROM agendamientoentrada
        WHERE fechaInicio >= ? AND fechaFin <= ?
        GROUP BY fecha
    `, [startDate, endDate]);

    return rows;
}

//RECUPERAR CONTRASEÑA
const nodemailer = require('nodemailer');
const axios = require('axios'); // Importa Axios

const port = 3000;

app.use(bodyParser.json());

// Configura tu transportador de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Cambia esto según tu proveedor de correo
  auth: {
    user: 'tu_correo@gmail.com', // Tu correo
    pass: 'tu_contraseña' // Tu contraseña
  }
});

// Clave secreta de reCAPTCHA
const RECAPTCHA_SECRET_KEY = '6LekeGwqAAAAALAQKd7uL3j-DP9Rg9QulmZaJUGj'; // Reemplaza con tu clave secreta

// Función para verificar si el usuario existe
async function verificarUsuarioPorEmail(email) {
  // Implementa la lógica para verificar el correo en tu base de datos
  // Retorna el usuario si existe, o null si no
  // Ejemplo:
  const query = 'SELECT * FROM Usuario WHERE correo = ?';
  const [rows] = await db.query(query, [email]);
  return rows[0]; // Retorna el primer usuario encontrado
}

// Endpoint para recuperar contraseña
app.post('/recuperar-contrasena', async (req, res) => {
  const { email, captchaValue } = req.body;

  // Verifica el reCAPTCHA
  try {
    const response = await axios.post(https://www.google.com/recaptcha/api/siteverify, null, {
      params: {
        secret: RECAPTCHA_SECRET_KEY,
        response: captchaValue,
      },
    });

    const { success } = response.data;

    if (!success) {
      return res.status(400).json({ error: 'Verificación de reCAPTCHA fallida.' });
    }
  } catch (error) {
    console.error('Error al verificar reCAPTCHA:', error);
    return res.status(500).json({ error: 'Error al verificar reCAPTCHA.' });
  }

  // Verifica si el usuario existe
  const usuario = await verificarUsuarioPorEmail(email);
  if (!usuario) {
    return res.status(404).json({ error: 'Correo no encontrado.' });
  }

  // Genera una nueva contraseña aleatoria
  const nuevaContraseña = Math.random().toString(36).slice(-8).toUpperCase(); // Genera una contraseña aleatoria

  // Actualiza la contraseña en la base de datos
  const hashedPassword = await bcrypt.hash(nuevaContraseña, 10);
  const updateQuery = 'UPDATE Usuario SET contrasenia = ? WHERE correo = ?';
  await db.query(updateQuery, [hashedPassword, email]);

  // Envía el correo de recuperación
  const mailOptions = {
    from: 'tu_correo@gmail.com',
    to: email,
    subject: 'Recuperación de Contraseña',
    text: Estimado ${usuario.nombres}, hemos recuperado tu contraseña. Intenta ingresar nuevamente con tu respectivo nombre de usuario y contraseña.\n\nUsuario: ${usuario.numDoc}\nContraseña: ${nuevaContraseña}
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Se ha enviado un correo de recuperación.' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Error al enviar el correo de recuperación.' });
  }
});



app.get("/Usuario", (req, res) => {
    const query = `
        SELECT U.*, V.tipoVehiculo, V.placa, V.modelo, V.color, V.marca
        FROM Usuario U
        LEFT JOIN Vehiculo V ON U.idUsuario = V.usuarioId
    `;
    
    db.query(query, (err, result) => {
        if (err) {
            console.error("Error al obtener usuarios:", err);
            return res.status(500).send("Error al obtener usuarios");
        }
        res.send(result);
    });
});

app.put("/update", (req, res) => {
    const {
        idUsuario,
        tipoDocumento,
        nombres,
        apellidos,
        numDoc,
        telefono,
        torre,
        apartamento,
        correo,
        contrasenia,
        vehiculo,
        tipoVehiculo,
        placa,
        modelo,
        color
    } = req.body;

    // Definir una función para actualizar el usuario
    const updateUser  = (hash) => {
        db.query('UPDATE Usuario SET tipoDocumento=?, nombres=?, apellidos=?, numDoc=?, telefono=?, torre=?, apartamento=?, correo=?, contrasenia=? WHERE idUsuario=?', 
            [tipoDocumento, nombres, apellidos, numDoc, telefono, torre, apartamento, correo, hash, idUsuario], 
            (err) => {
                if (err) {
                    console.error("Error al actualizar el usuario:", err);
                    return res.status(500).send("Error al actualizar el usuario");
                }

                // Actualizar información del vehículo si es aplicable
                if (vehiculo === 'Si') {
                    db.query('INSERT INTO Vehiculo (tipoVehiculo, placa, modelo, color, usuarioId) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE tipoVehiculo=?, placa=?, modelo=?, color=?',
                        [tipoVehiculo, placa, modelo, color, idUsuario, tipoVehiculo, placa, modelo, color],
                        (err) => {
                            if (err) {
                                console.error("Error al actualizar el vehículo:", err);
                                return res.status(500).send("Error al actualizar el vehículo");
                            }
                            res.send("Usuario y vehículo actualizados con éxito");
                        }
                    );
                } else {
                    // Si no hay vehículo, eliminarlo de la base de datos
                    db.query('DELETE FROM Vehiculo WHERE usuarioId = ?', [idUsuario], (err) => {
                        if (err) {
                            console.error("Error al eliminar el vehículo:", err);
                            return res.status(500).send("Error al eliminar el vehículo");
                        }
                        res.send("Usuario actualizado sin vehículo");
                    });
                }
            });
    };

    // Comprobar si se proporciona la contraseña
    if (contrasenia && contrasenia.trim() !== '') {
        bcrypt.hash(contrasenia, 10, (err, hash) => {
            if (err) {
                console.error("Error al cifrar la contraseña:", err);
                return res.status(500).send("Error al actualizar el usuario");
            }
            updateUser (hash); // Actualizar usuario con la contraseña cifrada
        });
    } else {
        // Si no hay nueva contraseña, actualizar sin cambiar la contraseña
        updateUser (null); // Pasar null para indicar que no hay cambio de contraseña
    }
});

  
  app.listen(3001, () => {
      console.log("Corriendo en el puerto 3001");
  });