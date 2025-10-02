// components/RPHGenerator.jsx
import React, { useState } from 'react';
import { generateRPH } from '../services/apiService';

// ✅ Function untuk dapatkan info buku teks (sementara di frontend)
const getBukuTeksByMinggu = (minggu) => {
  const mapping = {
    13: { tema: "Kebudayaan, Kesenian dan Estetika", unit: "Unit 13: Kekalkan Warisan Kita", mukaSurat: "8-12" },
    14: { tema: "Kebudayaan, Kesenian dan Estetika", unit: "Unit 14: Kenali Kesenian Kita", mukaSurat: "13-18" },
    // ... tambah mapping lain mengikut keperluan
  };
  return mapping[minggu] || { tema: "Umum", unit: "Aktiviti Umum", mukaSurat: "-" };
};

const RPHGenerator = () => {
  const [formData, setFormData] = useState({
    minggu: '',
    kelas: '',
    tajuk: '',
    standardPembelajaran: ''
  });
  const [rphResult, setRphResult] = useState(null);
  const [bukuTeksInfo, setBukuTeksInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Handle ketika minggu berubah
  const handleMingguChange = (minggu) => {
    setFormData(prev => ({ ...prev, minggu }));
    const info = getBukuTeksByMinggu(parseInt(minggu));
    setBukuTeksInfo(info);
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await generateRPH(formData);
      setRphResult(result);
    } catch (error) {
      console.error('Error generating RPH:', error);
      alert('Error generating RPH: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rph-generator">
      <h2>🧠 RPH AI Generator dengan Buku Teks</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Minggu:</label>
          <select 
            value={formData.minggu} 
            onChange={(e) => handleMingguChange(e.target.value)}
            required
          >
            <option value="">Pilih Minggu</option>
            {Array.from({length: 30}, (_, i) => i + 1).map(week => (
              <option key={week} value={week}>Minggu {week}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Kelas:</label>
          <input 
            type="text" 
            value={formData.kelas}
            onChange={(e) => setFormData(prev => ({ ...prev, kelas: e.target.value }))}
            placeholder="Contoh: 3 Bijak"
            required
          />
        </div>

        <div className="form-group">
          <label>Tajuk:</label>
          <input 
            type="text" 
            value={formData.tajuk}
            onChange={(e) => setFormData(prev => ({ ...prev, tajuk: e.target.value }))}
            placeholder="Contoh: Warisan Kebudayaan Kita"
            required
          />
        </div>

        <div className="form-group">
          <label>Standard Pembelajaran:</label>
          <input 
            type="text" 
            value={formData.standardPembelajaran}
            onChange={(e) => setFormData(prev => ({ ...prev, standardPembelajaran: e.target.value }))}
            placeholder="Contoh: 1.1.3, 2.2.1, 3.1.2"
            required
          />
        </div>

        {/* ✅ DISPLAY INFO BUKU TEKS */}
        {bukuTeksInfo && (
          <div className="buku-teks-info" style={{
            border: '2px solid #4CAF50',
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            marginBottom: '20px'
          }}>
            <h4>📚 Rujukan Buku Teks</h4>
            <p><strong>Tema:</strong> {bukuTeksInfo.tema}</p>
            <p><strong>Unit:</strong> {bukuTeksInfo.unit}</p>
            <p><strong>Muka Surat:</strong> {bukuTeksInfo.mukaSurat}</p>
            {bukuTeksInfo.aktiviti && (
              <p><strong>Aktiviti:</strong> {bukuTeksInfo.aktiviti.join(', ')}</p>
            )}
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? '🔄 Menghasilkan RPH...' : '🚀 Generate RPH'}
        </button>
      </form>

      {/* ✅ DISPLAY RPH RESULT */}
      {rphResult && (
        <div className="rph-result">
          <h3>📄 RPH Dihasilkan</h3>
          <div className="rph-content">
            <pre>{rphResult.rph}</pre>
          </div>
          
          {/* Display buku teks info dari backend */}
          {rphResult.bukuTeksInfo && (
            <div className="buku-teks-result">
              <h4>📖 Rujukan Buku Teks Digunakan:</h4>
              <p><strong>Tema:</strong> {rphResult.bukuTeksInfo.tema}</p>
              <p><strong>Unit:</strong> {rphResult.bukuTeksInfo.unit}</p>
              <p><strong>Muka Surat:</strong> {rphResult.bukuTeksInfo.mukaSurat}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RPHGenerator;