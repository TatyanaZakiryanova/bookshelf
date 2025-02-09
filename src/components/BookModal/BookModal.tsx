import { useState } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { useSelector } from 'react-redux';

import useFavorites from '../../hooks/useFavorites';
import { Book } from '../../pages/Main/types';
import { favItemsSelector } from '../../redux/favSlice/selectors';
import BookInfo from '../BookInfo/BookInfo';
import PreviewIframe from '../PreviewIframe/PreviewIframe';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import styles from './BookModal.module.scss';

interface IBookModalProps {
  item: Book;
  onClose: () => void;
}

const BookModal = ({ item, onClose }: IBookModalProps) => {
  const { addToFavorites } = useFavorites();
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const favorites = useSelector(favItemsSelector);

  const addedBook = favorites.find((favitem) => favitem.id === item.id);
  const addedValue = addedBook ? `В избранном: ${addedBook.count}` : 'Добавить в избранное';

  const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
  const title = item.volumeInfo.title || 'No title available';
  const authors = item.volumeInfo.authors?.join(', ') || 'Unknown author';
  const publisher = item.volumeInfo.publisher || 'Unknown publisher';
  const publishedDate = item.volumeInfo.publishedDate || 'Unknown date';
  const description = item.volumeInfo.description || 'No description available.';

  const viewerUrl = `https://books.google.com/books?id=${item.id}&printsec=frontcover&output=embed`;

  return (
    <Modal isOpen={!!item} onClose={onClose} modalClass={styles.customModal}>
      {showPreview ? (
        <>
          <Button onClick={() => setShowPreview(false)} className={styles.backButton}>
            <SlArrowLeft size={10} />
          </Button>
          <PreviewIframe viewerUrl={viewerUrl} />
        </>
      ) : (
        <BookInfo
          title={title}
          authors={authors}
          publisher={publisher}
          publishedDate={publishedDate}
          description={description}
          thumbnail={thumbnail}
          item={item}
          addedValue={addedValue}
          addToFavorites={addToFavorites}
          showPreview={() => setShowPreview(true)}
        />
      )}
    </Modal>
  );
};

export default BookModal;
