import React from 'react';
import './SuccessMessage.css';

const SuccessMessage = ({ tajuk, onExport }) => {
  return (
    <div className="success-message">
      <div className="success-icon">✅</div>
      <h3>RPH Berjaya Dijana!</h3>
      <p>Rancangan Pengajaran Harian "<strong>{tajuk}</strong>" telah berjaya dihasilkan.</p>
      
      <div className="success-actions">
        <button className="export-success-btn" onClick={onExport}>
          📥 Export ke DOCX
        </button>
        <button className="print-btn" onClick={() => window.print()}>
          🖨️ Cetak RPH
        </button>
      </div>
      
      <div className="success-tips">
        <h4>Tips:</h4>
        <ul>
          <li>Semak dan edit RPH mengikut keperluan kelas</li>
          <li>Export ke DOCX untuk simpanan</li>
          <li>Gunakan template ini untuk RPH akan datang</li>
        </ul>
      </div>
    </div>
  );
};

export default SuccessMessage;