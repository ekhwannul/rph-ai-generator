import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ==================== API KEYS ====================
// ✅ GUNA ENVIRONMENT VARIABLES - JANGAN HARDCODE
const API_KEYS = {
  GROQ: process.env.GROQ_API_KEY,
  HUGGING_FACE: process.env.HF_API_KEY,
  OPENROUTER: process.env.OPENROUTER_API_KEY
};

console.log('🚀 RPH AI Backend Starting...');
console.log('🔑 API Keys Status:', {
  groq: !!API_KEYS.GROQ,
  huggingface: !!API_KEYS.HUGGING_FACE, 
  openrouter: !!API_KEYS.OPENROUTER
});

// ==================== AI FUNCTIONS ====================

// ✅ 1. GROQ AI
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

// ✅ 2. HUGGING FACE AI  
const generateWithHuggingFace = async (prompt) => {
  if (!API_KEYS.HUGGING_FACE) {
    console.log('❌ HuggingFace API Key not configured');
    return null;
  }
  
  try {
    console.log('🤖 Trying HuggingFace AI...');
    const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEYS.HUGGING_FACE}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: { max_length: 500 }
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const result = data[0]?.generated_text;
      console.log('✅ HuggingFace Response:', result ? 'SUCCESS' : 'EMPTY');
      return result;
    }
    console.log('❌ HuggingFace API Error:', response.status);
    return null;
  } catch (error) {
    console.log('❌ Hugging Face AI error:', error.message);
    return null;
  }
};

// ✅ 3. OPENROUTER AI
const generateWithOpenRouter = async (prompt) => {
  if (!API_KEYS.OPENROUTER) {
    console.log('❌ OpenRouter API Key not configured');
    return null;
  }
  
  try {
    console.log('🤖 Trying OpenRouter AI...');
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEYS.OPENROUTER}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "google/gemini-pro:free",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 500
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const result = data.choices[0]?.message?.content;
      console.log('✅ OpenRouter Response:', result ? 'SUCCESS' : 'EMPTY');
      return result;
    }
    console.log('❌ OpenRouter API Error:', response.status);
    return null;
  } catch (error) {
    console.log('❌ OpenRouter AI error:', error.message);
    return null;
  }
};

// ==================== TEST ENDPOINT ====================
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
    
    // Test HuggingFace
    try {
      const hfResult = await generateWithHuggingFace(testPrompt);
      results.huggingface = hfResult ? '✅ WORKING - ' + hfResult.substring(0, 100) + '...' : '❌ NO RESPONSE - API Key not configured';
    } catch (error) {
      results.huggingface = `❌ ERROR: ${error.message}`;
    }
    
    // Test OpenRouter
    try {
      const orResult = await generateWithOpenRouter(testPrompt);
      results.openrouter = orResult ? '✅ WORKING - ' + orResult.substring(0, 100) + '...' : '❌ NO RESPONSE - API Key not configured';
    } catch (error) {
      results.openrouter = `❌ ERROR: ${error.message}`;
    }

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

// ==================== BUKU TEKS DATA ====================
const enhancedBukuTeksData = {
  13: { 
    tema: "Kebudayaan, Kesenian dan Estetika", 
    unit: "Unit 13: Kekalkan Warisan Kita", 
    mukaSurat: "8-12", 
    jilid: 2,
    learningFocus: "Istilah diraja, pantun, tulisan berangkai, kata ganda penuh"
  },
  14: {
    tema: "Kebudayaan, Kesenian dan Estetika", 
    unit: "Unit 14: Kenali Kesenian Kita", 
    mukaSurat: "13-18", 
    jilid: 2,
    learningFocus: "Tarian, alat muzik, syair, kata ganda separa & berentak"
  }
};

// ==================== MAIN ENDPOINT ====================
app.post('/generate-rph', async (req, res) => {
  console.log('📞 /generate-rph endpoint called', req.body);
  try {
    const { tarikh, minggu, kelas } = req.body;
    
    if (!tarikh || !minggu || !kelas) {
      return res.json({
        success: false,
        error: 'Sila isi semua maklumat: tarikh, minggu, kelas'
      });
    }

    const bukuTeksInfo = enhancedBukuTeksData[minggu] || enhancedBukuTeksData[13];
    console.log('📚 Using buku teks:', bukuTeksInfo.unit);
    
    // Test AI providers
    const testPrompt = `Buat RPH untuk ${bukuTeksInfo.unit}, tema: ${bukuTeksInfo.tema}`;
    
    let aiResult = await generateWithGroq(testPrompt);
    let source = 'groq';
    
    if (!aiResult) {
      console.log('🔄 GROQ failed, trying HuggingFace...');
      aiResult = await generateWithHuggingFace(testPrompt);
      source = 'huggingface';
    }
    
    if (!aiResult) {
      console.log('🔄 HuggingFace failed, trying OpenRouter...');
      aiResult = await generateWithOpenRouter(testPrompt);
      source = 'openrouter';
    }
    
    if (!aiResult) {
      console.log('🔄 All AI failed, using local template');
      aiResult = `RPH Auto-generated untuk ${bukuTeksInfo.unit}`;
      source = 'local';
    }

    console.log('✅ RPH Generated by:', source);
    res.json({
      success: true,
      rph: aiResult,
      source: source,
      bukuTeksInfo: bukuTeksInfo
    });

  } catch (error) {
    console.log('❌ /generate-rph error:', error);
    res.json({
      success: false,
      error: 'Server error: ' + error.message
    });
  }
});

// ==================== HEALTH CHECK ====================
app.get('/', (req, res) => {
  console.log('📞 Health check called');
  res.json({ 
    message: '🚀 RPH AI Generator Backend Active!',
    status: 'online',
    version: '3.1',
    endpoints: {
      generateRPH: 'POST /generate-rph',
      testAI: 'GET /test-ai',
      health: 'GET /'
    },
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Health: https://rph-ai-backend.onrender.com/`);
  console.log(`📍 Test AI: https://rph-ai-backend.onrender.com/test-ai`);
});
