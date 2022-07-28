import SlideoutMenu from './SlideoutMenu.jsx';
import Navigation from './Navigation.jsx';
import styles from './Header.css';
import User from './User.jsx';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <SlideoutMenu />
      </div>

      <h1>SB Custom React Template</h1>

      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>

      <User />
    </header>
  );
}
