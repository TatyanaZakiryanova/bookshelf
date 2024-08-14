import { GiBookshelf } from 'react-icons/gi';
import styles from './BooksNM.module.scss';

const BooksNoMore = () => {
  return (
    <div className={styles.error}>
      <GiBookshelf size={130} />
      <br />
      No more books available for this query.
    </div>
  );
};

export default BooksNoMore;
