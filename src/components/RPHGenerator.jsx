import { useState } from 'react';
import RPHForm from './RPHForm';
import RPHPreview from './RPHPreview';
import LoadingSpinner from './LoadingSpinner';
import SuccessMessage from './SuccessMessage';
import { getRPTDataByWeek } from './services/rptDataService';
import { generateRPHWithAI } from './services/aiService';
import './RPHGenerator.css';

const RPHGenerator = () => {
  const [rphData, setRphData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleGenerateRPH = async (formData) => {
    setIsLoading(true);
    setShowSuccess(false);

    try {
      // Dapatkan RPT data berdasarkan minggu
      const rptData = getRPTDataByWeek(parseInt(formData.minggu));
      
      if (!rptData) {
        alert('Data RPT tidak dijumpai untuk minggu ini');
        return;
      }

      // Enhanced AI Prompt dengan structure baru
      const aiPrompt = `
        BUAT RANCANGAN PENGAJARAN HARIAN (RPH) BAHASA MELAYU TAHUN 3

        MAKLUMAT ASAS:
        - Nama Guru: ${formData.namaGuru}
        - Kelas: ${formData.namaKelas} 
        - Waktu: ${formData.waktu}
        - Tarikh: ${formData.tarikh}
        - Minggu: ${formData.minggu}

        DATA RPT:
        - Tema: ${rptData.tema}
        - Unit: ${rptData.unit}
        - Tajuk: ${rptData.tajuk}
        - Standard Kandungan: ${rptData.standardKandungan}
        - Standard Pembelajaran: ${rptData.standardPembelajaran}

        FORMAT LANGKAH PENGAJARAN YANG DIPERLUKAN:

        LANGKAH 1-2: SET INDUKSI (5-10 minit)
        - Aktiviti kreatif untuk menarik perhatian
        - Kaitkan dengan pengalaman harian murid
        - Integrasikan elemen PAK21

        LANGKAH 3-4: AKTIVITI BUKU TEKS (20-25 minit)  
        - Berdasarkan buku teks Bahasa Melayu Tahun 3
        - Fokus pada Standard Pembelajaran: ${rptData.standardPembelajaran}
        - Integrasikan KBAT (Kemahiran Berfikir Aras Tinggi)
        - Gunakan pendekatan PAK21

        LANGKAH 5-6: PENGUKUHAN & REFLEKSI (10-15 minit)
        - Aktiviti pengukuhan kemahiran
        - Refleksi pembelajaran
        - Penilaian formatif
        - PAK21 dalam refleksi

        Sila hasilkan RPH yang lengkap mengikut format di atas.
      `;

      const generatedRPH = await generateRPHWithAI(aiPrompt);
      
      setRphData({
        ...formData,
        ...rptData,
        langkahPengajaran: generatedRPH
      });
      
      setShowSuccess(true);
      
    } catch (error) {
      console.error('Error generating RPH:', error);
      alert('Error menjana RPH. Sila cuba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rph-generator">
      <div className="generator-container">
        {/* LAYOUT ASAL: Kiri Form, Kanan Preview */}
        <div className="layout-container">
          {/* BAHAGIAN KIRI - FORM */}
          <div className="left-panel">
            <RPHForm onGenerate={handleGenerateRPH} isLoading={isLoading} />
            
            {isLoading && <LoadingSpinner />}
            
            {showSuccess && (
              <SuccessMessage 
                message="RPH berhasil dijana!" 
                onClose={() => setShowSuccess(false)}
              />
            )}
          </div>

          {/* BAHAGIAN KANAN - PREVIEW */}
          <div className="right-panel">
            {rphData && !isLoading && (
              <RPHPreview rphData={rphData} />
            )}
            
            {/* Placeholder jika tiada RPH lagi */}
            {!rphData && (
              <div className="preview-placeholder">
                <h3>📋 Preview RPH</h3>
                <p>Isi borang di sebelah kiri dan klik "Jana RPH AI" untuk melihat preview RPH di sini.</p>
                <div className="placeholder-features">
                  <div>✅ Auto-generate dari AI</div>
                  <div>✅ Structure lengkap</div>
                  <div>✅ PAK21 & KBAT integrated</div>
                  <div>✅ Export DOCX ready</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RPHGenerator;