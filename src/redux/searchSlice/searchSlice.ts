import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OrderParams, ResultsParams } from './types';

const initialState: ResultsParams = {
  search: '',
  orderBy: {
    name: 'Relevance',
    parameter: 'relevance',
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setOrderParameter: (state, action: PayloadAction<OrderParams>) => {
      state.orderBy = action.payload;
    },
  },
});

export const { setSearchValue, setOrderParameter } = searchSlice.actions;

export default searchSlice.reducer;
