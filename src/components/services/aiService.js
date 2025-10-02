// src/components/services/aiService.js

const API_URL = 'http://localhost:5000/api/generate-rph';

export const generateRPHWithAI = async (prompt) => {
  try {
    console.log('📡 Sending request to backend...');
    
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