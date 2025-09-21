const request = require('supertest');
const app = require('../app'); // Assuming app.js exports the Express app
const Vehicle = require('../models/Vehicle.model');
const vehicleService = require('../services/vehicle.service');

jest.mock('../services/vehicle.service');

describe('Vehicle Controller', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /vehicles', () => {
        it('should return a list of available vehicles', async () => {
            const vehicles = [{ id: 1, name: 'Truck', capacity: 10 }];
            vehicleService.getAvailableVehicles.mockResolvedValue(vehicles);

            const response = await request(app).get('/vehicles');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(vehicles);
            expect(vehicleService.getAvailableVehicles).toHaveBeenCalledTimes(1);
        });

        it('should return 500 if there is an error', async () => {
            vehicleService.getAvailableVehicles.mockRejectedValue(new Error('Database error'));

            const response = await request(app).get('/vehicles');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Internal Server Error' });
        });
    });

    describe('POST /vehicles', () => {
        it('should create a new vehicle', async () => {
            const newVehicle = { name: 'Van', capacity: 5 };
            vehicleService.addVehicle.mockResolvedValue(newVehicle);

            const response = await request(app).post('/vehicles').send(newVehicle);

            expect(response.status).toBe(201);
            expect(response.body).toEqual(newVehicle);
            expect(vehicleService.addVehicle).toHaveBeenCalledWith(newVehicle);
        });

        it('should return 400 if vehicle data is invalid', async () => {
            const invalidVehicle = { name: '', capacity: -1 };

            const response = await request(app).post('/vehicles').send(invalidVehicle);

            expect(response.status).toBe(400);
            expect(response.body).toEqual({ message: 'Invalid vehicle data' });
        });

        it('should return 500 if there is an error', async () => {
            const newVehicle = { name: 'Bus', capacity: 20 };
            vehicleService.addVehicle.mockRejectedValue(new Error('Database error'));

            const response = await request(app).post('/vehicles').send(newVehicle);

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Internal Server Error' });
        });
    });
});