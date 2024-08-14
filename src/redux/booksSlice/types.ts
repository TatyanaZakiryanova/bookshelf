import { Book } from '../../pages/Main/types';
import { FilterParams, LangParams, OrderParams } from '../searchSlice/types';

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  NO_MORE_BOOKS = 'no_more_books',
  ERROR = 'error',
}

export interface BooksState {
  items: Book[];
  status: Status;
}

export type SearchParams = {
  search: string;
  orderBy: OrderParams['parameter'];
  filter: FilterParams['value'];
  startIndex: number;
  langRestrict: LangParams['value'];
};
