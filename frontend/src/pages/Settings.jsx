export default function Settings() {
  return (
    <div style={{ padding: '20px', marginTop: '20px', borderTop: '2px solid #eee' }}>
      <h2>Settings & Profile</h2>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
        (Manage user preferences, notifications, and system configurations)
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
        <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', border: '1px solid #ccc' }}>
          <h4 style={{ margin: '0 0 10px 0' }}>Profile Information</h4>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>Name:</strong> Admin User</p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>Role:</strong> System Administrator</p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>Email:</strong> admin@assetflow.com</p>
        </div>

        <div>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px', fontSize: '14px' }}>System Theme</label>
          <select style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
            <option>System Default</option>
            <option>Light Mode</option>
            <option>Dark Mode</option>
          </select>
        </div>

        <div>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px', fontSize: '14px' }}>Alert Preferences</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '5px' }}>
            <input type="checkbox" id="emailNotif" defaultChecked />
            <label htmlFor="emailNotif" style={{ fontSize: '14px' }}>Enable email notifications for transfer requests</label>
          </div>
        </div>

        <button style={{ padding: '12px', backgroundColor: '#1e1e1e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>
          Save Preferences
        </button>
      </div>
    </div>
  );
}