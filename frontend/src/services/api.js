import axios from 'axios';

const api = axios.create({
  // Hardcoded to your backend URL to ensure it doesn't fail due to environment variables
  baseURL: 'http://localhost:5000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Crucial: Allows cookies/auth headers to be sent
});

// Authentication services
export const loginUser = (credentials) => api.post('/auth/login', credentials);

// Asset management services
export const getAssets = () => api.get('/assets');
export const registerAsset = (assetData) => api.post('/assets', assetData);

export default api;