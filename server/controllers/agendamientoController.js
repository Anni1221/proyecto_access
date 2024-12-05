const db = require('../utils/db');

//Traer agendamientos en estado pendiente
exports.getAppointments = (req, res) => {
    const query = `
        SELECT 
            u.nombres, u.apellidos, ae.estado, vi.nombresVisitante, vi.telefonoVisitante
        FROM agendamientoentrada ae
        LEFT JOIN usuario u ON ae.usuarioId = u.idUsuario
        LEFT JOIN visitante vi ON ae.visitanteId = vi.idVisitante
        WHERE ae.estado = 'Pendiente';
    `;

    db.query(query, (err, result) => {
        if (err) {
            console.error("Error al obtener datos completos:", err);
            return res.status(500).send("Error al obtener datos completos");
        }
        res.json(result);
    });
};

//Actualizar el estado de los agendamientos
exports.updateAppointment = (req, res) => {
    const { idAgendamiento, estado } = req.body;

    db.query("UPDATE agendamientoentrada SET estado = ? WHERE idAgendamiento = ?", [estado, idAgendamiento], err => {
        if (err) {
            console.error("Error al actualizar el estado del agendamiento:", err);
            return res.status(500).send("Error al actualizar el estado");
        }
        res.send("Estado del agendamiento actualizado con éxito");
    });
};