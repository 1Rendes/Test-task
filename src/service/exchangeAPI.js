import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data/',
  headers: { apikey: 'r5ZsL2jFljpV00lRNgH5e2bqCnzQDCW1' },
});

export const exchangeCurrency = async credentials => {
  const {
    data: { query, info, result },
  } = await instance.get(`/convert`, {
    params: credentials,
  });
  return { ...query, rate: info.rate, result };
};

export const latestRates = async baseCurrency => {
  console.log(baseCurrency);

  const { data } = await instance.get(`/latest?symbols&base=${baseCurrency}`);
  return Object.entries(data.rates);
};
