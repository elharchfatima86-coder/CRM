require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connecté'))
    .catch((err) => console.error('Erreur MongoDB :', err.message));

app.get("/", (req, res) => {
    res.send("hello from the backend");
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});