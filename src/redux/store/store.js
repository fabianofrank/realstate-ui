import { configureStore } from '@reduxjs/toolkit';
import indexOfProperties from './propertySlice';

const store = configureStore({
  reducer: {
    indexOfProperties,
  },
});

export default store;
