import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterEnum, FilterParams, OrderEnum, OrderParams, ResultsParams } from './types';

const initialState: ResultsParams = {
  search: '',
  orderBy: {
    name: 'Relevance',
    parameter: OrderEnum.RELEVANCE,
  },
  filter: {
    name: 'All books',
    value: FilterEnum.EBOOKS,
  },
  startIndex: 0,
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
    setFilterParameter: (state, action: PayloadAction<FilterParams>) => {
      state.filter = action.payload;
    },
    setStartIndex: (state, action: PayloadAction<number>) => {
      state.startIndex = action.payload;
    },
  },
});

export const { setSearchValue, setOrderParameter, setFilterParameter, setStartIndex } =
  searchSlice.actions;

export default searchSlice.reducer;
