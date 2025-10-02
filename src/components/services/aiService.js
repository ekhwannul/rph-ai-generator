// src/components/services/aiService.js

const getAPIUrl = () => {
  if (import.meta.env.DEV) {
    return 'http://localhost:5000/api/generate-rph';
  }
  // Ganti dengan URL Render anda:
  return 'https://rph-ai-backend.onrender.com/api/generate-rph';
};

export const generateRPHWithAI = async (prompt) => {
  try {
    const API_URL = getAPIUrl();
    console.log('📡 Sending request to:', API_URL);
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    
    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.error);
    }
    
  } catch (error) {
    console.error('❌ Error calling backend:', error);
    throw error;
  }
};