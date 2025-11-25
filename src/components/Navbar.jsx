import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(logout());
  };

  return (
    <nav
      style={{
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#222',
        color: '#fff',
      }}
    >
      <div>Redux JWT Demo</div>
      <div>
        {isAuthenticated && user ? (
          <>
            <span style={{ marginRight: '1rem' }}>
              Logged in as <b>{user.username}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <span>Not logged in</span>
        )}
      </div>
    </nav>
  );
}
