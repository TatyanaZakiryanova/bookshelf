import React from 'react';
import { addItem, minusNumber, removeItem } from '../../redux/favSlice/favSlice';
import styles from './FavBook.module.scss';
import { useAppDispatch } from '../../redux/store';
import { FavItem } from '../../redux/favSlice/types';

const FavBook: React.FC<FavItem> = ({
  id,
  thumbnail,
  title,
  authors,
  amount,
  publisher,
  publishedDate,
  previewLink,
  count,
}) => {
  const dispatch = useAppDispatch();

  const plusItem = () => {
    dispatch(addItem({ id } as FavItem));
  };

  const minusItem = () => {
    dispatch(minusNumber({ id } as FavItem));
  };

  const deleteItem = () => {
    dispatch(removeItem({ id } as FavItem));
  };

  return (
    <div className={styles.item}>
      <div>
        <button onClick={deleteItem}>X</button>
      </div>
      <img src={thumbnail} />
      <p className={styles.title}>{title}</p>
      <div className={styles.inform}>
        <p>Authors: {authors}</p>
        <p className={styles.amount}>Price: {amount}</p>
        <p>Publisher: {publisher}</p>
        <p>{publishedDate}</p>
        <p className={styles.previewLink}>
          <a href={previewLink} target="_blank" className={styles.bookpage}>
            ➥ Book page
          </a>
        </p>
        <p>Number: {count}</p>
        <div>
          <button onClick={plusItem}>+</button>
          <button onClick={minusItem} disabled={count === 1}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};
export default FavBook;
