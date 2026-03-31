// This checks if the app is running on Vercel. 
// If not, it defaults to your local Django server.
const BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

export const API_ENDPOINTS = {
    CONSULTATION: `${BASE_URL}/api/consultations/`,
};

export default BASE_URL;