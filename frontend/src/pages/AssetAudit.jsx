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
  Chip
} from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export default function AssetAudit() {
  const auditItems = [
    { id: 'AF-0114', name: 'Dell laptop', expected: 'Engineering Dept', status: 'Verified' },
    { id: 'AF-0062', name: 'Projector', expected: 'Conference room B2', status: 'Missing' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Asset Audit
      </Typography>
      
      <Paper elevation={2} sx={{ borderRadius: 2, p: 3, mb: 4, bgcolor: '#f0f4f8', borderLeft: '6px solid #1976d2' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
          <FactCheckIcon color="primary" sx={{ fontSize: 32 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0d47a1' }}>
            Q3 Audit: Engineering Dept (July 1 - 15)
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ ml: 6, fontWeight: 500 }}>
          Auditors: A. Rao, S. Iqbal
        </Typography>
      </Paper>

      <TableContainer variant="outlined" component={Paper} elevation={0}>
        <Table>
          <TableHead sx={{ bgcolor: '#f1f3f5' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Asset Details</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Expected Location</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Verification Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auditItems.map((item, idx) => (
              <TableRow key={idx} hover>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{item.id}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.name}</Typography>
                </TableCell>
                <TableCell>{item.expected}</TableCell>
                <TableCell>
                  <Chip 
                    icon={item.status === 'Verified' ? <AssignmentTurnedInIcon /> : <AssignmentLateIcon />}
                    label={item.status} 
                    color={item.status === 'Verified' ? 'success' : 'error'}
                    variant={item.status === 'Verified' ? 'filled' : 'outlined'}
                    sx={{ fontWeight: 'bold' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}