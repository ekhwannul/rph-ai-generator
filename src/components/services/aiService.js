// services/aiService.js
const createRPHPrompt = (formData, bukuTeksInfo) => {
  return `
ANDA ADALAH PAKAR PENDIDIKAN BAHASA MELAYU TAHUN 3. HASILKAN RANCANGAN PENGAJARAN HARIAN (RPH) YANG SPESIFIK DAN TERPERINCI BERDASARKAN BUKU TEKS BAHASA MELAYU TAHUN 3.

**MAKLUMAT ASAS RPH:**
- Mata Pelajaran: Bahasa Melayu
- Kelas: Tahun ${formData.kelas}
- Tajuk: ${formData.tajuk}
- Standard Pembelajaran: ${formData.standardPembelajaran}
- Minggu: ${formData.minggu}

**INTEGRASI BUKU TEKS:**
- TEMA: ${bukuTeksInfo.tema}
- UNIT: ${bukuTeksInfo.unit}
- MUKA SURAT: ${bukuTeksInfo.mukaSurat}
- AKTIVITI BUKU TEKS: ${bukuTeksInfo.aktiviti.join(', ')}

**ARAHAN KHUSUS:**
1. RPH HARUS MERUJUK LANGSUNG KEPADA BUKU TEKS
2. GUNAKAN TERMINOLOGI SPESIFIK DARI BUKU TEKS
3. SERTAKAN MUKA SURAT SPESIFIK UNTUK SETIAP AKTIVITI
4. INTEGRASIKAN AKTIVITI DARI BUKU TEKS KE DALAM RPH

**CONTOH FORMAT OUTPUT:**
"Murid MEMBUKA BUKU TEKS MUKA SURAT ${bukuTeksInfo.mukaSurat} dan MELAKSANAKAN [AKTIVITI SPESIFIK] seperti yang terkandung dalam unit ${bukuTeksInfo.unit}"

HASILKAN RPH LENGKAP DENGAN:
1. Objektif Pembelajaran yang spesifik
2. Aktiviti PDPC yang terperinci dengan rujukan muka surat
3. Bahan Bantu Mengajar yang sesuai
4. Penilaian Pembelajaran
5. KBAT dan EMK

HASILKAN RPH DALAM BAHASA MALAYSIA YANG STANDARD DAN PROFESIONAL:
`;
};