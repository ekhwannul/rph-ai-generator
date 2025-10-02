// backend/server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route test - untuk check server hidup
app.get('/', (req, res) => {
  res.json({ message: '🚀 RPH AI Backend Server is Running!' });
});

// Route untuk generate RPH dengan AI
app.post('/api/generate-rph', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    console.log('📧 Received prompt:', prompt);
    
    // SIMULATE AI RESPONSE (SEMENTARA)
    // Nanti kita ganti dengan OpenAI real
    const mockResponse = {
      setInduksi: [
        {
          langkah: "1",
          masa: "5 minit",
          aktiviti: "Guru menunjukkan video pendek tentang alam sekitar",
          catatan: "PAK21: Pembelajaran berasaskan pengalaman"
        },
        {
          langkah: "2", 
          masa: "5 minit",
          aktiviti: "Perbincangan dalam kumpulan kecil",
          catatan: "PAK21: Kolaborasi, pemikiran kritis"
        }
      ],
      aktivitiBukuTeks: [
        {
          langkah: "3",
          masa: "15 minit", 
          aktiviti: "Membaca dan memahami teks dari buku teks",
          catatan: "KBAT: Analisis teks, PAK21: Pembelajaran koperatif"
        },
        {
          langkah: "4",
          masa: "10 minit",
          aktiviti: "Aktiviti kumpulan: Membuat peta minda",
          catatan: "KBAT: Sintesis maklumat, PAK21 Kreativiti"
        }
      ],
      pengukuhanRefleksi: [
        {
          langkah: "5",
          masa: "8 minit",
          aktiviti: "Kuiz pantas menggunakan platform digital",
          catatan: "PAK21: Teknologi digital, penilaian diri"
        },
        {
          langkah: "6",
          masa: "7 minit", 
          aktiviti: "Refleksi pembelajaran",
          catatan: "PAK21: Metakognisi, refleksi kendiri"
        }
      ]
    };
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    res.json({ success: true, data: mockResponse });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Server error. Sila cuba lagi.' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Access: http://localhost:${PORT}`);
});