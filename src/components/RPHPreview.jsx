import './RPHPreview.css';

const RPHPreview = ({ rphData }) => {
  const { 
    namaGuru, namaKelas, waktu, tarikh, minggu,
    tema, unit, tajuk, standardKandungan, standardPembelajaran,
    langkahPengajaran 
  } = rphData;

  // Simple export handler - alert sahaja dulu
  const handleExportDOCX = () => {
    alert('📥 Export DOCX feature akan datang soon!');
  };

  const handlePrint = () => {
    alert('🖨️ Print feature akan datang soon!');
  };

  return (
    <div className="rph-preview">
      <h2>RPH Dijana</h2>
      
      <div className="preview-section">
        <h3>Maklumat Asas</h3>
        <div className="info-grid">
          <div><strong>Nama Guru:</strong> {namaGuru}</div>
          <div><strong>Kelas:</strong> {namaKelas}</div>
          <div><strong>Waktu:</strong> {waktu}</div>
          <div><strong>Tarikh:</strong> {tarikh}</div>
          <div><strong>Minggu:</strong> {minggu}</div>
        </div>
      </div>

      <div className="preview-section">
        <h3>Maklumat RPT</h3>
        <div className="rpt-info">
          <div><strong>Tema:</strong> {tema}</div>
          <div><strong>Unit:</strong> {unit}</div>
          <div><strong>Tajuk:</strong> {tajuk}</div>
          <div><strong>Standard Kandungan:</strong> {standardKandungan}</div>
          <div><strong>Standard Pembelajaran:</strong> {standardPembelajaran}</div>
        </div>
      </div>

      <div className="preview-section">
        <h3>Langkah Pengajaran</h3>
        
        <div className="teaching-steps">
          <div className="step-category">
            <h4>📝 Set Induksi (10 minit)</h4>
            {langkahPengajaran.setInduksi?.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-header">
                  <span className="step-number">Langkah {step.langkah}</span>
                  <span className="step-time">{step.masa}</span>
                </div>
                <p><strong>Aktiviti:</strong> {step.aktiviti}</p>
                <p className="step-notes">📌 {step.catatan}</p>
              </div>
            ))}
          </div>

          <div className="step-category">
            <h4>📚 Aktiviti Buku Teks (25 minit)</h4>
            {langkahPengajaran.aktivitiBukuTeks?.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-header">
                  <span className="step-number">Langkah {step.langkah}</span>
                  <span className="step-time">{step.masa}</span>
                </div>
                <p><strong>Aktiviti:</strong> {step.aktiviti}</p>
                <p className="step-notes">🎯 {step.catatan}</p>
              </div>
            ))}
          </div>

          <div className="step-category">
            <h4>🔍 Pengukuhan & Refleksi (15 minit)</h4>
            {langkahPengajaran.pengukuhanRefleksi?.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-header">
                  <span className="step-number">Langkah {step.langkah}</span>
                  <span className="step-time">{step.masa}</span>
                </div>
                <p><strong>Aktiviti:</strong> {step.aktiviti}</p>
                <p className="step-notes">✨ {step.catatan}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="preview-actions">
        <button className="export-btn" onClick={handleExportDOCX}>
          📥 Export DOCX
        </button>
        <button className="print-btn" onClick={handlePrint}>
          🖨️ Print RPH
        </button>
      </div>
    </div>
  );
};

export default RPHPreview;