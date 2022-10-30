import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3000/api/v1/owners';

const fetchOwners = createAsyncThunk('/owners', async () => {
  const response = await fetch(apiUrl);
  if (response.ok) return response.json();
  return response.statusText;
});

const createOwner = createAsyncThunk('/owners/', async (owner) => {
  const resp = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(owner),
  });
  const data = await resp.json();

  return data;
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

    builder.addCase(createOwner.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createOwner.fulfilled, (state, action) => {
      state.loading = false;
      state.all = [...state.all, action.payload];
    });
  },
});

export { fetchOwners };

export default ownersSlice.reducer;
