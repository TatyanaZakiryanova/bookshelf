import { ChangeEvent, KeyboardEvent } from 'react';
import Card from '../Card/Card';
import { GrSearch } from 'react-icons/gr';
import styles from './Main.module.scss';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { FaDeleteLeft } from 'react-icons/fa6';
import { fetchBooks } from '../../redux/booksSlice/booksSlice';
import { setSearchValue } from '../../redux/searchSlice/searchSlice';
import Skeleton from './Skeleton';

const Main = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useAppSelector((state) => state.booksReducer);
  const { value } = useAppSelector((state) => state.searchReducer);

  const setValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  const clearInput = () => {
    dispatch(setSearchValue(''));
  };

  const getBooks = async () => {
    const searchValue = value;
    dispatch(fetchBooks(searchValue));
  };

  const searchKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      getBooks();
    }
  };

  const addedItems = useAppSelector((state) => state.favReducer.items.length);

  const skeleton = [...new Array(5)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Enter book name..."
            value={value}
            onChange={setValue}
            onKeyUp={searchKey}
          />
          {value && (
            <button onClick={clearInput} className={styles.clear}>
              <FaDeleteLeft className={styles.clearicon} />
            </button>
          )}
          <button onClick={getBooks}>
            <GrSearch className={styles.searchbutton} size={20} /> Search
          </button>
        </div>
        <Link to="favorites" className={styles.favorites}>
          <MdFavorite className={styles.icon} />
          {addedItems}
        </Link>
      </div>
      {status === 'null' ? null : status === 'error' ? (
        <div>Error</div>
      ) : (
        <div className={styles.container}>
          {' '}
          {status === 'loading' ? skeleton : <Card book={items} />}
        </div>
      )}
    </>
  );
};

export default Main;
