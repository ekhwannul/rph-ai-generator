import express from 'express';
import cors from 'cors';
// ❌ BUANG: import fetch from 'node-fetch';
// ✅ GUNA built-in fetch (Node.js 18+ sudah ada)

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API KEYS - GUNA ENVIRONMENT VARIABLES
const API_KEYS = {
  GROQ: process.env.GROQ_API_KEY,
  HUGGING_FACE: process.env.HF_API_KEY,
  OPENROUTER: process.env.OPENROUTER_API_KEY
};

console.log('🚀 RPH AI Backend Starting...');

// ✅ GROQ AI - GUNA built-in fetch
const generateWithGroq = async (prompt) => {
  if (!API_KEYS.GROQ) {
    console.log('❌ GROQ API Key not configured');
    return null;
  }
  
  try {
    console.log('🤖 Trying GROQ AI...');
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEYS.GROQ}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 500,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const result = data.choices[0]?.message?.content;
      console.log('✅ GROQ Response:', result ? 'SUCCESS' : 'EMPTY');
      return result;
    }
    console.log('❌ GROQ API Error:', response.status);
    return null;
  } catch (error) {
    console.log('❌ GROQ AI error:', error.message);
    return null;
  }
};

// ... (functions lain sama, guna fetch tanpa import)

app.get('/test-ai', async (req, res) => {
  console.log('📞 /test-ai endpoint called');
  try {
    const testPrompt = "Hai, boleh kamu beri saya salam dalam Bahasa Malaysia?";
    
    const results = {};
    
    // Test GROQ
    try {
      const groqResult = await generateWithGroq(testPrompt);
      results.groq = groqResult ? '✅ WORKING - ' + groqResult.substring(0, 100) + '...' : '❌ NO RESPONSE - API Key not configured';
    } catch (error) {
      results.groq = `❌ ERROR: ${error.message}`;
    }
    
    // Test lainnya sama...
    
    res.json({
      message: '🤖 AI Providers Test Results',
      results: results,
      api_keys_configured: {
        groq: !!API_KEYS.GROQ,
        huggingface: !!API_KEYS.HUGGING_FACE,
        openrouter: !!API_KEYS.OPENROUTER
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.log('❌ /test-ai error:', error);
    res.json({ 
      error: 'Test failed: ' + error.message,
      timestamp: new Date().toISOString()
    });
  }
});

app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 RPH AI Generator Backend Active!',
    status: 'online',
    version: '3.2',
    endpoints: {
      generateRPH: 'POST /generate-rph',
      testAI: 'GET /test-ai',
      health: 'GET /'
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
