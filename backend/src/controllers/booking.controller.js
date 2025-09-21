const BookingService = require('../services/booking.service');
const VehicleService = require('../services/vehicle.service');

exports.createBooking = async (req, res) => {
    try {
        const { vehicleId, customerId, startTime, endTime } = req.body;
        const booking = await BookingService.createBooking(vehicleId, customerId, startTime, endTime);
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.checkAvailability = async (req, res) => {
    try {
        const { vehicleId, startTime, endTime } = req.query;
        const isAvailable = await BookingService.checkAvailability(vehicleId, startTime, endTime);
        res.status(200).json({ available: isAvailable });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBookingsByCustomer = async (req, res) => {
    try {
        const { customerId } = req.params;
        const bookings = await BookingService.getBookingsByCustomer(customerId);
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};