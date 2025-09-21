const request = require('supertest');
const app = require('../app');
const Booking = require('../models/Booking.model');
const Vehicle = require('../models/Vehicle.model');

describe('Booking Controller', () => {
    beforeEach(async () => {
        await Booking.deleteMany({});
        await Vehicle.deleteMany({});
    });

    describe('POST /bookings', () => {
        it('should create a new booking', async () => {
            const vehicle = await Vehicle.create({ name: 'Test Vehicle', capacity: 4 });
            const response = await request(app)
                .post('/bookings')
                .send({
                    vehicleId: vehicle._id,
                    customerId: 'customer123',
                    startTime: new Date(),
                    endTime: new Date(new Date().getTime() + 3600000) // 1 hour later
                });

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('booking');
            expect(response.body.booking).toHaveProperty('vehicleId', vehicle._id.toString());
        });

        it('should return 400 if vehicle is not available', async () => {
            const vehicle = await Vehicle.create({ name: 'Test Vehicle', capacity: 4 });
            await Booking.create({
                vehicleId: vehicle._id,
                customerId: 'customer123',
                startTime: new Date(),
                endTime: new Date(new Date().getTime() + 3600000) // 1 hour later
            });

            const response = await request(app)
                .post('/bookings')
                .send({
                    vehicleId: vehicle._id,
                    customerId: 'customer456',
                    startTime: new Date(),
                    endTime: new Date(new Date().getTime() + 3600000) // 1 hour later
                });

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error', 'Vehicle is not available for the selected time.');
        });
    });

    describe('GET /bookings/:id', () => {
        it('should return a booking by ID', async () => {
            const vehicle = await Vehicle.create({ name: 'Test Vehicle', capacity: 4 });
            const booking = await Booking.create({
                vehicleId: vehicle._id,
                customerId: 'customer123',
                startTime: new Date(),
                endTime: new Date(new Date().getTime() + 3600000) // 1 hour later
            });

            const response = await request(app).get(`/bookings/${booking._id}`);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('booking');
            expect(response.body.booking).toHaveProperty('_id', booking._id.toString());
        });

        it('should return 404 if booking not found', async () => {
            const response = await request(app).get('/bookings/invalidBookingId');

            expect(response.status).toBe(404);
            expect(response.body).toHaveProperty('error', 'Booking not found.');
        });
    });
});