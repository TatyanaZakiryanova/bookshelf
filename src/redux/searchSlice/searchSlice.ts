import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SearchParams } from './types';

const initialState: SearchParams = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
