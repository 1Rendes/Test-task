import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'service/opencagedataApi';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (coords, thunkApi) => {
    const state = thunkApi.getState();
    const { baseCurrency } = state.currency;
    if (baseCurrency) {
      return thunkApi.rejectWithValue('We already have the currency');
    }
    try {
      const data = await getUserInfo(coords);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);
