const express = require('express');
const bodyParser = require('body-parser');
const bookingRoutes = require('./routes/booking.routes');
const vehicleRoutes = require('./routes/vehicle.routes');
const errorHandler = require('./middlewares/errorHandler');
const  connectDB  = require('./config/db');
const env = require('./config/env');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/vehicles', vehicleRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;