import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { fetchBooks } from '../../redux/booksSlice/asyncActions';
import { setOrderParameter } from '../../redux/searchSlice/searchSlice';
import {
  filterValueSelector,
  langRestrictValueSelector,
  orderByNameSelector,
  orderByParameterSelector,
  orderBySelector,
  searchSelector,
  startIndexSelector,
} from '../../redux/searchSlice/selectors';
import { OrderEnum, OrderParams } from '../../redux/searchSlice/types';
import { useAppDispatch } from '../../redux/store';
import Dropdown from '../UI/Dropdown/Dropdown';

const order: OrderParams[] = [
  {
    name: 'Relevance',
    value: OrderEnum.RELEVANCE,
  },
  {
    name: 'Newest',
    value: OrderEnum.NEWEST,
  },
];

const Order = () => {
  const dispatch = useAppDispatch();
  const [initialQueryDone, setInitialQueryDone] = useState(false);

  const search = useSelector(searchSelector);
  const startIndex = useSelector(startIndexSelector);
  const filter = useSelector(filterValueSelector);
  const langRestrict = useSelector(langRestrictValueSelector);
  const orderBy = useSelector(orderByParameterSelector);
  const orderName = useSelector(orderByNameSelector);
  const orderParameter = useSelector(orderBySelector);

  useEffect(() => {
    const fetchData = async () => {
      if (initialQueryDone) {
        try {
          await dispatch(fetchBooks({ search, orderBy, filter, startIndex, langRestrict }));
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      }
      setInitialQueryDone(true);
    };

    const fetchAsync = async () => {
      await fetchData();
    };

    fetchAsync();
  }, [dispatch, orderBy, filter, startIndex, langRestrict]);

  const onClickOrder = (selectedOption: OrderParams) => {
    dispatch(setOrderParameter(selectedOption));
  };

  return (
    <Dropdown
      options={order}
      currentOption={orderParameter}
      handleOption={onClickOrder}
      label={orderName}
    />
  );
};

export default Order;
