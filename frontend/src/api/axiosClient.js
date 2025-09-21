import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000', // Adjust the base URL as needed
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptors can be added here if needed
axiosClient.interceptors.response.use(
    response => response,
    error => {
        // Handle errors globally
        return Promise.reject(error);
    }
);

export default axiosClient;