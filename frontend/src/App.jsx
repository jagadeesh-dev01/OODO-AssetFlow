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

function App() {
  return (
    <div style={{ paddingBottom: '50px' }}>
      <Login />
      <hr style={{ margin: '40px 0' }} />
      <Dashboard />
      <hr style={{ margin: '40px 0' }} />
      <OrganizationSetup />
      <hr style={{ margin: '40px 0' }} />
      <AssetDirectory />
      <hr style={{ margin: '40px 0' }} />
      <AssetRegistration />
      <hr style={{ margin: '40px 0' }} />
      <AssetAllocation />
      <hr style={{ margin: '40px 0' }} />
      <ResourceBooking />
      <hr style={{ margin: '40px 0' }} />
      <MaintenanceManagement />
      <hr style={{ margin: '40px 0' }} />
      <AssetAudit />
      <hr style={{ margin: '40px 0' }} />
      <Reports />
      <hr style={{ margin: '40px 0' }} />
      <Settings />
    </div>
  );
}

export default App;