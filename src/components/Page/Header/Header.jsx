import Menu from './Menu.jsx';
import Navigation from './Navigation.jsx';
import styles from './Header.css';
import User from './User.jsx';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <Menu />
      </div>

      <h1>My App</h1>

      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>

      <User />
    </header>
  );
}
