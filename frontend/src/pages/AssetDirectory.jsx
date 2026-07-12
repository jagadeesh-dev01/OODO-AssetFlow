import { useState, useEffect } from 'react';
import { assetService } from '../services/assetService';

export default function AssetDirectory() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    assetService.getAllAssets()
      .then((res) => {
        if (res.success) setAssets(res.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: '20px', marginTop: '20px', borderTop: '2px solid #eee' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Asset Directory</h2>
        <button style={{ padding: '8px', cursor: 'pointer' }}>+ Register Asset</button>
      </div>
      
      <input 
        type="text" 
        placeholder="Search by tag, serial, or QR code.." 
        style={{ padding: '8px', marginBottom: '20px', width: '300px' }} 
      />
      
      {loading ? <p>Loading assets...</p> : error ? <p style={{ color: 'red' }}>Error: {error}</p> : (
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
              <th style={{ padding: '10px' }}>Tag</th>
              <th>Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Department</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {assets.length === 0 ? (
              <tr><td colSpan="6" style={{ padding: '10px' }}>No assets found.</td></tr>
            ) : (
              assets.map((asset) => (
                <tr key={asset._id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px' }}>{asset.tag || 'N/A'}</td>
                  <td>{asset.name}</td>
                  <td>{asset.type || 'N/A'}</td>
                  <td>{asset.status || 'Active'}</td>
                  <td>{asset.department || 'N/A'}</td>
                  <td>{asset.location || 'N/A'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}