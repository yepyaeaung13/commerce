"use client"

import { getTokenFromClient } from '@/utils/cookies';
import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
    timeout: 10000, // Request timeout in milliseconds
    withCredentials: true, // Include cookies in requests
});

// Request interceptor to add Authorization header
apiClient.interceptors.request.use(
    (config) => {
        const token = getTokenFromClient();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle 401 errors
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {

            originalRequest._retry = true;

            try {
                // Call your token refresh endpoint
                const response = await axios.post('https://api.example.com/refresh-token', {}, { withCredentials: true });
                const newToken = response.data.token;

                // Update the token in cookies
                document.cookie = `token=${newToken}; path=/`;

                // Retry the original request with the new token
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return apiClient(originalRequest);
            } catch (err) {
                console.error('Token refresh failed. Redirecting to login...');
                return Promise.reject(err);
            } 
        }

        return Promise.reject(error);
    }
);

export default apiClient;