import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OrganizationSetup from './pages/OrganizationSetup';
import AssetDirectory from './pages/AssetDirectory';
import AssetRegistration from './pages/AssetRegistration';
import AssetAllocation from './pages/AssetAllocation';
import ResourceBooking from './pages/ResourceBooking';
import MaintenanceManagement from './pages/MaintenanceManagement';
import AssetAudit from './pages/AssetAudit';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: '#f4f6f8', pb: 4 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/org-setup" element={<OrganizationSetup />} />
          <Route path="/directory" element={<AssetDirectory />} />
          <Route path="/register" element={<AssetRegistration />} />
          <Route path="/allocation" element={<AssetAllocation />} />
          <Route path="/booking" element={<ResourceBooking />} />
          <Route path="/maintenance" element={<MaintenanceManagement />} />
          <Route path="/audit" element={<AssetAudit />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Box>
    </Router>
  );
}