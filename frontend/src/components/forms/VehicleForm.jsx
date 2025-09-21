import React, { useState } from 'react';
import { addVehicle } from '../../api/vehicle.api';

const VehicleForm = () => {
    const [name, setName] = useState('');
    const [capacityKg, setCapacityKg] = useState('');
    const [tyres, setTyres] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!name || !capacityKg || !tyres) {
            setError('All fields are required.');
            return;
        }

        try {
            const vehicleData = { name, capacityKg: Number(capacityKg), tyres: Number(tyres) };
            const response = await addVehicle(vehicleData);
            setSuccess('Vehicle added successfully!');
            setName('');
            setCapacityKg('');
            setTyres('');
        } catch (err) {
            setError('Failed to add vehicle. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Vehicle</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Capacity (kg):</label>
                <input
                    type="number"
                    value={capacityKg}
                    onChange={(e) => setCapacityKg(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Tyres:</label>
                <input
                    type="number"
                    value={tyres}
                    onChange={(e) => setTyres(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Vehicle</button>
        </form>
    );
};

export default VehicleForm;