import { KeyboardEvent, useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import { FaBook } from 'react-icons/fa';
import { GrSearch } from 'react-icons/gr';

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

const Main = () => {
  const [search, setSearch] = useState<string>('');

  const [bookData, setBookData] = useState<[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          search +
          '&key=AIzaSyCeC6XVMuZOAY3TjODjgT7R5Joc4qHcjEE' +
          '&maxResults=40',
      )
      .then((res) => setBookData(res.data.items))
      .catch((err) => console.log(err));
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      fetchBooks();
    }
  };

  return (
    <>
      <div className="header">
        <FaBook className="logo" size={60} />
        <div className="titleRow">
          <h1>BOOKSHELF</h1>
          <h4>book search service on google books</h4>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Enter book name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          <button onClick={fetchBooks}>
            <GrSearch className="buttonSearch" size={20} /> Search
          </button>
        </div>
      </div>
      <div className="container"> {<Card book={bookData} />}</div>
    </>
  );
};

export default Main;
