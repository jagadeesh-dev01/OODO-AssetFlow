import { Container, Paper, Typography, TextField, Button, MenuItem, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Login() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '80vh' 
    }}>
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ 
          p: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          borderRadius: 3 
        }}>
          <Box sx={{ 
            bgcolor: 'primary.main', 
            p: 1.5, 
            borderRadius: '50%', 
            mb: 2, 
            color: 'white',
            display: 'flex'
          }}>
            <LockOutlinedIcon />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
            AssetFlow Login
          </Typography>
          <TextField fullWidth label="Email Address" margin="normal" variant="outlined" />
          <TextField fullWidth label="Password" type="password" margin="normal" variant="outlined" />
          <TextField select fullWidth label="Role" defaultValue="Employee" margin="normal" variant="outlined">
            <MenuItem value="Employee">Employee</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </TextField>
          <Button fullWidth variant="contained" size="large" sx={{ mt: 3, py: 1.5, fontWeight: 'bold' }}>
            SIGN IN
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}