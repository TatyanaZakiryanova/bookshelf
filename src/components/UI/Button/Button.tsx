import styles from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, className, onClick, disabled }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
