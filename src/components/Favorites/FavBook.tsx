import React from 'react';
import { FavItem } from '../../redux/favSlice';
import styles from './FavBook.module.scss';

const FavBook: React.FC<FavItem> = ({
  thumbnail,
  title,
  authors,
  amount,
  publisher,
  publishedDate,
  previewLink,
  count,
}) => {
  return (
    <div className={styles.item}>
      <img src={thumbnail} />
      <p className={styles.title}>{title}</p>
      <div className={styles.inform}>
        <p className={styles.authors}>Authors: {authors}</p>
        <p className={styles.amount}>Amount: {amount} ₽</p>
        <p className={styles.publisher}>Publisher: {publisher}</p>
        <p>{publishedDate}</p>
        <p className={styles.previewLink}>
          <a href={previewLink} target="_blank" className={styles.bookpage}>
            ➥ Book page
          </a>
        </p>
        <p className={styles.count}>Number: {count}</p>
      </div>
    </div>
  );
};
export default FavBook;
