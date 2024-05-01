import { TbBookOff } from 'react-icons/tb';
import styles from './BooksNF.module.scss';

const BooksNotFound = () => {
  return (
    <>
      <div className={styles.error}>
        <TbBookOff size={120} />
        Books not found
        <p className={styles.bottom}>Please try again later</p>
      </div>
    </>
  );
};

export default BooksNotFound;
