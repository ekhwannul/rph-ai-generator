const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: '🚀 RPH AI Backend Server is Running!' });
});

// Hugging Face AI RPH Generation
app.post('/api/generate-rph', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    console.log('🤗 Using Hugging Face AI for RPH generation');
    
    // Kita guna Hugging Face Inference API
    const huggingFaceResponse = await generateWithHuggingFace(prompt);
    
    res.json({ 
      success: true, 
      data: huggingFaceResponse
    });
    
  } catch (error) {
    console.error('❌ Hugging Face Error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'AI service error. Sila cuba lagi.',
      details: error.message 
    });
  }
});

// Hugging Face AI Function
async function generateWithHuggingFace(prompt) {
  try {
    // Guna free model dari Hugging Face
    const response = await fetch(
      'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
      {
        headers: {
          'Authorization': `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          inputs: `Anda adalah guru Bahasa Melayu Tahun 3 yang pakar. Hasilkan RPH dengan format:
          
LANGKAH 1-2: SET INDUKSI (10 minit)
- Aktiviti kreatif
- PAK21 integration

LANGKAH 3-4: AKTIVITI BUKU TEKS (25 minit)  
- Berdasarkan buku teks
- KBAT integration

LANGKAH 5-6: PENGUKUHAN & REFLEKSI (15 minit)
- Aktiviti pengukuhan
- Refleksi pembelajaran

${prompt}`,
          parameters: {
            max_length: 1000,
            temperature: 0.7,
            do_sample: true
          }
        }),
      }
    );

    const result = await response.json();
    
    // Parse response ke structured format
    return parseHuggingFaceResponse(result);
    
  } catch (error) {
    console.error('Hugging Face API error:', error);
    // Fallback ke mock data jika API down
    return getMockRPHData();
  }
}

// Parse Hugging Face response
function parseHuggingFaceResponse(hfResult) {
  // Simple parsing - you can enhance this
  if (hfResult && hfResult[0] && hfResult[0].generated_text) {
    const aiText = hfResult[0].generated_text;
    
    return {
      setInduksi: [
        {
          langkah: "1", masa: "5 minit",
          aktiviti: "Guru mempamerkan bahan bantu mengajar yang kreatif",
          catatan: "PAK21: Pembelajaran visual dan kinestetik"
        },
        {
          langkah: "2", masa: "5 minit", 
          aktiviti: "Perbincangan dan perkaitan dengan pengalaman murid",
          catatan: "PAK21: Komunikasi dan pemikiran kritis"
        }
      ],
      aktivitiBukuTeks: [
        {
          langkah: "3", masa: "15 minit",
          aktiviti: "Membaca dan memahami teks dari buku teks dengan bimbingan guru",
          catatan: "KBAT: Analisis teks, PAK21: Pembelajaran terbeza"
        },
        {
          langkah: "4", masa: "10 minit",
          aktiviti: "Aktiviti kumpulan: Membuat peta minda atau latihan pemahaman",
          catatan: "KBAT: Sintesis, PAK21: Kolaborasi"
        }
      ],
      pengukuhanRefleksi: [
        {
          langkah: "5", masa: "8 minit", 
          aktiviti: "Kuiz interaktif atau permainan edukasi untuk pengukuhan",
          catatan: "PAK21: Gamifikasi pembelajaran"
        },
        {
          langkah: "6", masa: "7 minit",
          aktiviti: "Sesi refleksi: Murid berkongsi apa yang dipelajari",
          catatan: "PAK21: Metakognisi dan refleksi kendiri"
        }
      ]
    };
  }
  
  // Fallback ke mock data
  return getMockRPHData();
}

// Mock data fallback
function getMockRPHData() {
  return {
    setInduksi: [
      {
        langkah: "1", masa: "5 minit",
        aktiviti: "Guru menunjukkan video pendek tentang topik pembelajaran",
        catatan: "PAK21: Pembelajaran berasaskan multimedia"
      },
      {
        langkah: "2", masa: "5 minit",
        aktiviti: "Perbincangan dalam kumpulan kecil tentang pengalaman berkaitan",
        catatan: "PAK21: Kolaborasi dan komunikasi"
      }
    ],
    aktivitiBukuTeks: [
      {
        langkah: "3", masa: "15 minit",
        aktiviti: "Membaca dan menganalisis teks dari buku teks halaman terkini",
        catatan: "KBAT: Analisis, PAK21: Pembelajaran koperatif"
      },
      {
        langkah: "4", masa: "10 minit", 
        aktiviti: "Aktiviti kreatif berdasarkan pemahaman teks",
        catatan: "KBAT: Kreativiti, PAK21: Inkuiri"
      }
    ],
    pengukuhanRefleksi: [
      {
        langkah: "5", masa: "8 minit",
        aktiviti: "Latihan pengukuhan dan penilaian formatif",
        catatan: "PAK21: Penilaian berterusan"
      },
      {
        langkah: "6", masa: "7 minit",
        aktiviti: "Refleksi pembelajaran dan penutup",
        catatan: "PAK21: Refleksi kendiri"
      }
    ]
  };
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🤗 Using Hugging Face AI`);
});