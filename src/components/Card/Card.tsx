import { useMemo, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import styles from './Card.module.scss';
import { Book } from '../../pages/Main/types';
import { MdOutlineFavorite } from 'react-icons/md';
import useFavorites from '../../hooks/useFavorites';
import { findAddedBook } from '../../redux/favSlice/selectors';
import { useSelector } from 'react-redux';
import { statusSelector } from '../../redux/booksSlice/selectors';
import BooksNM from '../BooksNM/BooksNM';

const Card = ({ books }: { books: Book[] }) => {
  const [show, setShow] = useState<boolean>(false);
  const [bookItem, setBookItem] = useState<Book | null>(null);
  const { addToFavorites, removeFromFavorites } = useFavorites();
  const status = useSelector(statusSelector);

  const memoizedThumbnails = useMemo(() => {
    return books.map((item) => item.volumeInfo.imageLinks?.smallThumbnail);
  }, [books]);

  const handleBookClick = (book: Book) => {
    setShow(true);
    setBookItem(book);
  };

  return (
    <>
      {status === 'no_more_books' ? (
        <BooksNM />
      ) : books && books.length > 0 ? (
        books.map((item: Book, index: number) => {
          let thumbnail = memoizedThumbnails[index];
          let amount = item.saleInfo?.listPrice?.amount || 'Free';
          let author = item.volumeInfo?.authors?.slice(0, 5).join(', ') || 'Unknown author';
          const added = findAddedBook(item.id);

          if (thumbnail) {
            return (
              <div key={item.id}>
                <div className={styles.card}>
                  <img
                    src={thumbnail}
                    onClick={() => handleBookClick(item)}
                    alt={item.volumeInfo.title}
                  />
                  <MdOutlineFavorite
                    className={added ? styles.added : styles.addtofav}
                    onClick={
                      added ? () => removeFromFavorites(item.id) : () => addToFavorites(item)
                    }
                  />
                  <div className={styles.inform}>
                    <h3 className={styles.title}>{item.volumeInfo.title}</h3>
                    <h4 className={styles.author}>{author}</h4>
                    <h4 className={styles.amount}>{amount}</h4>
                  </div>
                </div>
              </div>
            );
          }
        })
      ) : null}
      {bookItem && show && <BookCard item={bookItem} onClose={() => setShow(false)} />}
    </>
  );
};

export default Card;
