import { MouseEventHandler } from 'react';
import { Book } from './Main';

const BookCard = ({
  show,
  item,
  onClose,
}: {
  show: Boolean;
  item: Book;
  onClose: MouseEventHandler;
}) => {
  if (!show) {
    return null;
  }
  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            X
          </button>
          <div className="inform-box">
            <img src={thumbnail} />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <a href={item.volumeInfo.previewLink} target="_blank">
                <button className="link-to-page">Go to book page</button>
              </a>
              <br />
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default BookCard;
