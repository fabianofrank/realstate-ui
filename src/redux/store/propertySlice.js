/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3000/api/v1/properties';

export const getProperties = createAsyncThunk(
  'properties/getProperties',
  async () => {
    const response = await axios.get(URL);
    return response.data;
  },
);

export const addProperty = createAsyncThunk(
  'properties/addProperty',
  async (data) => {
    const response = await axios.post(URL, data);
    return response.data;
  },
);

export const getProperty = createAsyncThunk(
  'properties/getProperty',
  async (id) => {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  },
);

export const propertySlice = createSlice({
  name: 'property',
  initialState: { properties: [], status: null },
  extraReducers: (builder) => {
    builder.addCase(getProperties.pending, (state) => {
      state.status = 'Loading';
    });
    builder.addCase(getProperties.rejected, (state) => {
      state.status = 'error: "Failed to retrieve properties"';
    });
    builder.addCase(getProperties.fulfilled, (state, action) => {
      state.status = 'Success';
      state.properties = action.payload;
    });
    builder.addCase(addProperty.pending, (state) => {
      state.status = 'Loading';
    });
    builder.addCase(addProperty.rejected, (state) => {
      state.status = 'error: "Failed to add property"';
    });
    builder.addCase(addProperty.fulfilled, (state, action) => {
      state.status = action.payload;
    });
  },
});

export default propertySlice.reducer;
