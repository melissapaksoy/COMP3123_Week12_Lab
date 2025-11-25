import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      <Navbar />
      {isAuthenticated ? <Dashboard /> : <LoginForm />}
    </div>
  );
}

export default App;
