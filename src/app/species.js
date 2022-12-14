import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3000/api/v1/species';

const fetchSpecies = createAsyncThunk('/species', async () => {
  const response = await fetch(apiUrl);
  if (response.ok) return response.json();
  return response.statusText;
});

const initialState = {
  loading: false,
  all: [],
};

const speciesSlice = createSlice({
  name: 'species',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSpecies.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchSpecies.fulfilled, (state, action) => {
      state.loading = false;
      state.all = action.payload;
    });
  },
});

export { fetchSpecies };

export default speciesSlice.reducer;
