import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper
} from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Dashboard() {
  const stats = [
    { title: 'Total Assets', count: 124, color: '#1976d2', icon: <InventoryIcon sx={{ fontSize: 40, color: '#1976d2' }} /> },
    { title: 'In Maintenance', count: 8, color: '#ed6c02', icon: <WarningAmberIcon sx={{ fontSize: 40, color: '#ed6c02' }} /> },
    { title: 'Available', count: 86, color: '#2e7d32', icon: <CheckCircleIcon sx={{ fontSize: 40, color: '#2e7d32' }} /> }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Paper elevation={0} sx={{ p: 3, backgroundColor: 'transparent' }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: 'white' }}>
          Overview Dashboard
        </Typography>
        
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card elevation={4} sx={{ borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 3 }}>
                  <Box>
                    <Typography color="text.secondary" variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {stat.title}
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', color: stat.color }}>
                      {stat.count}
                    </Typography>
                  </Box>
                  <Box sx={{ backgroundColor: `${stat.color}15`, p: 1.5, borderRadius: '50%', display: 'flex' }}>
                    {stat.icon}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}