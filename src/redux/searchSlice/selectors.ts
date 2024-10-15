import { RootState } from '../store';

export const searchSelector = (state: RootState) => state.search.search;
export const startIndexSelector = (state: RootState) => state.search.startIndex;
export const filterSelector = (state: RootState) => state.search.filter;
export const filterValueSelector = (state: RootState) => state.search.filter.value;
export const langRestrictSelector = (state: RootState) => state.search.langRestrict;
export const langRestrictValueSelector = (state: RootState) => state.search.langRestrict.value;
export const orderByNameSelector = (state: RootState) => state.search.orderBy.name;
export const orderByParameterSelector = (state: RootState) => state.search.orderBy.parameter;
