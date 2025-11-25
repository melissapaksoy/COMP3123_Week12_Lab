import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../features/authSlice';
import { fakeLogin } from '../api/fakeAuthApi';

export default function LoginForm() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const { token, user } = await fakeLogin(username, password);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(loginSuccess({ token, user }));
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };

  return (
    <div style={{ maxWidth: 320, margin: '2rem auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%' }}
            />
          </label>
        </div>

        <div style={{ marginBottom: '0.5rem' }}>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%' }}
            />
          </label>
        </div>

        <button type="submit" disabled={loading} style={{ width: '100%' }}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
        Try username: <b>admin</b>, password: <b>password</b>
      </p>
    </div>
  );
}
