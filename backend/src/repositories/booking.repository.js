const Booking = require('../models/Booking.model');

const createBooking = async (bookingData) => {
    const booking = new Booking(bookingData);
    return await booking.save();
};

const findBookingById = async (bookingId) => {
    return await Booking.findById(bookingId);
};

const findBookingsByVehicleId = async (vehicleId) => {
    return await Booking.find({ vehicleId });
};

const checkAvailability = async (vehicleId, startTime, endTime) => {
    const bookings = await Booking.find({
        vehicleId,
        $or: [
            { startTime: { $lt: endTime, $gt: startTime } },
            { endTime: { $gt: startTime, $lt: endTime } }
        ]
    });
    return bookings.length === 0; // Available if no conflicting bookings
};

module.exports = {
    createBooking,
    findBookingById,
    findBookingsByVehicleId,
    checkAvailability
};