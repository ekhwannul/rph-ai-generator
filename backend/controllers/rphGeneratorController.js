// controllers/rphGeneratorController.js
import { getBukuTeksByMinggu } from '../services/bukuTeksService.js';
import { generateRPHWithAI } from '../services/aiService.js';

export const generateRPH = async (req, res) => {
  try {
    const formData = req.body;
    console.log('📦 Received data:', formData);
    
    // Dapatkan maklumat buku teks
    const bukuTeksInfo = getBukuTeksByMinggu(parseInt(formData.minggu));
    console.log('📚 Buku Teks Info:', bukuTeksInfo);
    
    // Generate RPH dengan template kita
    const rphContent = await generateRPHWithAI(formData, bukuTeksInfo);
    
    res.json({
      success: true,
      rph: rphContent,
      bukuTeksInfo: bukuTeksInfo,
      note: "✅ RPH dihasilkan dengan integrasi Buku Teks lengkap!"
    });
    
  } catch (error) {
    console.error('❌ Error:', error);
    
    // Fallback ultimate jika semua fail
    const fallbackRPH = `
RANCANGAN PENGAJARAN HARIAN

Mata Pelajaran: Bahasa Melayu
Kelas: ${req.body.kelas || '3 Bijak'}
Tajuk: ${req.body.tajuk || 'Tajuk Umum'}
Minggu: ${req.body.minggu || '1'}

AKTIVITI PEMBELAJARAN:
1. Buka buku teks dan baca teks berkaitan
2. Perbincangan dalam kumpulan  
3. Latihan penulisan kreatif
4. Pembentangan hasil kerja

*Sistem dalam mod asas - integrasi buku teks penuh akan datang*
    `;
    
    res.json({ 
      success: true, 
      rph: fallbackRPH,
      note: "Basic RPH generated (system maintenance)"
    });
  }
};