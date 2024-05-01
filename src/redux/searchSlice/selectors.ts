import { RootState } from '../store';

export const searchSelector = (state: RootState) => state.searchReducer.search;
export const startIndexSelector = (state: RootState) => state.searchReducer.startIndex;
export const filterSelector = (state: RootState) => state.searchReducer.filter;
export const filterValueSelector = (state: RootState) => state.searchReducer.filter.value;
export const langRestrictSelector = (state: RootState) => state.searchReducer.langRestrict;
export const langRestrictValueSelector = (state: RootState) =>
  state.searchReducer.langRestrict.value;
export const orderByNameSelector = (state: RootState) => state.searchReducer.orderBy.name;
export const orderByParameterSelector = (state: RootState) => state.searchReducer.orderBy.parameter;
