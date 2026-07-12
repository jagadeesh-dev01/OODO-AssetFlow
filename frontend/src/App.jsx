import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AssetRegistration from './pages/AssetRegistration';
import AssetDirectory from './pages/AssetDirectory';

function App() {
  return (
    <div style={{ paddingBottom: '50px' }}>
      <Login />
      <hr style={{ margin: '40px 0' }} />
      <Dashboard />
      <AssetRegistration />
      <AssetDirectory />
    </div>
  );
}

export default App;