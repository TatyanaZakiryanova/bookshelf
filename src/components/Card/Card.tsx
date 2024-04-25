import { Fragment, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import styles from './Card.module.scss';
import { Book } from '../../pages/Main/types';
import { useAppDispatch } from '../../redux/store';
import { FavItem } from '../../redux/favSlice/types';
import { addItem } from '../../redux/favSlice/favSlice';
import { MdOutlineFavorite } from 'react-icons/md';

const Card = ({ book }: { book: Book[] }) => {
  const [show, setShow] = useState<boolean>(false);
  const [bookItem, setBookItem] = useState<Book>(Object);

  const dispatch = useAppDispatch();

  return (
    <>
      {book.map((item: Book) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        let author = item.volumeInfo && item.volumeInfo.authors;

        const addToFav = () => {
          const book: FavItem = {
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            thumbnail: item.volumeInfo.imageLinks.thumbnail,
            publisher: item.volumeInfo.publisher,
            publishedDate: item.volumeInfo.publishedDate,
            previewLink: item.volumeInfo.previewLink,
            amount: item.saleInfo.listPrice.amount,
            count: 0,
          };
          dispatch(addItem(book));
        };

        if (thumbnail != undefined && amount != undefined) {
          return (
            <Fragment key={item.id}>
              <div className={styles.card}>
                <img
                  src={thumbnail}
                  onClick={() => {
                    setShow(true);
                    setBookItem(item);
                  }}
                />{' '}
                <div className={styles.inform}>
                  <MdOutlineFavorite className={styles.addtofav} onClick={addToFav} />
                  <h3 className={styles.title}>{item.volumeInfo.title}</h3>
                  <h4 className={styles.author}>{author}</h4>
                  <h4 className={styles.amount}>{amount} &#8381;</h4>
                </div>
              </div>
              <BookCard show={show} item={bookItem} onClose={() => setShow(false)} />
            </Fragment>
          );
        }
      })}
    </>
  );
};

export default Card;
