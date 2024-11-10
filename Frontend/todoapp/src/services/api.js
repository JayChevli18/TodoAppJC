import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Assuming you're storing token in localStorage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const logout = async () => {
    try {
        const response = await API.post('/auth/logout');
        return response.data;
    } catch (err) {
        throw new Error('Logout failed');
    }
};

export default API;
