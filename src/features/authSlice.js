import { createSlice } from '@reduxjs/toolkit';

const tokenFromStorage = localStorage.getItem('token');
const userFromStorage = localStorage.getItem('user');

const initialState = {
  isAuthenticated: !!tokenFromStorage,
  token: tokenFromStorage || null,
  user: userFromStorage ? JSON.parse(userFromStorage) : null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
