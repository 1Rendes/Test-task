import { createAsyncThunk } from '@reduxjs/toolkit';
import { exchangeCurrency } from 'service/exchangeAPI';
import { getUserInfo } from 'service/opencagedataApi';
import { latestRates } from 'service/exchangeAPI';

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

export const fetchExchangeCurrency = createAsyncThunk(
  'currency/fetchExchangeCurrency',
  async (some, thunkApi) => {
    try {
      const data = await exchangeCurrency(some);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const fetchLatestSymbols = createAsyncThunk(
  'currency/fetchLatestSymbols',
  async (baseCurrency, thunkApi) => {
    try {
      const data = await latestRates(baseCurrency);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);
