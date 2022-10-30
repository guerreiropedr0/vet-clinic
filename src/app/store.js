import { configureStore } from '@reduxjs/toolkit';
import vetsReducer from './vets';

const store = configureStore({
  reducer: {
    vets: vetsReducer,
  },
});

export default store;
