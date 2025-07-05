import styles from './BooksNF.module.scss';

const BooksNotFound = () => {
  return (
    <div className={styles.error}>
      <p>Books not found</p>
    </div>
  );
};

export default BooksNotFound;
