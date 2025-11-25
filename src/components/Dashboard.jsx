import { useSelector } from 'react-redux';
import { fakeProtectedRequest } from '../api/fakeAuthApi';

export default function Dashboard() {
  const { user, token } = useSelector((state) => state.auth);

  const handleCallApi = () => {
    fakeProtectedRequest(token);
    alert('Check console to see the Authorization header usage!');
  };

  return (
    <div style={{ padding: '1rem 2rem' }}>
      <h2>Dashboard</h2>
      <p>
        Welcome, <b>{user?.username}</b>!
      </p>
      <p>
        Your role: <b>{user?.role}</b>
      </p>
      <p>Your JWT token (shortened):</p>
      <code>{token?.slice(0, 20)}...</code>
      <br />
      <button style={{ marginTop: '1rem' }} onClick={handleCallApi}>
        Call Protected API with JWT
      </button>
    </div>
  );
}
