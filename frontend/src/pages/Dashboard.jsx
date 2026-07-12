import { useState, useEffect } from 'react';
import { request } from '../services/api';

export default function Dashboard() {
  const [kpis, setKpis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    request('/dashboard/kpis')
      .then((res) => {
        if (res.success) setKpis(res.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading dashboard analytics...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>AssetFlow Analytics Dashboard</h2>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Total Assets</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{kpis?.totalAssets || 0}</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Allocated</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>{kpis?.allocatedAssets || 0}</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Under Maintenance</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'orange' }}>{kpis?.underMaintenance || 0}</p>
        </div>
      </div>
    </div>
  );
}