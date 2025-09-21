import axiosClient from './axiosClient';

const BASE_URL = '/api/vehicles';

export const addVehicle = async (vehicleData) => {
    const response = await axiosClient.post(BASE_URL, vehicleData);
    return response.data;
};

export const getAvailableVehicles = async (capacityRequired, fromPincode, toPincode, startTime) => {
    const response = await axiosClient.get(`${BASE_URL}/available`, {
        params: { capacityRequired, fromPincode, toPincode, startTime },
    });
    return response.data;
};