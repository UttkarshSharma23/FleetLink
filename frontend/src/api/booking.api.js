import axiosClient from './axiosClient';

const BASE_URL = '/api/bookings';

export const createBooking = async (bookingData) => {
    try {
        const response = await axiosClient.post(`${BASE_URL}`, bookingData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const getAvailableVehicles = async (queryParams) => {
    try {
        const response = await axiosClient.get(`${BASE_URL}/available`, { params: queryParams });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};