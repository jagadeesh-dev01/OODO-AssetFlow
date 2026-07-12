import Dashboard from './pages/Dashboard';
import AssetRegistration from './pages/AssetRegistration';
import AssetDirectory from './pages/AssetDirectory';

function App() {
  return (
    <div style={{ paddingBottom: '50px' }}>
      <Dashboard />
      <AssetRegistration />
      <AssetDirectory />
    </div>
  );
}

export default App;