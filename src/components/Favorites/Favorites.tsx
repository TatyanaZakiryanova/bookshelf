import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import FavBook from './FavBook';
import styles from './Favorites.module.scss';
import NotFavorites from './NotFavorites';
import { FavItem } from '../../redux/favSlice/types';
import { MdFavorite } from 'react-icons/md';

const Favorites = () => {
  const items = useAppSelector((state) => state.favReducer.items);
  const total = useAppSelector((state) => state.favReducer.total);

  if (!total) {
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
      <Link to="/">
        <button className={styles.back}>← Home</button>
      </Link>
    </>
  );
};

export default Favorites;
