// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Data = require("./models/Data"); // Importation du modèle Data

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // To serve static files
app.set('view engine', 'ejs'); // Configuring EJS as a template engine

// Connecting to MongoDB 
mongoose.connect('mongodb://localhost:27017/mywebapp')
    .then(() => console.log('MongoDB connected')) // Connection confirmation
    .catch(err => console.error(err)); // Handling connection errors

// Routes
app.get('/', (req, res) => {
    res.render('index'); // Home page display
});

// Route to manage form submission
app.post('/submit', (req, res) => {
    const newData = new Data({
        name: req.body.name,
        email: req.body.email
    });

    // Saving data in the database
    newData.save()
        .then(() => {
            res.render('results', { name: req.body.name, email: req.body.email }); // Displaying results
        })
        .catch(err => console.error(err)); // Managing saving errors
});

// Route to display dynamic database data
app.get('/dynamic', (req, res) => {
    Data.find() // Retrieving all data
        .then(data => {
            res.render('dynamic', { data }); // Dynamic page display
        })
        .catch(err => console.error(err)); // Handling search errors
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Confirmation that the server is up and running
});
