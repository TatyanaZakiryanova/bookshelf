import { GiBookshelf } from 'react-icons/gi';
import styles from './FilteredBooksNF.module.scss';

const FilteredBooksNF = () => {
  return (
    <div className={styles.error}>
      <GiBookshelf size={130} />
      <br />
      No books were found for this filter.
    </div>
  );
};

export default FilteredBooksNF;
