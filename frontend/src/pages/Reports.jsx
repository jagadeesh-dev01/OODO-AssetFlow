import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box, 
  Divider,
  LinearProgress
} from '@mui/material';
import PieChartIcon from '@mui/icons-material/PieChart';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export default function Reports() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
        Reports & Analytics
      </Typography>
      
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Auto-generated insights on asset utilization and depreciation.
      </Typography>

      <Grid container spacing={4}>
        {/* Utilization Card */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ borderRadius: 2, height: '100%' }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <PieChartIcon color="primary" sx={{ fontSize: 32 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Asset Status Breakdown
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />
              
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Active</Typography>
                  <Typography variant="body2" color="text.secondary">75%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={75} sx={{ height: 8, borderRadius: 4, bgcolor: '#e3f2fd', '& .MuiLinearProgress-bar': { bgcolor: '#1976d2' } }} />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>In Maintenance</Typography>
                  <Typography variant="body2" color="text.secondary">15%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={15} sx={{ height: 8, borderRadius: 4, bgcolor: '#fff3e0', '& .MuiLinearProgress-bar': { bgcolor: '#ed6c02' } }} />
              </Box>

              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Retired</Typography>
                  <Typography variant="body2" color="text.secondary">10%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={10} sx={{ height: 8, borderRadius: 4, bgcolor: '#ffebee', '& .MuiLinearProgress-bar': { bgcolor: '#d32f2f' } }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Depreciation Card */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ borderRadius: 2, height: '100%' }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <TrendingDownIcon color="error" sx={{ fontSize: 32 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Depreciation Overview
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
                  <Typography variant="body2" color="text.secondary">Total Value Lost (YTD)</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#d32f2f' }}>$12,450</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
                  <Typography variant="body2" color="text.secondary">Highest Depreciation</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Laptops</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
                  <Typography variant="body2" color="text.secondary">Assets Needing Refresh</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#ed6c02' }}>14</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}