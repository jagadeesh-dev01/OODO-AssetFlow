import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  Avatar, 
  Divider, 
  Switch, 
  FormControlLabel, 
  Button,
  TextField,
  Grid
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

export default function Settings() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Settings & Profile
      </Typography>
      
      <Paper elevation={3} sx={{ borderRadius: 2, p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
          <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: 32, fontWeight: 'bold' }}>
            AU
          </Avatar>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Admin User</Typography>
            <Typography variant="body1" color="text.secondary">System Administrator</Typography>
            <Typography variant="body2" color="text.secondary">admin@assetflow.com</Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
          System Preferences
        </Typography>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="System Theme"
              defaultValue="System Default"
              SelectProps={{ native: true }}
            >
              <option>System Default</option>
              <option>Light Mode</option>
              <option>Dark Mode</option>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <FormControlLabel 
                control={<Switch defaultChecked color="primary" />} 
                label="Email alerts for transfers" 
              />
              <FormControlLabel 
                control={<Switch color="primary" />} 
                label="Weekly auto-audit reports" 
              />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 4 }} />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<SaveIcon />}
            sx={{ fontWeight: 'bold', px: 4 }}
          >
            Save Preferences
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}