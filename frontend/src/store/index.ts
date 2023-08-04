import { configureStore } from '@reduxjs/toolkit';
import dashboard from './dashboard-slice';


const store = configureStore({
  reducer: {
    dashboard,
  },
})

export default store;