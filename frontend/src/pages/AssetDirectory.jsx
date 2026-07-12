import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Chip,
  TextField,
  InputAdornment,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function AssetDirectory() {
  const [searchTerm, setSearchTerm] = useState('');

  const assets = [
    { id: 'AF-0114', name: 'Dell laptop', type: 'Electronics', owner: 'Priya Shah', status: 'Allocated' },
    { id: 'AF-0062', name: 'Projector', type: 'Electronics', owner: 'Unassigned', status: 'Available' },
    { id: 'AF-0078', name: 'Forklift', type: 'Heavy Machinery', owner: 'Maintenance', status: 'In Maintenance' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Asset Directory
      </Typography>
      
      <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden', p: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
          <TextField 
            placeholder="Search assets by ID, name, or owner..." 
            variant="outlined" 
            size="small"
            fullWidth
            sx={{ maxWidth: 400 }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="outlined" startIcon={<FilterListIcon />} sx={{ fontWeight: 'bold' }}>
            Filters
          </Button>
        </Box>
        
        <TableContainer variant="outlined" component={Paper} elevation={0}>
          <Table>
            <TableHead sx={{ bgcolor: '#f1f3f5' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Asset ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Current Owner</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assets.map((asset, index) => (
                <TableRow key={index} hover sx={{ cursor: 'pointer' }}>
                  <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>{asset.id}</TableCell>
                  <TableCell>{asset.name}</TableCell>
                  <TableCell>{asset.type}</TableCell>
                  <TableCell>{asset.owner}</TableCell>
                  <TableCell>
                    <Chip 
                      label={asset.status} 
                      size="small" 
                      sx={{ 
                        fontWeight: 'bold',
                        bgcolor: asset.status === 'Available' ? '#e8f5e9' : asset.status === 'Allocated' ? '#e3f2fd' : '#fff3e0',
                        color: asset.status === 'Available' ? '#2e7d32' : asset.status === 'Allocated' ? '#1565c0' : '#ed6c02'
                      }} 
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}