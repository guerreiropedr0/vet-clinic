import { configureStore } from '@reduxjs/toolkit';
import vetsReducer from './vets';
import ownersReducer from './owners';

const store = configureStore({
  reducer: {
    vets: vetsReducer,
    owners: ownersReducer,
  },
});

export default store;
