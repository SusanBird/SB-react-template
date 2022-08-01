import { Link } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation({ navigation }) {
  return (
    <nav className={styles.Navigation}>
      {navigation.map(({ to, label }) => (
        <NavLink key={to} to={to}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

function NavLink({ children, ...rest }) {
  return (
    <Link className="label-text" {...rest}>
      {children}
    </Link>
  );
}
