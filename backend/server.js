import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ ENHANCED BUKU TEKS DATA DENGAN CONTENT SPESIFIK
const enhancedBukuTeksData = {
  1: { 
    tema: "Pendahuluan", 
    unit: "Pengenalan", 
    mukaSurat: "1-9",
    jilid: 1,
    contentDetails: {
      1: "Muka depan buku - Rukun Negara, maklumat buku",
      2: "Rukun Negara - Kepercayaan kepada Tuhan, Kesetiaan kepada Raja dan Negara",
      3: "Maklumat penerbit - Kementerian Pendidikan Malaysia",
      4: "Penghargaan - Senarai pihak yang terlibat",
      5: "Kandungan - Senarai tema dan unit",
      6: "Pendahuluan - Pengenalan buku teks dan ikon",
      7: "Peta tema - Visual tema pembelajaran",
      8: "Struktur buku - Cara menggunakan buku teks",
      9: "Aktiviti pengenalan - Latihan asas bahasa Melayu"
    },
    learningFocus: "Pengenalan buku teks, Rukun Negara, struktur pembelajaran"
  },
  
  2: { 
    tema: "Kekeluargaan",
    unit: "Unit 1: Keluarga Cergas", 
    mukaSurat: "10-14",
    jilid: 1,
    contentDetails: {
      10: "Dialog 'Suria Pagi' - keluarga bersenam pagi",
      11: "Teks 'Bantu-membantu di Dapur' - kerjasama keluarga", 
      12: "Tulisan berangkai - latihan menulis cantik",
      13: "Simpulan bahasa - peribahasa tentang keluarga",
      14: "Kata nama am dan khas - pengenalan tatabahasa"
    },
    learningFocus: "Dialog, tulisan berangkai, simpulan bahasa, kata nama"
  },

  13: { 
    tema: "Kebudayaan, Kesenian dan Estetika",
    unit: "Unit 13: Kekalkan Warisan Kita", 
    mukaSurat: "8-12",
    jilid: 2,
    contentDetails: {
      8: "Istilah keluarga diraja - Ayahanda, Bonda, Raja, Permaisuri",
      9: "Keluarga diraja - dialog tentang makna istilah",
      10: "Pantun tradisional - 4 rangkap pantun warisan",
      11: "Tulisan berangkai - contoh alamat 'Teratak Warisan'", 
      12: "Kata ganda penuh - permainan galah panjang"
    },
    learningFocus: "Istilah diraja, pantun, tulisan berangkai, kata ganda penuh"
  },
  
  14: {
    tema: "Kebudayaan, Kesenian dan Estetika",
    unit: "Unit 14: Kenali Kesenian Kita",
    mukaSurat: "13-18", 
    jilid: 2,
    contentDetails: {
      13: "Tarian ceracap inai - sejarah & ciri-ciri",
      14: "Label penjagaan baju kurung - simbol & maksud",
      15: "Alat muzik gambus & kompang - deskripsi & cara main",
      16: "Syair warisan seni - 4 rangkap syair",
      17: "Kata ganda separa - permainan lelayang",
      18: "Kata ganda berentak - juadah tradisional"
    },
    learningFocus: "Tarian, alat muzik, syair, kata ganda separa & berentak"
  },

  15: {
    tema: "Kebudayaan, Kesenian dan Estetika", 
    unit: "Unit 15: Indahnya Seni dan Budaya Kita",
    mukaSurat: "19-26",
    jilid: 2,
    contentDetails: {
      19: "Selampai manik - kraftangan etnik Sarawak",
      20: "Pemerah santan tradisional - alat tradisional",
      21: "Kesenian masyarakat Orang Asli - ukiran kayu",
      22: "Ayat seruan - contoh ayat seruan dalam dialog",
      23: "Ayat perintah - jenis-jenis ayat perintah", 
      24: "Ayat tanya dengan kata tanya - bentuk soalan",
      25: "Pemulihan - aktiviti pengukuhan bahasa",
      26: "Pengayaan - karangan rumah tradisional Melaka"
    },
    learningFocus: "Kraftangan, ayat seruan, ayat perintah, ayat tanya"
  },

  22: {
    tema: "Ekonomi, Keusahawanan dan Kewangan", 
    unit: "Unit 22: Bijak Ekonomi",
    mukaSurat: "72-76",
    jilid: 2, 
    contentDetails: {
      72: "Bijak membeli - perbandingan minyak wangi Melati vs Lavender",
      73: "Mesin layan diri MRT - cara beli token pengangkutan",
      74: "Usahawan kuih denderam - kisah kejayaan Encik Nizam", 
      75: "Kata dasar & berimbuhan - dialog 'Wah, Murahnya!'",
      76: "Kata majmuk - kad diskaun, anak kunci, kepala paip"
    },
    learningFocus: "Bijak beli-belah, usahawan, kata dasar, kata berimbuhan, kata majmuk"
  },

  23: {
    tema: "Ekonomi, Keusahawanan dan Kewangan",
    unit: "Unit 23: Budaya Usahawan", 
    mukaSurat: "77-82",
    jilid: 2,
    contentDetails: {
      77: "Bijak berniaga - perbandingan air kotak vs air bancuhan",
      78: "Perusahaan salun - kisah usahawan Puan Anisah",
      79: "Usahawan udang geragau - kisah Pak Cik Mazlan",
      80: "Lagu usahawan - lirik 'Usahawan Berjaya'", 
      81: "Kata ganda - dalam konteks perniagaan",
      82: "Ayat seruan & ayat perintah - 'Oh, Inspirasiku!' dengan kata seru Hai, Oh, Wah, Eh"
    },
    learningFocus: "Keusahawanan, kata ganda, ayat seruan, ayat perintah"
  },

  82: {
    tema: "Ekonomi, Keusahawanan dan Kewangan",
    unit: "Unit 23: Budaya Usahawan - Ayat Seruan & Perintah", 
    mukaSurat: "82",
    jilid: 2,
    contentDetails: {
      82: "Ayat seruan & ayat perintah - 'Oh, Inspirasiku!' dengan kata seru Hai, Oh, Wah, Eh dan kata perintah harap, usah, jemput"
    },
    learningFocus: "Ayat seruan, ayat perintah, kata seru, kata perintah"
  }
};

// ✅ FUNCTION UNTUK DAPATKAN BUKU TEKS INFO
const getEnhancedBukuTeksByMinggu = (minggu) => {
  return enhancedBukuTeksData[minggu] || {
    tema: "Umum", 
    unit: "Aktiviti Umum", 
    mukaSurat: "-",
    jilid: 2,
    contentDetails: {},
    learningFocus: "Kemahiran asas bahasa Melayu"
  };
};

// ✅ ENHANCED AI PROMPT UNTUK PEMBACAAN TELITI
const createDetailedPrompt = (formData, bukuTeksInfo) => {
  const tarikhFormatted = new Date(formData.tarikh).toLocaleDateString('ms-MY', {
    weekday: 'long',
    year: 'numeric', 
    month: 'long',
    day: 'numeric'
  });

  return `
ANDA ADALAH GURU BAHASA MELAYU TAHUN 3 YANG SANGAT DETAIL-ORIENTED DAN TELITI. ANDA BARU SAJA MEMBUKA BUKU TEKS DAN MEMBACA SETIAP MUKA SURAT DENGAN PENUH PERHATIAN.

📚 BUKU TEKS YANG SEDANG ANDA GUNA:
• JILID: ${bukuTeksInfo.jilid}
• UNIT: "${bukuTeksInfo.unit}"
• MUKA SURAT: ${bukuTeksInfo.mukaSurat}  
• TEMA: ${bukuTeksInfo.tema}

🎯 FOKUS PEMBELAJARAN: ${bukuTeksInfo.learningFocus}

📖 KANDUNGAN SPESIFIK YANG ANDA BACA DENGAN TELITI:
${Object.entries(bukuTeksInfo.contentDetails || {}).map(([page, content]) => 
  `• MUKA SURAT ${page}: "${content}"`
).join('\n')}

📝 MAKLUMAT RPH:
• Tarikh: ${tarikhFormatted}
• Kelas: Tahun ${formData.kelas}
• Minggu: ${formData.minggu}

🚀 ARAHAN KHUSUS UNTUK AI:
1. ANDA PERLU MEMBUAT RPH YANG MENUNJUKKAN ANDA BENAR-BENAR TELAH MEMBACA BUKU TEKS INI
2. RUJUK LANGSUNG KEPADA JUDUL/KANDUNGAN SPESIFIK DARI BUKU TEKS
3. GUNAKAN TERMINOLOGI DAN CONTOH YANG TEPAT DARI KANDUNGAN BUKU TEKS
4. RANGKA AKTIVITI YANG LANGSUNG BERKAITAN DENGAN FOKUS PEMBELAJARAN
5. HASILKAN CONTOH YANG SPESIFIK DAN BOLEH DILAKSANAKAN

📋 CONTOH FORMAT OUTPUT YANG DIHARAPKAN:

"Murid MEMBUKA BUKU TEKS JILID 2 MUKA SURAT 82 'OH, INSPIRASIKU!' dan MEMBACA DIALOG tentang ayat seruan yang menggunakan kata seru Hai, Oh, Wah, Eh. Kemudian, murid MEMBINA AYAT SERUAN mereka sendiri berdasarkan situasi harian..."

ATAU

"Murid MEMBUKA BUKU TEKS JILID 2 MUKA SURAT 76 dan MENGANALISIS penggunaan kata majmuk seperti 'kad diskaun', 'anak kunci', 'kepala paip'. Kemudian murid MENJANA kata majmuk baharu berkaitan dengan topik ekonomi..."

HASILKAN RPH LENGKAP YANG MENUNJUKKAN PEMAHAMAN MENDALAM TERHADAP KANDUNGAN BUKU TEKS!
`;
};

// ✅ FUNCTION UNTUK GENERATE ACTIVITIES SPESIFIK
const generateSpecificActivities = (bukuTeksInfo) => {
  const activities = [];
  const learningFocus = bukuTeksInfo.learningFocus.toLowerCase();
  
  // Based on learning focus dari buku teks
  if (learningFocus.includes("ayat seruan") || learningFocus.includes("kata seru")) {
    activities.push(
      "Baca dan analisis ayat seruan dalam teks 'Oh, Inspirasiku!'",
      "Bina ayat seruan menggunakan kata seru: Hai, Oh, Wah, Eh", 
      "Role play situasi menggunakan ayat seruan yang sesuai",
      "Hasilkan kad ucapan dengan ayat seruan kreatif"
    );
  }
  
  if (learningFocus.includes("ayat perintah")) {
    activities.push(
      "Kenal pasti ayat perintah dalam dialog",
      "Bina ayat perintah untuk situasi harian",
      "Lakonkan situasi menggunakan ayat perintah yang betul"
    );
  }
  
  if (learningFocus.includes("kata majmuk")) {
    activities.push(
      "Kenal pasti kata majmuk dalam petikan teks",
      "Bina ayat menggunakan kata majmuk yang dipelajari",
      "Permainan 'Cari Kata Majmuk' dalam kumpulan",
      "Hasilkan senarai kata majmuk baharu"
    );
  }
  
  if (learningFocus.includes("pantun")) {
    activities.push(
      "Baca dan hayati pantun tradisional dalam buku teks",
      "Bina pantun berkaitan dengan tema pembelajaran", 
      "Persembahan pantun dengan intonasi yang betul",
      "Illustrasi maksud pantun secara kreatif"
    );
  }
  
  if (learningFocus.includes("tulisan berangkai")) {
    activities.push(
      "Latihan menulis tulisan berangkai yang kemas",
      "Salin contoh alamat dengan tulisan berangkai",
      "Hasilkan kad alamat sendiri dengan tulisan cantik"
    );
  }
  
  // Default activities jika tiada match spesifik
  if (activities.length === 0) {
    activities.push(
      "Baca dan fahami kandungan buku teks",
      "Perbincangan kumpulan tentang topik pembelajaran", 
      "Latihan praktikal kemahiran bahasa",
      "Hasilan kerja kreatif berkaitan tema"
    );
  }
  
  return activities;
};

// ✅ SMART FALLBACK RPH GENERATOR
const generateSmartRPH = (formData, bukuTeksInfo) => {
  const tarikhFormatted = new Date(formData.tarikh).toLocaleDateString('ms-MY', {
    weekday: 'long',
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  });
  
  const specificActivities = generateSpecificActivities(bukuTeksInfo);
  
  return `RANCANGAN PENGAJARAN HARIAN BAHASA MELAYU
(Dihasilkan dengan Analisis Buku Teks Terperinci)

MATA PELAJARAN: Bahasa Melayu
KELAS: Tahun ${formData.kelas}  
TARIKH: ${tarikhFormatted}
MINGGU: ${formData.minggu}

📚 BUKU TEKS RUJUKAN:
• Jilid: ${bukuTeksInfo.jilid}
• Unit: ${bukuTeksInfo.unit}
• Muka Surat: ${bukuTeksInfo.mukaSurat}
• Tema: ${bukuTeksInfo.tema}

🎯 FOKUS PEMBELAJARAN:
${bukuTeksInfo.learningFocus}

📖 KANDUNGAN BUKU TEKS YANG DIANALISIS:
${Object.entries(bukuTeksInfo.contentDetails || {}).map(([page, content]) => 
  `• Muka Surat ${page}: ${content}`
).join('\n')}

⏰ AKTIVITI PDPC BERDASARKAN KANDUNGAN BUKU TEKS:

1. BACA & ANALISIS KANDUNGAN
   - Murid MEMBUKA BUKU TEKS JILID ${bukuTeksInfo.jilid} MUKA SURAT ${bukuTeksInfo.mukaSurat}
   - Baca dan fahami kandungan "${bukuTeksInfo.unit}"
   - Perbincangan tentang ${bukuTeksInfo.tema}

2. AKTIVITI SPESIFIK:
${specificActivities.map((activity, index) => `   ${index + 1}. ${activity}`).join('\n')}

3. APLIKASI KREATIF
   - Hasilkan kerja kreatif berdasarkan tema
   - Pembentangan hasil kerja dalam kumpulan
   - Refleksi pembelajaran

📦 BAHAN BANTU MENGAJAR:
- Buku Teks Bahasa Melayu Tahun 3 Jilid ${bukuTeksInfo.jilid}
- Lembaran kerja berkaitan ${bukuTeksInfo.tema}
- Bahan bantu visual dan multimedia

📊 PENILAIAN:
- Pemerhatian semasa aktiviti
- Hasil kerja bertulis murid
- Penyertaan dalam perbincangan

💡 KBAT & NILAI MURNI:
- Kemahiran berfikir aras tinggi
- Kreativiti dan inovasi  
- Kerjasama dan toleransi

----------------------------------------
✅ RPH ini dihasilkan berdasarkan analisis terperinci
   kandungan Buku Teks Bahasa Melayu Tahun 3`;
};

// ✅ MAIN AI ENDPOINT
app.post('/generate-rph', async (req, res) => {
  try {
    const { tarikh, minggu, kelas } = req.body;
    
    console.log('📦 Received:', { tarikh, minggu, kelas });
    
    // Dapatkan info buku teks terperinci
    const bukuTeksInfo = getEnhancedBukuTeksByMinggu(parseInt(minggu));
    
    console.log('📚 Buku Teks Info:', bukuTeksInfo);

    // Cuba Hugging Face AI dengan prompt enhanced
    try {
      const prompt = createDetailedPrompt({ tarikh, minggu, kelas }, bukuTeksInfo);
      
      console.log('🤖 Sending to AI...');
      
      const aiResponse = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer hf_your_api_key_here',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: { 
            max_length: 2000, 
            temperature: 0.8,
            do_sample: true,
            top_p: 0.9
          }
        }),
      });

      if (aiResponse.ok) {
        const aiData = await aiResponse.json();
        const aiContent = aiData[0]?.generated_text || generateSmartRPH({ tarikh, minggu, kelas }, bukuTeksInfo);
        
        console.log('✅ AI Generated Content');
        
        res.json({
          success: true,
          rph: aiContent,
          bukuTeksInfo: bukuTeksInfo,
          source: "huggingface_ai"
        });
        return;
      }
    } catch (aiError) {
      console.log('🔄 AI unavailable, using smart generator...');
    }

    // Fallback ke smart generator
    const smartRPH = generateSmartRPH({ tarikh, minggu, kelas }, bukuTeksInfo);
    
    res.json({
      success: true,
      rph: smartRPH,
      bukuTeksInfo: bukuTeksInfo,
      source: "smart_generator"
    });

  } catch (error) {
    console.error('❌ Server Error:', error);
    
    res.json({
      success: true,
      rph: 'Sistem sedang dipertingkatkan. Cuba sebentar lagi.',
      bukuTeksInfo: { 
        tema: "Sistem", 
        unit: "Peningkatan Kualiti", 
        mukaSurat: "-",
        jilid: 2,
        learningFocus: "Kemahiran bahasa asas"
      },
      source: "error_fallback"
    });
  }
});

// ✅ TEST ENDPOINT
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 RPH AI Enhanced Backend Active!',
    status: 'online',
    version: '2.0',
    features: [
      'Enhanced buku teks analysis',
      'Specific content referencing', 
      'Smart activity generation',
      'Hugging Face AI integration'
    ]
  });
});

// ✅ TEST BUKU TEKS ENDPOINT
app.get('/buku-teks/:minggu', (req, res) => {
  const minggu = parseInt(req.params.minggu);
  const bukuTeksInfo = getEnhancedBukuTeksByMinggu(minggu);
  
  res.json({
    success: true,
    minggu: minggu,
    bukuTeksInfo: bukuTeksInfo
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Enhanced RPH AI Backend running on port ${PORT}`);
  console.log(`📍 Features: Detailed buku teks analysis + AI integration`);
});