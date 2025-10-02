import { useState, useEffect } from 'react';
import './RPHForm.css';

const RPHForm = ({ onGenerate, isLoading }) => {
  const [formData, setFormData] = useState({
    namaGuru: '',
    namaKelas: '',
    waktu: '',
    tarikh: '',
    minggu: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <div className="rph-form-container">
      <h2>Maklumat Asas RPH</h2>
      <form onSubmit={handleSubmit} className="rph-form">
        <div className="form-row">
          <div className="form-group">
            <label>Nama Guru:</label>
            <input
              type="text"
              name="namaGuru"
              value={formData.namaGuru}
              onChange={handleChange}
              required
              placeholder="Cikgu Ahmad"
            />
          </div>
          <div className="form-group">
            <label>Nama Kelas:</label>
            <input
              type="text"
              name="namaKelas"
              value={formData.namaKelas}
              onChange={handleChange}
              required
              placeholder="3 Bijak"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Waktu:</label>
            <input
              type="text"
              name="waktu"
              value={formData.waktu}
              onChange={handleChange}
              required
              placeholder="8:00-9:00 pagi"
            />
          </div>
          <div className="form-group">
            <label>Tarikh:</label>
            <input
              type="date"
              name="tarikh"
              value={formData.tarikh}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Minggu Pengajaran:</label>
          <select
            name="minggu"
            value={formData.minggu}
            onChange={handleChange}
            required
          >
            <option value="">Pilih Minggu</option>
            {Array.from({ length: 29 }, (_, i) => i + 2).map(week => (
              <option key={week} value={week}>Minggu {week}</option>
            ))}
          </select>
        </div>

        <button 
          type="submit" 
          className="generate-btn"
          disabled={isLoading}
        >
          {isLoading ? 'Menjana RPH...' : 'Jana RPH AI'}
        </button>
      </form>
    </div>
  );
};

export default RPHForm;