import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useSelector } from 'react-redux';

import { fetchBooks } from '../../redux/booksSlice/asyncActions';
import { setSearchValue } from '../../redux/searchSlice/searchSlice';
import {
  filterValueSelector,
  langRestrictValueSelector,
  orderByParameterSelector,
} from '../../redux/searchSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useAppDispatch();

  const [localSearch, setLocalSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const filter = useSelector(filterValueSelector);
  const langRestrict = useSelector(langRestrictValueSelector);
  const orderBy = useSelector(orderByParameterSelector);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
  };

  const handleSearchSubmit = async (): Promise<void> => {
    try {
      dispatch(setSearchValue(localSearch));
      await dispatch(
        fetchBooks({ search: localSearch, orderBy, filter, startIndex: 0, langRestrict }),
      );
      inputRef.current?.blur();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const searchKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <div className={styles.search}>
      <Input
        ref={inputRef}
        placeholder="Enter the book title..."
        value={localSearch}
        onChange={handleInputChange}
        onKeyDown={searchKey}
      />
      <Button onClick={handleSearchSubmit} className={styles.searchbutton} disabled={!localSearch}>
        <CiSearch size={20} /> Search
      </Button>
    </div>
  );
};

export default Search;
