import React from 'react';

const VehicleCard = ({ vehicle, onBook }) => {
    const handleBook = () => {
        if (onBook) {
            onBook(vehicle._id);
        }
    };

    return (
        <div className="vehicle-card">
            <h3>{vehicle.name}</h3>
            <p>Capacity: {vehicle.capacityKg} kg</p>
            <p>Tyres: {vehicle.tyres}</p>
            <button onClick={handleBook}>Book Now</button>
        </div>
    );
};

export default VehicleCard;