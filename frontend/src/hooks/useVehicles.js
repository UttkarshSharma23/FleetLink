import { useEffect, useState } from 'react';
import { getAvailableVehicles, addVehicle } from '../api/vehicle.api';

const useVehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAvailableVehicles = async (capacityRequired, fromPincode, toPincode, startTime) => {
        setLoading(true);
        setError(null);
        try {
            const response = await getAvailableVehicles(capacityRequired, fromPincode, toPincode, startTime);
            setVehicles(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const createVehicle = async (vehicleData) => {
        try {
            const response = await addVehicle(vehicleData);
            setVehicles((prevVehicles) => [...prevVehicles, response.data]);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        // Initial fetch or any other logic can be added here
    }, []);

    return { vehicles, loading, error, fetchAvailableVehicles, createVehicle };
};

export default useVehicles;