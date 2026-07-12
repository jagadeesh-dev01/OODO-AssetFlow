import { useState } from 'react';
import { assetService } from '../services/assetService';

export default function AssetAllocation() {
  // Mock data based on the design document's "double-allocation block"
  const [asset] = useState({
    id: 'AF-0114',
    name: 'Dell laptop',
    currentOwner: 'Priya Shah',
    department: 'Engineering'
  });

  const [transferData, setTransferData] = useState({ to: '', reason: '' });
  const [message, setMessage] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();
    try {
      // Matches: POST /api/assets/:id/allocate
      const res = await assetService.allocateAsset(asset.id, transferData);
      if (res.success) {
        setMessage('Transfer request submitted successfully!');
        setTransferData({ to: '', reason: '' });
      }
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: '20px', marginTop: '20px', borderTop: '2px solid #eee' }}>
      <h2>Asset Allocation & Transfer</h2>
      
      <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px', marginBottom: '20px' }}>
        <span style={{ color: '#666', fontSize: '12px' }}>Asset</span>
        <p style={{ margin: '5px 0 0 0', fontWeight: 'bold' }}>{asset.id} - {asset.name}</p>
      </div>

      <div style={{ backgroundColor: '#ffc9c9', border: '1px solid #e03131', padding: '15px', borderRadius: '4px', marginBottom: '20px' }}>
        <p style={{ color: '#e03131', margin: 0, fontWeight: 'bold', fontSize: '14px' }}>
          Already Allocated to {asset.currentOwner} ({asset.department})<br/>
          Direct re-allocation is blocked - submit a transfer request below
        </p>
      </div>

      <h3>Transfer Request</h3>
      <form onSubmit={handleTransfer} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', marginBottom: '30px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', color: '#666' }}>From</label>
          <input type="text" value={asset.currentOwner} disabled style={{ width: '100%', padding: '8px', backgroundColor: '#e9ecef', border: '1px solid #ccc' }} />
        </div>
        
        <div>
          <label style={{ display: 'block', fontSize: '12px', color: '#666' }}>To</label>
          <select 
            value={transferData.to} 
            onChange={(e) => setTransferData({ ...transferData, to: e.target.value })}
            required
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="">Select Employee....</option>
            <option value="Rohan Mehta">Rohan Mehta</option>
            <option value="Sana Iqbal">Sana Iqbal</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '12px', color: '#666' }}>Reason</label>
          <input 
            type="text" 
            value={transferData.reason} 
            onChange={(e) => setTransferData({ ...transferData, reason: e.target.value })}
            required
            style={{ width: '100%', padding: '8px' }} 
          />
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#b2f2bb', border: '1px solid #2b8a3e', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Submit Request
        </button>
      </form>
      {message && <p style={{ fontWeight: 'bold' }}>{message}</p>}

      <h3>Allocation history</h3>
      <ul style={{ listStyleType: 'none', padding: 0, fontSize: '14px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
        <li style={{ padding: '8px 0', borderBottom: '1px solid #f1f3f5' }}>Mar 12 - Allocated to Priya shah - Engineering</li>
        <li style={{ padding: '8px 0', borderBottom: '1px solid #f1f3f5' }}>Jan 04 - Returned by Arjun Nair - condition: good</li>
      </ul>
    </div>
  );
}