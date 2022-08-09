import Auth from './Auth.jsx';
import styles from './UserAuth.css';
import { useStatus } from '../../state/hooks/userAuth.js';
import Profile from './Profile.jsx';
import { Navigate } from 'react-router-dom';

export default function UserAuth() {
  const { user, profile } = useStatus();

  if (user && profile) return <Navigate to="/" />;

  return (
    <section className={styles.UserAuth}>
      {user ? <Profile /> : <Auth />}
    </section>
  );
}
