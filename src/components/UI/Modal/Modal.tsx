import Button from '../Button/Button';
import styles from './Modal.module.scss';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalClass?: string;
}

const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children, modalClass }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} ${modalClass}`} onClick={(e) => e.stopPropagation()}>
        <Button className={styles.closeButton} onClick={onClose}>
          X
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
