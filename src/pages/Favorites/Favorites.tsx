import { clearList } from '../../redux/favSlice/favSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import NotFavorites from '../../components/Favorites/NotFavorites';
import { MdFavorite } from 'react-icons/md';
import { FavItem } from '../../redux/favSlice/types';
import FavBook from '../../components/Favorites/FavBook';
import { Link } from 'react-router-dom';
import styles from './Favorites.module.scss';

const Favorites = () => {
  const items = useAppSelector((state) => state.favReducer.items);
  const total = useAppSelector((state) => state.favReducer.total);

  const dispatch = useAppDispatch();

  const onClickClearList = () => {
    if (window.confirm('Clear list?')) {
      dispatch(clearList());
    }
  };

  if (!items || items.length === 0) {
    return <NotFavorites />;
  }

  return (
    <>
      <div className={styles.title}>
        <div className={styles.icon}>
          <MdFavorite /> Favorites
        </div>
        <p>Books in favorites list: {items.length}</p>
      </div>
      <div className={styles.items}>
        {items.map((item: FavItem) => (
          <FavBook key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.total}>Added books worth: {total} &#8381;</div>
      <div className={styles.bottom}>
        <button className={styles.back}>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ← Home
          </Link>
        </button>
        <button onClick={onClickClearList} className={styles.clear}>
          Clear list
        </button>
      </div>
    </>
  );
};

export default Favorites;
