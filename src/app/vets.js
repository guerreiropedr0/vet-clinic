import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3000/api/v1/vets';

const fetchVets = createAsyncThunk('/vets', async () => {
  const response = await fetch(apiUrl);
  if (response.ok) return response.json();
  return response.statusText;
});

const initialState = {
  all: [],
};

const vetsSlice = createSlice({
  name: 'vets',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVets.fulfilled, (state, action) => {
      state.all = action.payload;
    });
  },
});

export { fetchVets };

export default vetsSlice.reducer;
