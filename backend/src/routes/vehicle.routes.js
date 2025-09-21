const express = require('express');
const vehicleController = require('../controllers/vehicle.controller');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

// Route to add a new vehicle
router.post('/', validateRequest, vehicleController.addVehicle);

// Route to get all available vehicles
router.get('/available', vehicleController.getAvailableVehicles);

// Route to get vehicle details by ID
router.get('/:id', vehicleController.getVehicleById);

// Route to update vehicle details
router.put('/:id', validateRequest, vehicleController.updateVehicle);

// Route to delete a vehicle
router.delete('/:id', vehicleController.deleteVehicle);

module.exports = router;