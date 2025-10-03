// services/aiService.js
export const generateRPHWithAI = async (formData, bukuTeksInfo) => {
  console.log('🔄 Using SMART RPH TEMPLATE (No API needed)');
  
  return `
RANCANGAN PENGAJARAN HARIAN BAHASA MELAYU

MATA PELAJARAN: Bahasa Melayu
KELAS: Tahun ${formData.kelas}  
TAJUK: ${formData.tajuk}
MINGGU: ${formData.minggu}
STANDARD PEMBELAJARAN: ${formData.standardPembelajaran}

📚 **RUJUKAN BUKU TEKS:**
- TEMA: ${bukuTeksInfo.tema}
- UNIT: ${bukuTeksInfo.unit}
- MUKA SURAT: ${bukuTeksInfo.mukaSurat}

🎯 **OBJEKTIF PEMBELAJARAN:**
1. Murid dapat memahami dan mengaplikasikan kemahiran bahasa berdasarkan Buku Teks muka surat ${bukuTeksInfo.mukaSurat}
2. Murid dapat melaksanakan aktiviti pembelajaran seperti dalam unit ${bukuTeksInfo.unit}
3. Murid dapat menghubungkaitkan pembelajaran dengan tema ${bukuTeksInfo.tema}

⏰ **AKTIVITI PDPC:**

**1. PERMULAAN (10 minit)**
   - Murid MEMBUKA BUKU TEKS MUKA SURAT ${bukuTeksInfo.mukaSurat}
   - Guru memperkenalkan tajuk: ${formData.tajuk}
   - Brainstorming tentang ${bukuTeksInfo.tema}

**2. PERKEMBANGAN (40 minit)**
   - AKTIVITI 1: ${bukuTeksInfo.aktiviti[0] || 'Membaca dan memahami teks'}
     * Murid merujuk muka surat yang spesifik
     * Perbincangan dalam kumpulan kecil
   
   - AKTIVITI 2: ${bukuTeksInfo.aktiviti[1] || 'Latihan praktikal'} 
     * Aplikasi kemahiran bahasa
     * Bimbingan guru secara individu
   
   - AKTIVITI 3: ${bukuTeksInfo.aktiviti[2] || 'Aktiviti kreatif'}
     * Penghasilan kerja berkumpulan
     * Pembentangan hasil kerja

**3. PENUTUP (10 minit)**
   - Rumusan pembelajaran tentang ${bukuTeksInfo.unit}
   - Refleksi murid terhadap aktiviti
   - Pra-pandangan untuk pembelajaran seterusnya

📦 **BAHAN BANTU MENGAJAR:**
- Buku Teks Bahasa Melayu Tahun 3 (Muka Surat ${bukuTeksInfo.mukaSurat})
- Lembaran kerja berkaitan ${bukuTeksInfo.tema}
- Bahan bantu visual (gambar, kad imbasan)

📊 **PENILAIAN:**
- Pemerhatian guru semasa aktiviti praktikal
- Hasil kerja bertulis murid
- Penyertaan dalam perbincangan kumpulan

💡 **KBAT (Kemahiran Berfikir Aras Tinggi):**
- Menganalisis maklumat dari buku teks
- Menghubungkait dengan pengalaman harian
- Mencipta idea kreatif berdasarkan tema

🌟 **NILAI MURNI:**
- Kerjasama dalam kumpulan
- Menghargai warisan bahasa
- Bertanggungjawab terhadap pembelajaran

📝 **CATATAN GURU:**
RPH ini dihasilkan secara automatik dengan integrasi penuh Buku Teks Bahasa Melayu Tahun 3.
Pastikan semua aktiviti merujuk langsung kepada muka surat yang dinyatakan.
  `;
};