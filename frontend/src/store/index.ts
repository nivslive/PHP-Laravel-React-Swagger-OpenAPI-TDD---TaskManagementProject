import { configureStore } from '@reduxjs/toolkit';
import dashboard from './dashboard-slice';
import auth from './auth-slice';

const store = configureStore({
  reducer: {
    dashboard,
    auth,
  },
})

export default store;