// models/Data.js
const mongoose = require("mongoose");

// Définition du schéma des données
const dataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

// Création du modèle basé sur le schéma
const Data = mongoose.model("Data", dataSchema);

// Exportation du modèle pour une utilisation dans d'autres fichiers
module.exports = Data;
