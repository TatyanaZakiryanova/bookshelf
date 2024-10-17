import { Book } from '../../pages/Main/types';
import useFavorites from '../../hooks/useFavorites';
import styles from './BookCard.module.scss';
import { useState } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import PreviewIframe from '../PreviewIframe/PreviewIframe';
import { useFindAddedBook } from '../../hooks/useFindAddedBook';

const BookCard = ({ item, onClose }: { item: Book; onClose: () => void }) => {
  const { addToFavorites } = useFavorites();
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const addedBook = useFindAddedBook(item.id);
  const addedValue = addedBook ? `In favorites: ${addedBook.count}` : 'Add to favorites';

  const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
  const title = item.volumeInfo.title || 'No title available';
  const authors = item.volumeInfo.authors?.join(', ') || 'Unknown author';
  const publisher = item.volumeInfo.publisher || 'Unknown publisher';
  const publishedDate = item.volumeInfo.publishedDate || 'Unknown date';
  const description = item.volumeInfo.description || 'No description available.';

  const viewerUrl = `https://books.google.com/books?id=${item.id}&printsec=frontcover&output=embed`;

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
          <button className={styles.close} onClick={onClose}>
            X
          </button>
          {showPreview && (
            <button onClick={() => setShowPreview(false)} className={styles.back}>
              <SlArrowLeft size={10} />
            </button>
          )}
          {showPreview ? (
            <PreviewIframe viewerUrl={viewerUrl} />
          ) : (
            <div className={styles.inform}>
              <img src={thumbnail} alt={title} />
              <div className={styles.info}>
                <h1>{title}</h1>
                <h3>{authors}</h3>
                <h4>
                  {publisher} <span>{publishedDate}</span>
                </h4>
                <div className={styles.buttons}>
                  <button onClick={() => setShowPreview(true)} className={styles.page}>
                    Preview
                  </button>
                  <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                    <button className={styles.page}>Book page</button>
                  </a>
                </div>
                <button
                  onClick={() => addToFavorites(item)}
                  className={addedBook ? styles.added : styles.add}
                >
                  {addedValue}
                </button>
              </div>
            </div>
          )}
          {!showPreview && <h4>{description}</h4>}
        </div>
      </div>
    </>
  );
};

export default BookCard;
