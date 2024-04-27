import { Book } from '../../pages/Main/types';
import { OrderParams } from '../searchSlice/types';

export enum Status {
  NULL = 'null',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface BooksState {
  items: Book[];
  status: Status;
}

export type SearchParams = {
  search: string;
  orderBy: OrderParams['parameter'];
};
