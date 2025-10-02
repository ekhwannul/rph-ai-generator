// controllers/rphGeneratorController.js
import { getBukuTeksByMinggu } from '../services/bukuTeksService.js';
import { generateRPHWithAI } from '../services/aiService.js';

export const generateRPH = async (req, res) => {
  try {
    const formData = req.body;
    const { minggu, kelas, tajuk, standardPembelajaran } = formData;
    
    console.log('📦 Data diterima dari frontend:', formData);
    
    // ✅ Dapatkan maklumat buku teks berdasarkan minggu
    const bukuTeksInfo = getBukuTeksByMinggu(parseInt(minggu));
    console.log('📚 Info Buku Teks:', bukuTeksInfo);
    
    // ✅ Generate RPH dengan integrasi buku teks
    const rphContent = await generateRPHWithAI(formData, bukuTeksInfo);
    
    // ✅ Response dengan data lengkap
    res.json({
      success: true,
      rph: rphContent,
      bukuTeksInfo: {
        tema: bukuTeksInfo.tema,
        unit: bukuTeksInfo.unit,
        mukaSurat: bukuTeksInfo.mukaSurat,
        aktiviti: bukuTeksInfo.aktiviti
      },
      metadata: {
        minggu: minggu,
        tarikhGenerated: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('❌ Error dalam generateRPH:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      details: 'Server error dalam menghasilkan RPH'
    });
  }
};