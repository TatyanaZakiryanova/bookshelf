import { FavItem } from '../../redux/favSlice';
import { useAppSelector } from '../../redux/store';

const Favorites = () => {
  const items = useAppSelector((state) => state.favReducer.items);

  return (
    <div>
      <div>
        {items.map((item: FavItem) => (
          <li key={item.id}>
            <img src={item.thumbnail} />
            {item.title}
            {item.authors}
            {item.amount}
            {item.publisher}
            {item.publishedDate}
            {item.count}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
