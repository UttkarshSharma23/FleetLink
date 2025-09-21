const express = require('express');
//const {bookingController} = require('../controllers/booking.controller');

const {createBooking , checkAvailability , getBookingsByCustomer} = require('../controllers/booking.controller');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

// Route to create a new booking
router.post('/', validateRequest,createBooking);

// Route to check availability of vehicles
router.get('/availability', checkAvailability);

// Route to get all bookings
//router.get('/', bookingController.getAllBookings);

// Route to get a specific booking by ID
router.get('/:id', getBookingsByCustomer);

// Route to update a booking by ID
//router.put('/:id', validateRequest, bookingController.updateBooking);

// Route to delete a booking by ID
//router.delete('/:id', bookingController.deleteBooking);

module.exports = router;