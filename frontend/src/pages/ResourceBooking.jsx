import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  Button, 
  Alert, 
  AlertTitle, 
  Chip, 
  Divider 
} from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import WarningIcon from '@mui/icons-material/Warning';

export default function ResourceBooking() {
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Resource Booking
      </Typography>
      
      <Paper elevation={3} sx={{ borderRadius: 2, p: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
            Selected Resource
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1 }}>
            Conference Room B2 — Tue, 7 Jul
          </Typography>
        </Box>
        
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
          Available Time Slots
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 4 }}>
          {timeSlots.map((time) => (
            <Chip 
              key={time} 
              label={time} 
              clickable 
              color="primary" 
              variant="outlined" 
              sx={{ fontWeight: 'bold', px: 1 }} 
            />
          ))}
        </Box>

        {/* Existing Booking Alert */}
        <Alert severity="info" sx={{ mb: 2, borderRadius: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Currently Booked: Procurement Team (9:00 AM - 10:00 AM)
          </Typography>
        </Alert>

        {/* Conflict Warning Alert */}
        <Alert severity="error" icon={<WarningIcon />} sx={{ mb: 4, borderRadius: 2 }}>
          <AlertTitle sx={{ fontWeight: 'bold' }}>Scheduling Conflict Detected</AlertTitle>
          The requested time slot <strong>(9:30 AM - 10:30 AM)</strong> overlaps with an existing reservation. Please select a different time.
        </Alert>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            variant="contained" 
            disabled
            startIcon={<EventAvailableIcon />}
            sx={{ fontWeight: 'bold', px: 3, py: 1 }}
          >
            Confirm Booking
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}