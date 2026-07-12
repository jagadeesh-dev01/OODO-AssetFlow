import { useState } from 'react';

export default function OrganizationSetup() {
  const [activeTab, setActiveTab] = useState('Departments');

  // Hardcoded initial state to match the design document
  const departments = [
    { id: 1, name: 'Engineering', head: 'aditi rao', parent: '--', status: 'Active' },
    { id: 2, name: 'Facilities', head: 'rohan mehta', parent: '--', status: 'Active' },
    { id: 3, name: 'Field ops (east)', head: 'sana iqbal', parent: 'Field Ops', status: 'Inactive' },
  ];

  return (
    <div style={{ padding: '20px', marginTop: '20px', borderTop: '2px solid #eee' }}>
      <h2>Organization setup (Admin only)</h2>
      
      <div style={{ display: 'flex', gap: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
        {['Employee', 'Departments', 'Categories'].map(tab => (
          <span 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            style={{ 
              cursor: 'pointer', 
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              textDecoration: activeTab === tab ? 'underline' : 'none'
            }}
          >
            {tab}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3>{activeTab}</h3>
        <button style={{ padding: '8px', cursor: 'pointer' }}>+ Add</button>
      </div>

      {activeTab === 'Departments' && (
        <>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
                <th style={{ padding: '10px' }}>Department</th>
                <th>Head</th>
                <th>Parent Dept</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept) => (
                <tr key={dept.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px' }}>{dept.name}</td>
                  <td>{dept.head}</td>
                  <td>{dept.parent}</td>
                  <td>
                    <span style={{ 
                      color: dept.status === 'Active' ? 'green' : 'red',
                      backgroundColor: dept.status === 'Active' ? '#e6ffed' : '#ffe3e3',
                      padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
                    }}>
                      {dept.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: '12px', color: '#666', marginTop: '15px' }}>
            Editing a department here also drives the picklist in Screen 4 & 5
          </p>
        </>
      )}
    </div>
  );
}