import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // This will integrate with your teammate's authentication API later
    console.log("Login attempted with:", email);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>AssetFlow - Login</h2>
      
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ fontWeight: 'bold' }}>Email</label>
          <input 
            type="email" 
            placeholder="name@company.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box' }}
          />
        </div>
        
        <div>
          <label style={{ fontWeight: 'bold' }}>Password</label>
          <input 
            type="password" 
            placeholder="**********" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box' }}
          />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <a href="#" style={{ fontSize: '14px', color: '#0066cc', textDecoration: 'none' }}>Forgot password?</a>
        </div>
        
        <button type="submit" style={{ padding: '12px', backgroundColor: '#1e1e1e', color: 'white', cursor: 'pointer', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
          Sign In
        </button>
      </form>
      
      <div style={{ marginTop: '25px', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '15px' }}>
        <p style={{ fontSize: '14px' }}>
          New here? <a href="#" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 'bold' }}>Create Account</a>
        </p>
        <p style={{ color: '#666', fontSize: '12px', marginTop: '5px' }}>
          Sign up creates an employee account.<br />Admin roles assigned later.
        </p>
      </div>
    </div>
  );
}