import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OrganizationSetup from './pages/OrganizationSetup';
import AssetRegistration from './pages/AssetRegistration';
import AssetDirectory from './pages/AssetDirectory';

function App() {
  return (
    <div style={{ paddingBottom: '50px' }}>
      <Login />
      <hr style={{ margin: '40px 0' }} />
      <Dashboard />
      <hr style={{ margin: '40px 0' }} />
      <OrganizationSetup />
      <AssetRegistration />
      <AssetDirectory />
    </div>
  );
}

export default App;