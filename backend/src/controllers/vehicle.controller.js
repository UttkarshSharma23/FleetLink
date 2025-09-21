const Vehicle = require('../models/Vehicle.model');
const vehicleRepository = require('../repositories/vehicle.repository');

// Add a new vehicle
exports.addVehicle = async (req, res) => {
    try {
        const vehicleData = req.body;
        const newVehicle = await vehicleRepository.addVehicle(vehicleData);
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(500).json({ message: 'Error adding vehicle', error: error.message });
    }
};

// Get all available vehicles
exports.getAvailableVehicles = async (req, res) => {
    try {
        const availableVehicles = await vehicleRepository.getAvailableVehicles();
        res.status(200).json(availableVehicles);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving vehicles', error: error.message });
    }
};

// Get vehicle by ID
exports.getVehicleById = async (req, res) => {
    try {
        const vehicleId = req.params.id;
        const vehicle = await vehicleRepository.getVehicleById(vehicleId);
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving vehicle', error: error.message });
    }
};

// Update vehicle details
exports.updateVehicle = async (req, res) => {
    try {
        const vehicleId = req.params.id;
        const updatedVehicle = await vehicleRepository.updateVehicle(vehicleId, req.body);
        if (!updatedVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json(updatedVehicle);
    } catch (error) {
        res.status(500).json({ message: 'Error updating vehicle', error: error.message });
    }
};

// Delete a vehicle
exports.deleteVehicle = async (req, res) => {
    try {
        const vehicleId = req.params.id;
        const deletedVehicle = await vehicleRepository.deleteVehicle(vehicleId);
        if (!deletedVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting vehicle', error: error.message });
    }
};