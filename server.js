// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Data = require("./models/Data"); // Importation du modèle Data

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le corps des requêtes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Pour servir les fichiers statiques
app.set('view engine', 'ejs'); // Configuration d'EJS comme moteur de template

// Connexion à MongoDB sans options obsolètes
mongoose.connect('mongodb://localhost:27017/mywebapp')
    .then(() => console.log('MongoDB connected')) // Confirmation de la connexion
    .catch(err => console.error(err)); // Gestion des erreurs de connexion

// Routes
app.get('/', (req, res) => {
    res.render('index'); // Affichage de la page d'accueil
});

// Route pour gérer la soumission du formulaire
app.post('/submit', (req, res) => {
    const newData = new Data({
        name: req.body.name,
        email: req.body.email
    });

    // Sauvegarde des données dans la base de données
    newData.save()
        .then(() => {
            res.render('results', { name: req.body.name, email: req.body.email }); // Affichage des résultats
        })
        .catch(err => console.error(err)); // Gestion des erreurs de sauvegarde
});

// Route pour afficher les données dynamiques de la base de données
app.get('/dynamic', (req, res) => {
    Data.find() // Récupération de toutes les données
        .then(data => {
            res.render('dynamic', { data }); // Affichage de la page dynamique
        })
        .catch(err => console.error(err)); // Gestion des erreurs de recherche
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Confirmation que le serveur fonctionne
});
