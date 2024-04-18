export type FavItem = {
  id: string;
  title: string;
  authors: string[];
  thumbnail: string;
  publisher: string;
  publishedDate: string;
  previewLink: string;
  amount: string;
  count: number;
};

export type FavSlice = {
  items: FavItem[];
  total: number;
};
