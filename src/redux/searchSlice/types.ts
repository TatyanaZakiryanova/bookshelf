export enum OrderEnum {
  RELEVANCE = 'relevance',
  NEWEST = 'newest',
}

export enum FilterEnum {
  EBOOKS = 'ebooks',
  FREEBOOKS = 'free-ebooks',
  PAIDBOOKS = 'paid-ebooks',
  FULLTEXT = 'full',
  PARTIALTEXT = 'partial',
}

export enum LangEnum {
  ALL = '',
  EN = 'en',
  DE = 'de',
  ES = 'es',
  FR = 'fr',
  ID = 'id',
  IT = 'it',
  PL = 'pl',
  PT = 'pt',
  RU = 'ru',
  KO = 'ko',
  JA = 'ja',
}

export type LangParams = {
  name: string;
  value: LangEnum;
};

export type FilterParams = {
  name: 'All books' | 'Free books' | 'Paid books' | 'Full text' | 'Partial text';
  value: FilterEnum;
};

export type OrderParams = {
  name: 'Relevance' | 'Newest';
  parameter: OrderEnum;
};

export interface ResultsParams {
  search: string;
  orderBy: OrderParams;
  filter: FilterParams;
  startIndex: number;
  langRestrict: LangParams;
}
