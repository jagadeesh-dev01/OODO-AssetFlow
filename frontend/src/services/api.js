const BASE_URL = 'http://localhost:5000/api';

export const request = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  try {
    const response = await fetch(url, { ...options, headers });
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong');
    }
    
    // This matches the strict integration contract with your backend teammate
    return result; 
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
};