const vehicleService = require('../services/vehicle.service');
const Vehicle = require('../models/Vehicle.model');

jest.mock('../models/Vehicle.model');

describe('Vehicle Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('addVehicle', () => {
        it('should add a new vehicle successfully', async () => {
            const vehicleData = { name: 'Truck', capacity: 10 };
            Vehicle.prototype.save.mockResolvedValue(vehicleData);

            const result = await vehicleService.addVehicle(vehicleData);
            expect(result).toEqual(vehicleData);
            expect(Vehicle.prototype.save).toHaveBeenCalledTimes(1);
        });

        it('should throw an error if vehicle data is invalid', async () => {
            const vehicleData = { name: '', capacity: -5 };
            await expect(vehicleService.addVehicle(vehicleData)).rejects.toThrow('Invalid vehicle data');
        });
    });

    describe('getAvailableVehicles', () => {
        it('should return available vehicles', async () => {
            const vehicles = [{ name: 'Truck', capacity: 10 }, { name: 'Van', capacity: 5 }];
            Vehicle.find.mockResolvedValue(vehicles);

            const result = await vehicleService.getAvailableVehicles();
            expect(result).toEqual(vehicles);
            expect(Vehicle.find).toHaveBeenCalledWith({ isAvailable: true });
        });

        it('should return an empty array if no vehicles are available', async () => {
            Vehicle.find.mockResolvedValue([]);

            const result = await vehicleService.getAvailableVehicles();
            expect(result).toEqual([]);
        });
    });
});