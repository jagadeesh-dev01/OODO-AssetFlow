import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function AssetRegistration() {
  const [assetType, setAssetType] = useState('Electronics');

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Asset Registration
      </Typography>
      
      <Paper elevation={3} sx={{ borderRadius: 2, p: 4 }}>
        <Box component="form" noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Asset Name"
                placeholder="e.g. Dell Latitude 5420"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="asset-type-label">Asset Type</InputLabel>
                <Select
                  labelId="asset-type-label"
                  value={assetType}
                  label="Asset Type"
                  onChange={(e) => setAssetType(e.target.value)}
                >
                  <MenuItem value="Electronics">Electronics</MenuItem>
                  <MenuItem value="Furniture">Furniture</MenuItem>
                  <MenuItem value="Heavy Machinery">Heavy Machinery</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Serial Number"
                placeholder="e.g. CN-0XFG23"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Cost ($)"
                type="number"
                placeholder="0.00"
              />
            </Grid>
            
            {/* Visual Upload Box */}
            <Grid item xs={12}>
              <Box 
                sx={{ 
                  border: '2px dashed #ccc', 
                  borderRadius: 2, 
                  p: 4, 
                  textAlign: 'center',
                  bgcolor: '#f8f9fa',
                  cursor: 'pointer',
                  transition: '0.3s',
                  '&:hover': { bgcolor: '#f1f3f5', borderColor: 'primary.main' }
                }}
              >
                <CloudUploadIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 1 }} />
                <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  Click to upload asset invoice or image
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Supports PDF, PNG, JPG up to 5MB
                </Typography>
              </Box>
            </Grid>
          </Grid>
          
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 4, px: 4, fontWeight: 'bold' }}
          >
            Register Asset
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}