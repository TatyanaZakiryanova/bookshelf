import { useState } from 'react';
import BookCard from '../BookCard/BookCard';
import React from 'react';
import styles from './Card.module.scss';
import { Book } from '../Main/types';

const Card = ({ book }: { book: Book[] }) => {
  const [show, setShow] = useState<boolean>(false);
  const [bookItem, setBookItem] = useState<Book>(Object);

  return (
    <>
      {book.map((item: Book) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        let author = item.volumeInfo && item.volumeInfo.authors;

        if (thumbnail != undefined && amount != undefined) {
          return (
            <React.Fragment key={item.id}>
              <div className={styles.card}>
                <img
                  src={thumbnail}
                  onClick={() => {
                    setShow(true);
                    setBookItem(item);
                  }}
                />
                <div className={styles.inform}>
                  <h3 className={styles.title}>{item.volumeInfo.title}</h3>
                  <h4 className={styles.author}>{author}</h4>
                  <h4 className={styles.amount}>{amount} &#8381;</h4>
                </div>
              </div>
              <BookCard show={show} item={bookItem} onClose={() => setShow(false)} />
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default Card;
