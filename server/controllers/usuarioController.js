const db = require('../utils/db');

exports.getUsers = (req, res) => {
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
};

exports.createResident = (req, res) => {
    const {
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
        color,
        marca
    } = req.body;

    const rol = 'Residente';

    db.query(
        'INSERT INTO Usuario (tipoDocumento, rol, nombres, apellidos, numDoc, telefono, torre, apartamento, correo, contrasenia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [tipoDocumento, rol, nombres, apellidos, numDoc, telefono, torre, apartamento, correo, contrasenia],
        (err, result) => {
            if (err) {
                console.error("Error al registrar el usuario:", err);
                return res.status(500).send("Error al registrar el usuario");
            }

            const usuarioId = result.insertId;

            if (vehiculo === 'Si') {
                db.query(
                    'INSERT INTO Vehiculo (tipoVehiculo, placa, modelo, color, marca, usuarioId) VALUES (?, ?, ?, ?, ?, ?)',
                    [tipoVehiculo, placa, modelo, color, marca, usuarioId],
                    (err) => {
                        if (err) {
                            console.error("Error al registrar el vehículo:", err);
                            return res.status(500).send("Error al registrar el vehículo");
                        }
                        res.send("Usuario y vehículo registrados con éxito");
                    }
                );
            } else {
                res.send("Usuario registrado sin vehículo");
            }
        }
    );
};