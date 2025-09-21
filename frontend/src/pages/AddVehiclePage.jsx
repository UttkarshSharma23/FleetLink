import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VehicleForm from '../components/forms/VehicleForm';
import { addVehicle } from '../api/vehicle.api';

const AddVehiclePage = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleAddVehicle = async (vehicleData) => {
        try {
            await addVehicle(vehicleData);
            setSuccess(true);
            setError(null);
            // Redirect to another page or reset the form as needed
            navigate('/'); // Redirect to home or vehicle list page
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to add vehicle');
            setSuccess(false);
        }
    };

    return (
        <div>
            <h1>Add New Vehicle</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Vehicle added successfully!</p>}
            <VehicleForm onSubmit={handleAddVehicle} />
        </div>
    );
};

export default AddVehiclePage;