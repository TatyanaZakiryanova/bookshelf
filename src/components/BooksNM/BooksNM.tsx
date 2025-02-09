import { GiBookshelf } from 'react-icons/gi';

import styles from './BooksNM.module.scss';

const BooksNoMore = () => {
  return (
    <div className={styles.error}>
      <GiBookshelf size={130} className={styles.icon} />
      <p>По этому запросу больше нет доступных книг.</p>
    </div>
  );
};

export default BooksNoMore;
