import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  AlertTitle,
  Divider
} from '@mui/material';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';

export default function AssetAllocation() {
  const [assignee, setAssignee] = useState('');

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Asset Allocation & Transfer
      </Typography>
      
      <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        {/* MUI Alert Block for the Warning */}
        <Alert severity="error" sx={{ borderRadius: 0, px: 3, py: 1.5 }}>
          <AlertTitle sx={{ fontWeight: 'bold' }}>Double-Allocation Warning</AlertTitle>
          Asset <strong>AF-0114 (Dell Laptop)</strong> is currently assigned to <strong>Priya Shah</strong>. Reallocating will initiate a transfer request.
        </Alert>
        
        <Box component="form" sx={{ p: 4 }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
            New Allocation Details
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="assignee-label">New Assignee</InputLabel>
              <Select
                labelId="assignee-label"
                value={assignee}
                label="New Assignee"
                onChange={(e) => setAssignee(e.target.value)}
              >
                <MenuItem value="Rohan Sharma">Rohan Sharma</MenuItem>
                <MenuItem value="Aisha Khan">Aisha Khan</MenuItem>
                <MenuItem value="Engineering Dept">Engineering Dept (Location)</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Transfer Reason / Notes"
              multiline
              rows={3}
              placeholder="E.g., Department change, hardware refresh..."
            />
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="outlined" color="inherit">
              Cancel
            </Button>
            <Button 
              variant="contained" 
              color="primary"
              startIcon={<AssignmentReturnIcon />}
              sx={{ fontWeight: 'bold' }}
            >
              Initiate Transfer
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}