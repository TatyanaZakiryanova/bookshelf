import { RootState } from '../store';

export const itemsSelector = (state: RootState) => state.booksReducer.items;
export const statusSelector = (state: RootState) => state.booksReducer.status;
