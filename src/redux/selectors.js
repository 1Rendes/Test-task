export const selectBaseCurrency = state => state.currency.baseCurrency;

export const selectIsLoading = state => state.currency.isLoading;
export const selectExchangeInfo = state => state.currency.exchangeInfo;
export const selectError = state => state.currency.error;
