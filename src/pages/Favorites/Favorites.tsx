import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ClearListModal from '../../components/ClearListModal/ClearListModal';
import FavBook from '../../components/FavBook/FavBook';
import NotFavorites from '../../components/NotFavorites/NotFavorites';
import Button from '../../components/UI/Button/Button';
import { favItemsSelector, favTotalSelector } from '../../redux/favSlice/selectors';
import { FavItem } from '../../redux/favSlice/types';
import styles from './Favorites.module.scss';

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
        <div className={styles.icon}>Избранное</div>
        <p>Книг в списке избранного: {items.length}</p>
      </div>
      <div className={styles.items}>
        {items.map((item: FavItem) => (
          <FavBook key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.total}>Стоимость: {total}</div>
      <div className={styles.bottomBlock}>
        <Button className={styles.backButton}>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            На главную
          </Link>
        </Button>
        <Button onClick={handleModalClick} className={styles.clearButton}>
          Очистить список
        </Button>
        {showModal && <ClearListModal isOpen={showModal} onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
};

export default Favorites;
