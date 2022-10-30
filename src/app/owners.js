import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3000/api/v1/owners';

const fetchOwners = createAsyncThunk('/owners', async () => {
  const response = await fetch(apiUrl);
  if (response.ok) return response.json();
  return response.statusText;
});

const fetchOwner = createAsyncThunk('/owners/:id', async (ownerId) => {
  const response = await fetch(`${apiUrl}/${ownerId}`);
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
  current: {},
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

    builder.addCase(fetchOwner.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchOwner.fulfilled, (state, action) => {
      state.loading = false;
      state.current = action.payload;
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

export { fetchOwners, createOwner };

export default ownersSlice.reducer;
