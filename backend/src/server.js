const express = require('express');
const mongoose = require('mongoose');
const env = require('./config/env');
const app = require('./app');

const PORT = env.PORT || 5000;

mongoose.connect(env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
        process.exit(1);
    });