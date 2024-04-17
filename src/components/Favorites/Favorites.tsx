import { Link } from 'react-router-dom';
import { FavItem } from '../../redux/favSlice';
import { useAppSelector } from '../../redux/store';
import FavBook from './FavBook';
import styles from './Favorites.module.scss';

const Favorites = () => {
  const items = useAppSelector((state) => state.favReducer.items);

  return (
    <>
      <div className={styles.title}>
        Favorites
        <p>Books in favorites list: {items.length}</p>
      </div>
      <div className={styles.items}>
        {items.map((item: FavItem) => (
          <FavBook key={item.id} {...item} />
        ))}
      </div>
      <Link to="/">
        <button className={styles.back}>← Back</button>
      </Link>
    </>
  );
};

export default Favorites;
