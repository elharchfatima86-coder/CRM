require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connecté'))
    .catch((err) => console.error('Erreur MongoDB :', err.message));

app.get("/", (req, res) => {
    res.send("hello from the backend");
});

app.get("/api/health", (req, res) => {
    res.json({ message: "Connexion au backend réussie" });
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});