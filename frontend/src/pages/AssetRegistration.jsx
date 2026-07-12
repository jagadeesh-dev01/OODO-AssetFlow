import { Container, Paper, Typography, TextField, Button, Grid, MenuItem, Box, Divider } from '@mui/material';

export default function AssetRegistration() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>Register New Asset</Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
          Fill in the details below to add a new asset to the central inventory.
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Asset Name" variant="outlined" placeholder="e.g. MacBook Pro M3" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Asset ID" variant="outlined" placeholder="e.g. ASSET-001" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth label="Category" defaultValue="Electronics">
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Furniture">Furniture</MenuItem>
              <MenuItem value="Software">Software</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Purchase Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Vendor Name" variant="outlined" placeholder="Enter supplier name" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Description" multiline rows={4} placeholder="Detailed notes about the asset condition..." />
          </Grid>
        </Grid>

        <Box sx={{ mt: 5, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="outlined" size="large">Cancel</Button>
          <Button variant="contained" size="large" sx={{ px: 4, fontWeight: 'bold' }}>Register Asset</Button>
        </Box>
      </Paper>
    </Container>
  );
}