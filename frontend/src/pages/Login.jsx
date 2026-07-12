import { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { loginUser } from '../services/api';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'Employee' });
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // The loginUser function uses the axios instance configured with baseURL: 'http://localhost:5000/api'
      const response = await loginUser(formData);
      
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/dashboard';
      }
    } catch (err) {
      console.error("Login Error Details:", err.response?.data || err.message);
      setError('Login failed. Please check your credentials and ensure the server is running.');
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ bgcolor: 'primary.main', p: 1.5, borderRadius: '50%', mb: 2, color: 'white' }}>
              <LockOutlinedIcon />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>AssetFlow Login</Typography>
          </Box>
          
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          
          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Email Address" name="email" margin="normal" onChange={handleChange} required />
            <TextField fullWidth label="Password" name="password" type="password" margin="normal" onChange={handleChange} required />
            <TextField 
                select 
                fullWidth 
                label="Role" 
                name="role" 
                value={formData.role} 
                margin="normal" 
                onChange={handleChange}
                SelectProps={{ native: true }}
            >
              <option value="Employee">Employee</option>
              <option value="Admin">Admin</option>
              <option value="Asset Manager">Asset Manager</option>
              <option value="Department Head">Department Head</option>
            </TextField>
            <Button fullWidth type="submit" variant="contained" size="large" sx={{ mt: 3, py: 1.5, fontWeight: 'bold' }}>
              SIGN IN
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
