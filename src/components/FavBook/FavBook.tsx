import { addItem, minusNumber, removeItem } from '../../redux/favSlice/favSlice';
import { FavItem } from '../../redux/favSlice/types';
import { useAppDispatch } from '../../redux/store';
import Button from '../UI/Button/Button';
import styles from './FavBook.module.scss';

interface IFavBookProps {
  id: string;
  title: string;
  authors: string[];
  thumbnail: string;
  publisher: string;
  publishedDate: string;
  previewLink: string;
  amount: string;
  count: number;
}

const FavBook = ({
  id,
  thumbnail,
  title,
  authors,
  amount,
  publisher,
  publishedDate,
  count,
}: IFavBookProps) => {
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
        <Button onClick={deleteItem}>X</Button>
      </div>
      <img src={thumbnail} />
      <p className={styles.title}>{title}</p>
      <ul className={styles.inform}>
        <li>Authors: {authors}</li>
        <li className={styles.amount}>Amount: {amount}</li>
        <li>Publisher: {publisher}</li>
        <li>{publishedDate}</li>
        <li className={styles.previewLink}></li>
        <li>Count: {count}</li>
        <div>
          <Button onClick={plusItem}>+</Button>
          <Button onClick={minusItem} disabled={count === 1}>
            -
          </Button>
        </div>
      </ul>
    </div>
  );
};
export default FavBook;
