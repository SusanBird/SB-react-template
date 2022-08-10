import SlideoutMenu from './SlideoutMenu.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import User from './User.jsx';
import styles from './Header.css';

const primary = [
  { to: '/', label: 'Home' },
  { to: 'pokedex', label: 'Pokedex' },
  { to: 'fuzzy-bunny', label: 'Fuzzy Bunny' },
  { to: 'about', label: 'About' },
  { to: 'wat', label: 'Wat' },
];

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <SlideoutMenu navigation={primary} />
      </div>

      <h1>My App</h1>

      <div className={styles.NavigationContainer}>
        <Navigation navigation={primary} />
      </div>

      <User />
    </header>
  );
}
