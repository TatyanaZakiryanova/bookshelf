import { RootState } from '../store';

export const itemsSelector = (state: RootState) => state.books.items;
export const statusSelector = (state: RootState) => state.books.status;
