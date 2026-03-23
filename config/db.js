const mysql = require('mysql');

// Création du pool (meilleure pratique que createConnection)
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog_db'
});

// Test de connexion
db.getConnection((err, connection) => {
    if (err) {
        console.error("Erreur connexion MySQL :", err);
    } else {
        console.log("Connecté à MySQL");
        connection.release(); // libère la connexion
    }
});

module.exports = db;