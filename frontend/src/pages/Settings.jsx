import { Container, Paper, Typography, Box, Avatar, Divider, Switch, FormControlLabel, Button } from '@mui/material';

export default function Settings() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>Settings & Profile</Typography>
      
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 2 }}>
        {/* Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
          <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: '2rem' }}>AU</Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Admin User</Typography>
            <Typography variant="body2" color="textSecondary">System Administrator</Typography>
            <Typography variant="body2" color="primary">admin@assetflow.com</Typography>
          </Box>
        </Box>
        
        <Divider sx={{ mb: 4 }} />

        {/* Preferences Section */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>System Preferences</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <FormControlLabel control={<Switch defaultChecked />} label="Email alerts for transfers" />
          <FormControlLabel control={<Switch />} label="Weekly auto-audit reports" />
        </Box>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" size="large" sx={{ px: 4 }}>SAVE PREFERENCES</Button>
        </Box>
      </Paper>
    </Container>
  );
}