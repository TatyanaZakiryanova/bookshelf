import { useState } from 'react';
import BookCard from '../BookCard/BookCard';
import styles from './Card.module.scss';
import { Book } from '../../pages/Main/types';
import { useAppDispatch } from '../../redux/store';
import { FavItem } from '../../redux/favSlice/types';
import { addItem } from '../../redux/favSlice/favSlice';
import { MdOutlineFavorite } from 'react-icons/md';

export type AddToFavoritesFunction = (item: Book) => void;

const Card = ({ book }: { book: Book[] }) => {
  const [show, setShow] = useState<boolean>(false);
  const [bookItem, setBookItem] = useState<Book>(book[0]);

  const dispatch = useAppDispatch();

  const addToFavorites: AddToFavoritesFunction = (item: Book) => {
    let amount = item.saleInfo?.listPrice?.amount || '0';
    const book: FavItem = {
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      thumbnail: item.volumeInfo.imageLinks.thumbnail,
      publisher: item.volumeInfo.publisher,
      publishedDate: item.volumeInfo.publishedDate,
      previewLink: item.volumeInfo.previewLink,
      amount: amount,
      count: 0,
    };
    dispatch(addItem(book));
  };

  return (
    <>
      {book.map((item: Book) => {
        let thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
        let amount = item.saleInfo?.listPrice?.amount;
        let author = item.volumeInfo?.authors;

        if (thumbnail) {
          return (
            <div key={item.id}>
              <div className={styles.card}>
                <img
                  src={thumbnail}
                  onClick={() => {
                    setShow(true);
                    setBookItem(item);
                  }}
                />{' '}
                <div className={styles.inform}>
                  <MdOutlineFavorite
                    className={styles.addtofav}
                    onClick={() => addToFavorites(item)}
                  />
                  <h3 className={styles.title}>{item.volumeInfo.title}</h3>
                  <h4 className={styles.author}>{author}</h4>
                  <h4 className={styles.amount}>{amount ? amount : '0'} &#8381;</h4>
                </div>
              </div>
              <BookCard
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
                addToFavorites={addToFavorites}
              />
            </div>
          );
        }
      })}
    </>
  );
};

export default Card;
