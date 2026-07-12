import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  // Hides the navbar on the login screen
  if (location.pathname === '/login' || location.pathname === '/') return null;

  return (
    <AppBar position="static" sx={{ mb: 4, bgcolor: '#1e1e1e' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          AssetFlow
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/org-setup">Org Setup</Button>
          <Button color="inherit" component={Link} to="/directory">Directory</Button>
          <Button color="inherit" component={Link} to="/maintenance">Maintenance</Button>
          <Button color="inherit" component={Link} to="/settings">Settings</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}