// models/Data.js
const mongoose = require("mongoose");

// Data schema definition
const dataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

// Creating a model based on the schema
const Data = mongoose.model("Data", dataSchema);

// Exporting the model for use in other files
module.exports = Data;
