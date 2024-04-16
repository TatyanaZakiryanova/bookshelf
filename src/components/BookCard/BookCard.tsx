import { MouseEventHandler } from 'react';
import { Book } from '../Main/Main';
import styles from './Overlay.module.scss';

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
      <div className={styles.overlay}>
        <div className={styles.inner}>
          <button className={styles.close} onClick={onClose}>
            X
          </button>
          <div className={styles.inform}>
            <img src={thumbnail} />
            <div className={styles.info}>
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <a href={item.volumeInfo.previewLink} target="_blank">
                <button>Go to book page</button>
              </a>
              <br />
            </div>
          </div>
          <h4>{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default BookCard;
