import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import servicesReducer from '../features/services/servicesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  services: servicesReducer,
});

export default rootReducer; 