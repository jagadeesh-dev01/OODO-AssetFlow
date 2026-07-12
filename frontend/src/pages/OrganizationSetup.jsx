import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  Tabs, 
  Tab, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Button,
  Chip
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function OrganizationSetup() {
  const [tabValue, setTabValue] = useState(1); // Defaults to the "Departments" tab
  
  const departments = [
    { name: 'Engineering', head: 'Sarah Connor', parent: '-', status: 'Active' },
    { name: 'Human Resources', head: 'John Smith', parent: '-', status: 'Active' },
    { name: 'IT Support', head: 'Mike Chang', parent: 'Engineering', status: 'Active' }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Organization Setup
      </Typography>
      
      <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#f8f9fa' }}>
          <Tabs 
            value={tabValue} 
            onChange={(e, val) => setTabValue(val)} 
            textColor="primary" 
            indicatorColor="primary"
            sx={{ px: 2 }}
          >
            <Tab label="Employees" sx={{ fontWeight: 'bold' }} />
            <Tab label="Departments" sx={{ fontWeight: 'bold' }} />
            <Tab label="Categories" sx={{ fontWeight: 'bold' }} />
          </Tabs>
        </Box>
        
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Departments Directory
            </Typography>
            <Button variant="contained" startIcon={<AddIcon />} sx={{ fontWeight: 'bold' }}>
              Add Department
            </Button>
          </Box>
          
          <TableContainer variant="outlined" component={Paper} elevation={0}>
            <Table>
              <TableHead sx={{ bgcolor: '#f1f3f5' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Head</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Parent Dept</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {departments.map((dept, index) => (
                  <TableRow key={index} hover sx={{ cursor: 'pointer' }}>
                    <TableCell>{dept.name}</TableCell>
                    <TableCell>{dept.head}</TableCell>
                    <TableCell>{dept.parent}</TableCell>
                    <TableCell>
                      <Chip label={dept.status} color="success" size="small" sx={{ fontWeight: 'bold' }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </Container>
  );
}