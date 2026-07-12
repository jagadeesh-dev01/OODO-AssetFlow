import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';

const assets = [
  { id: 'A001', name: 'MacBook Pro', status: 'Available', location: 'Office' },
  { id: 'A002', name: 'Dell Monitor', status: 'In Maintenance', location: 'Storage' },
  { id: 'A003', name: 'Logitech Mouse', status: 'Allocated', location: 'Desk 4' },
];

export default function AssetDirectory() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>Asset Directory</Typography>
      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 2 }}>
        <Table>
          <TableHead sx={{ bgcolor: '#f5f5f5' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Asset ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Asset Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset.id} hover>
                <TableCell>{asset.id}</TableCell>
                <TableCell>{asset.name}</TableCell>
                <TableCell sx={{ color: asset.status === 'Available' ? 'success.main' : 'warning.main', fontWeight: 'medium' }}>
                  {asset.status}
                </TableCell>
                <TableCell>{asset.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}