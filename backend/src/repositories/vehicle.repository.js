const Vehicle = require('../models/Vehicle.model');

const addVehicle = async (vehicleData) => {
    const vehicle = new Vehicle(vehicleData);
    return await vehicle.save();
};

const getAvailableVehicles = async () => {
    return await Vehicle.find({ isAvailable: true });
};

const updateVehicleAvailability = async (vehicleId, isAvailable) => {
    return await Vehicle.findByIdAndUpdate(vehicleId, { isAvailable }, { new: true });
};

const getVehicleById = async (vehicleId) => {
    return await Vehicle.findById(vehicleId);
};

module.exports = {
    addVehicle,
    getAvailableVehicles,
    updateVehicleAvailability,
    getVehicleById,
};