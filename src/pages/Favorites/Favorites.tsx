import NotFavorites from '../../components/Favorites/NotFavorites';
import { MdFavorite } from 'react-icons/md';
import { FavItem } from '../../redux/favSlice/types';
import FavBook from '../../components/Favorites/FavBook';
import { Link } from 'react-router-dom';
import styles from './Favorites.module.scss';
import { FaCoins } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { favItemsSelector, favTotalSelector } from '../../redux/favSlice/selectors';
import { useState } from 'react';
import ClearListModal from '../../components/ModalClear/ClearListModal';

const Favorites = () => {
  const items = useSelector(favItemsSelector);
  const total = useSelector(favTotalSelector);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalClick = () => {
    setShowModal(true);
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
      <div className={styles.total}>
        <FaCoins />
        Added books worth: {total}
      </div>
      <div className={styles.bottom}>
        <button className={styles.back}>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ← Home
          </Link>
        </button>
        <button onClick={handleModalClick} className={styles.clear}>
          Clear list
        </button>
        {showModal && <ClearListModal onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
};

export default Favorites;
