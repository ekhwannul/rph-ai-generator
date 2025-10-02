// services/apiService.js
const API_BASE_URL = 'https://rph-ai-backend.onrender.com';

export const generateRPH = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/generate-rph`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'Failed to generate RPH');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};