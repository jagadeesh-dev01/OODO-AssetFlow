export default function Reports() {
  return (
    <div style={{ padding: '20px', marginTop: '20px', borderTop: '2px solid #eee' }}>
      <h2>Reports & Analytics</h2>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
        (Auto-generated insights on asset utilization and depreciation)
      </p>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
          <h3 style={{ margin: '0 0 15px 0', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Asset Status Breakdown</h3>
          <p style={{ margin: '5px 0' }}><strong>Active:</strong> 75%</p>
          <p style={{ margin: '5px 0' }}><strong>In Maintenance:</strong> 15%</p>
          <p style={{ margin: '5px 0' }}><strong>Retired:</strong> 10%</p>
        </div>
        
        <div style={{ flex: '1 1 300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
          <h3 style={{ margin: '0 0 15px 0', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Depreciation Overview</h3>
          <p style={{ margin: '5px 0' }}><strong>Total Value Lost (YTD):</strong> $12,450</p>
          <p style={{ margin: '5px 0' }}><strong>Highest Depreciation Category:</strong> Laptops</p>
          <p style={{ margin: '5px 0' }}><strong>Assets Needing Refresh:</strong> 14</p>
        </div>
      </div>
    </div>
  );
}