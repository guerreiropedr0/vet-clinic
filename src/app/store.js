import { configureStore } from '@reduxjs/toolkit';
import vetsReducer from './vets';
import ownersReducer from './owners';
import speciesReducer from './species';

const store = configureStore({
  reducer: {
    vets: vetsReducer,
    owners: ownersReducer,
    species: speciesReducer,
  },
});

export default store;
