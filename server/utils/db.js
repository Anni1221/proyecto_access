const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "access_check"
});

// Verificar conexión a la base de datos
db.connect(err => {
    if (err) {
        console.error("Error conectando a la base de datos:", err);
        process.exit(1);
    }
    console.log("Conexión a la base de datos establecida.");
});

module.exports = db;