import { ChangeEvent, useRef, KeyboardEvent, useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { setSearchValue, setStartIndex } from '../../redux/searchSlice/searchSlice';
import { fetchBooks } from '../../redux/booksSlice/asyncActions';
import { FaDeleteLeft } from 'react-icons/fa6';
import { GrSearch } from 'react-icons/gr';
import styles from './Search.module.scss';
import { useSelector } from 'react-redux';
import {
  filterValueSelector,
  langRestrictValueSelector,
  orderByParameterSelector,
  searchSelector,
} from '../../redux/searchSlice/selectors';

const Search = () => {
  const dispatch = useAppDispatch();

  const [localSearch, setLocalSearch] = useState('');

  const search = useSelector(searchSelector);
  const filter = useSelector(filterValueSelector);
  const langRestrict = useSelector(langRestrictValueSelector);
  const orderBy = useSelector(orderByParameterSelector);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
  };

  const handleSearchSubmit = async () => {
    dispatch(setStartIndex(0));
    dispatch(setSearchValue(localSearch));
    await dispatch(
      fetchBooks({ search: localSearch, orderBy, filter, startIndex: 0, langRestrict }),
    );
    inputRef.current?.blur();
  };

  const clearInput = () => {
    setLocalSearch('');
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };

  const searchKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <>
      <div>
        <div className={styles.search}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter book name..."
            value={localSearch}
            onChange={handleInputChange}
            onKeyUp={searchKey}
          />
          {search && (
            <span className={styles.clear}>
              <FaDeleteLeft className={styles.clearicon} onClick={clearInput} />
            </span>
          )}
          <button onClick={handleSearchSubmit}>
            <GrSearch className={styles.searchbutton} size={20} /> Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
