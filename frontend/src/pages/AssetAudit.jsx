export default function AssetAudit() {
  const auditItems = [
    { id: 'AF-0114', name: 'Dell laptop', expected: 'Engineering Dept', status: 'Verified' },
    { id: 'AF-0062', name: 'Projector', expected: 'Conference room B2', status: 'Missing' },
  ];

  return (
    <div style={{ padding: '20px', marginTop: '20px', borderTop: '2px solid #eee' }}>
      <h2>Asset Audit</h2>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
        (audit cycle, checklist, auto-generated discrepancy report)
      </p>

      <div style={{ backgroundColor: '#e1f5ee', padding: '15px', borderRadius: '4px', marginBottom: '20px', borderLeft: '4px solid #1e1e1e' }}>
        <h4 style={{ margin: '0 0 5px 0' }}>Q3 audit: Engineering dept - 1-15 jul</h4>
        <p style={{ margin: 0, fontSize: '14px' }}>Auditors: A. Rao, S. Iqbal</p>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
            <th style={{ padding: '10px' }}>Asset</th>
            <th>Expected location</th>
            <th>Verification Status</th>
          </tr>
        </thead>
        <tbody>
          {auditItems.map((item, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}><strong>{item.id}</strong> - {item.name}</td>
              <td>{item.expected}</td>
              <td>
                <span style={{
                  color: item.status === 'Verified' ? '#2b8a3e' : '#e03131',
                  backgroundColor: item.status === 'Verified' ? '#b2f2bb' : '#ffc9c9',
                  padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold'
                }}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}