import classNames from 'classnames';
import styles from './DeleteButton.css';

export default function DeleteButton({
  onClick,
  className: customClassName,
}) {
  const className = classNames(styles.DeleteButton, customClassName);

  return (
    <button className={className} onClick={onClick}>
      ⓧ
    </button>
  );
}
