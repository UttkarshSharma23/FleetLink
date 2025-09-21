const bookingService = require('../services/booking.service');
const bookingRepository = require('../repositories/booking.repository');

jest.mock('../repositories/booking.repository');

describe('Booking Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('createBooking', () => {
        it('should create a booking successfully', async () => {
            const bookingData = { vehicleId: '123', customerId: '456', startTime: new Date(), endTime: new Date() };
            bookingRepository.createBooking.mockResolvedValue(bookingData);

            const result = await bookingService.createBooking(bookingData);
            expect(result).toEqual(bookingData);
            expect(bookingRepository.createBooking).toHaveBeenCalledWith(bookingData);
        });

        it('should throw an error if booking conflicts', async () => {
            const bookingData = { vehicleId: '123', customerId: '456', startTime: new Date(), endTime: new Date() };
            bookingRepository.createBooking.mockRejectedValue(new Error('Booking conflict'));

            await expect(bookingService.createBooking(bookingData)).rejects.toThrow('Booking conflict');
        });
    });

    describe('checkAvailability', () => {
        it('should return true if vehicle is available', async () => {
            const vehicleId = '123';
            const startTime = new Date();
            const endTime = new Date();
            bookingRepository.checkAvailability.mockResolvedValue(true);

            const result = await bookingService.checkAvailability(vehicleId, startTime, endTime);
            expect(result).toBe(true);
            expect(bookingRepository.checkAvailability).toHaveBeenCalledWith(vehicleId, startTime, endTime);
        });

        it('should return false if vehicle is not available', async () => {
            const vehicleId = '123';
            const startTime = new Date();
            const endTime = new Date();
            bookingRepository.checkAvailability.mockResolvedValue(false);

            const result = await bookingService.checkAvailability(vehicleId, startTime, endTime);
            expect(result).toBe(false);
            expect(bookingRepository.checkAvailability).toHaveBeenCalledWith(vehicleId, startTime, endTime);
        });
    });
});