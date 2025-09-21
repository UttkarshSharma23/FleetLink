const Vehicle = require('../models/Vehicle.model');
const vehicleRepository = require('../repositories/vehicle.repository');

const addVehicle = async (vehicleData) => {
    const newVehicle = new Vehicle(vehicleData);
    return await vehicleRepository.createVehicle(newVehicle);
};

const getAvailableVehicles = async (criteria) => {
    return await vehicleRepository.findAvailableVehicles(criteria);
};

const updateVehicle = async (vehicleId, updateData) => {
    return await vehicleRepository.updateVehicle(vehicleId, updateData);
};

const deleteVehicle = async (vehicleId) => {
    return await vehicleRepository.deleteVehicle(vehicleId);
};

module.exports = {
    addVehicle,
    getAvailableVehicles,
    updateVehicle,
    deleteVehicle,
};