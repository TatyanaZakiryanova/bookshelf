import { clearList } from '../../redux/favSlice/favSlice';
import { useAppDispatch } from '../../redux/store';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import styles from './ClearListModal.module.scss';

interface IClearListModal {
  isOpen: boolean;
  onClose: () => void;
}

const ClearListModal = ({ isOpen, onClose }: IClearListModal) => {
  const dispatch = useAppDispatch();

  const handleClearList = () => {
    dispatch(clearList());
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} modalClass={styles.customModal}>
      <div className={styles.top}>
        <p>Вы уверены, что хотите очистить список?</p>
      </div>
      <div className={styles.buttons}>
        <Button onClick={handleClearList}>Да</Button>
        <Button onClick={onClose}>Отмена</Button>
      </div>
    </Modal>
  );
};

export default ClearListModal;
