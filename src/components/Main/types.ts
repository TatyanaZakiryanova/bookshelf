export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    publisher: string;
    publishedDate: string;
    description: string;
    previewLink: string;
  };
  saleInfo: {
    listPrice: {
      amount: string;
    };
  };
}
