import { Container, Typography, Grid, Paper } from '@mui/material';

export default function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, px: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: '#333' }}>
        Overview Dashboard
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3, boxShadow: 2 }}>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 1 }}>Total Assets</Typography>
            <Typography variant="h2" sx={{ fontWeight: '800', color: '#1976d2' }}>124</Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3, boxShadow: 2 }}>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 1 }}>In Maintenance</Typography>
            <Typography variant="h2" sx={{ fontWeight: '800', color: '#d32f2f' }}>8</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3, boxShadow: 2 }}>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 1 }}>Available</Typography>
            <Typography variant="h2" sx={{ fontWeight: '800', color: '#2e7d32' }}>86</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}