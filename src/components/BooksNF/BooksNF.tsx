import styles from './BooksNF.module.scss';

const BooksNotFound = () => {
  return (
    <div className={styles.error}>
      <h3>Books not found</h3>
    </div>
  );
};

export default BooksNotFound;
