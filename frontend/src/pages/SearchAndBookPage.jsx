import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import SearchForm from '../components/forms/SearchForm';
import VehicleCard from '../components/VehicleCard';
import { getAvailableVehicles } from '../api/vehicle.api';

const SearchAndBookPage = () => {
    const { addBooking } = useContext(BookingContext); 
    const [availableVehicles, setAvailableVehicles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (searchParams) => {
        setLoading(true);
        setError(null);
        try {
            const vehicles = await getAvailableVehicles(searchParams);
            setAvailableVehicles(vehicles);
        } catch (err) {
            setError('Failed to fetch available vehicles. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleBooking = (vehicle) => {
        addBooking(vehicle); 
    };

    return (
        <div>
            <h1>Search and Book Vehicles</h1>
            <SearchForm onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div>
                {availableVehicles.map(vehicle => (
                    <VehicleCard key={vehicle._id} vehicle={vehicle} onBook={() => handleBooking(vehicle)} />
                ))}
            </div>
        </div>
    );
};

export default SearchAndBookPage;