import { useEffect } from 'react';
import { setFilterParameter } from '../../redux/searchSlice/searchSlice';
import { FilterEnum, FilterParams } from '../../redux/searchSlice/types';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchBooks } from '../../redux/booksSlice/asyncActions';
import styles from './Filter.module.scss';

const filterBy: FilterParams[] = [
  {
    name: 'All books',
    value: FilterEnum.EBOOKS,
  },
  {
    name: 'Paid books',
    value: FilterEnum.PAIDBOOKS,
  },
  {
    name: 'Free books',
    value: FilterEnum.FREEBOOKS,
  },
  {
    name: 'Partial text',
    value: FilterEnum.PARTIALTEXT,
  },
  {
    name: 'Full text',
    value: FilterEnum.FULLTEXT,
  },
];

const Filter = () => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.searchReducer);
  const orderBy = useAppSelector((state) => state.searchReducer.orderBy.parameter);
  const filter = useAppSelector((state) => state.searchReducer.filter.value);

  const onClickFilter = (obj: FilterParams) => {
    dispatch(setFilterParameter(obj));
  };

  useEffect(() => {
    dispatch(fetchBooks({ search, orderBy, filter }));
  }, [filter]);

  return (
    <>
      <div className={styles.filter}>
        <ul>
          {filterBy.map((obj, i) => (
            <li key={i}>
              <button
                onClick={() => onClickFilter(obj)}
                className={filter === obj.value ? styles.active : ''}
              >
                {obj.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Filter;
