const BookingRepository = require('../repositories/booking.repository');
const VehicleRepository = require('../repositories/vehicle.repository');
const { calculateRideDuration } = require('../utils/rideDuration');

class BookingService {
    async createBooking(bookingData) {
        const { vehicleId, customerId, startTime, endTime } = bookingData;

        const isAvailable = await this.checkVehicleAvailability(vehicleId, startTime, endTime);
        if (!isAvailable) {
            throw new Error('Vehicle is not available for the selected time.');
        }

        const booking = await BookingRepository.createBooking({ vehicleId, customerId, startTime, endTime });
        return booking;
    }

    async checkVehicleAvailability(vehicleId, startTime, endTime) {
        const bookings = await BookingRepository.getBookingsByVehicleId(vehicleId);
        return bookings.every(booking => {
            return (endTime <= booking.startTime || startTime >= booking.endTime);
        });
    }

    async getBookingDuration(bookingId) {
        const booking = await BookingRepository.getBookingById(bookingId);
        if (!booking) {
            throw new Error('Booking not found.');
        }

        const duration = calculateRideDuration(booking.startTime, booking.endTime);
        return duration;
    }
}

module.exports = new BookingService();