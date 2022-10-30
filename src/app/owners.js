import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3000/api/v1/owners';

const fetchOwners = createAsyncThunk('/owners', async () => {
  const response = await fetch(apiUrl);
  if (response.ok) return response.json();
  return response.statusText;
});

const initialState = {
  loading: false,
  all: [],
};

const ownersSlice = createSlice({
  name: 'owners',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOwners.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchOwners.fulfilled, (state, action) => {
      state.loading = false;
      state.all = action.payload;
    });
  },
});

export { fetchOwners };

export default ownersSlice.reducer;
