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
        <p>Clear favorites?</p>
      </div>
      <div className={styles.buttons}>
        <Button onClick={handleClearList}>Confirm</Button>
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </Modal>
  );
};

export default ClearListModal;
