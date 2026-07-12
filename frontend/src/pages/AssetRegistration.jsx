import { useState } from 'react';
import { assetService } from '../services/assetService';

export default function AssetRegistration() {
  const [formData, setFormData] = useState({ name: '', type: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Matches: POST /api/assets
      const res = await assetService.createAsset(formData);
      if (res.success) {
        setMessage('Asset registered successfully!');
        setFormData({ name: '', type: '' });
      }
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: '20px', marginTop: '20px', borderTop: '2px solid #eee' }}>
      <h2>Register New Asset</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input 
          type="text" 
          placeholder="Asset Name (e.g., MacBook Air)" 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          style={{ padding: '8px' }}
        />
        <input 
          type="text" 
          placeholder="Asset Type (e.g., Laptop)" 
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          required
          style={{ padding: '8px' }}
        />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>Register Asset</button>
      </form>
      {message && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{message}</p>}
    </div>
  );
}