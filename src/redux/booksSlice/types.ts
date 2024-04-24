import { Book } from '../../components/Main/types';

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
