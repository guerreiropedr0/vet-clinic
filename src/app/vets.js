import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3000/api/v1/vets';

const fetchVets = createAsyncThunk('/vets', async () => {
  const response = await fetch(apiUrl);
  if (response.ok) return response.json();
  return response.statusText;
});

const createVet = createAsyncThunk('/vets/', async (vet) => {
  const resp = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vet),
  });
  const data = await resp.json();

  return data;
});

const initialState = {
  loading: false,
  all: [],
};

const vetsSlice = createSlice({
  name: 'vets',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVets.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchVets.fulfilled, (state, action) => {
      state.loading = false;
      state.all = action.payload;
    });

    builder.addCase(createVet.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createVet.fulfilled, (state, action) => {
      state.loading = false;
      state.all = [...state.all, action.payload];
    });
  },
});

export { fetchVets, createVet };

export default vetsSlice.reducer;
