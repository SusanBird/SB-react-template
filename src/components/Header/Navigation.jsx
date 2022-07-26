import { Link } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <Link to="/">Home</Link>
      <Link to="list">List</Link>
      <Link to="about">About</Link>
    </nav>
  );
}
