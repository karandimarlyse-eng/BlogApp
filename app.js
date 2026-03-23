const express = require('express');
const cors = require('cors');

// Initialisation
const app = express();

// Connexion DB (important)
require('./config/db');

// Middlewares
app.use(express.json());
app.use(cors());

const path = require('path');

// Servir les fichiers statiques (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const articleRoutes = require('./routes/articleRoutes');
app.use('/api/articles', articleRoutes);

// Route test
app.get('/', (req, res) => {
    res.json({ message: "API Blog fonctionnelle" });
});

// Lancement serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});