import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

store.subscribe(() => {
  console.log('Store changed:', store.getState());
});
