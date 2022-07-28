import { useState, useEffect } from 'react';
import Navigation from './Navigation.jsx';
import styles from './SlideoutMenu.css';
import classNames from 'classnames';

export default function SlideoutMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const className = classNames(styles.SlideoutMenu, {
    [styles.Open]: isOpen,
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    if (!isOpen) return;

    const clickHandler = () => setIsOpen(false);
    document.addEventListener('click', clickHandler);
    
    const keyHandler = (e) => {
      if (e.key !== 'Escape') return;
      clickHandler();
    };
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('keydown', keyHandler);
    };
  }, [isOpen]);

  return (
    <button className={className} onClick={handleClick}>
      <div className={styles.MenuContainer}>
        <Navigation />
      </div>
    </button>
  );
}
