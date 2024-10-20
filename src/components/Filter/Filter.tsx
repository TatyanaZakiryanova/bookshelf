import { useSelector } from 'react-redux';

import { setFilterParameter } from '../../redux/searchSlice/searchSlice';
import { filterSelector } from '../../redux/searchSlice/selectors';
import { FilterEnum, FilterParams } from '../../redux/searchSlice/types';
import { useAppDispatch } from '../../redux/store';
import Dropdown from '../UI/Dropdown/Dropdown';

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
  const filter = useSelector(filterSelector);

  const onClickFilter = (obj: FilterParams) => {
    dispatch(setFilterParameter(obj));
  };

  return (
    <Dropdown
      options={filterBy}
      currentOption={filter}
      handleOption={onClickFilter}
      label={filter.name}
    />
  );
};

export default Filter;
