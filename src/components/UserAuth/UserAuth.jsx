import Auth from './Auth.jsx';
import styles from './UserAuth.css';
import { useStatus } from '../../state/hooks/userAuth.js';
import Profile from './Profile.jsx';

export default function UserAuth() {
  const { user, profile } = useStatus();

  return (
    <section className={styles.UserAuth}>
      {user ? <Profile /> : <Auth />}

      <div className={styles.Data}>
        <h2>User</h2>
        <pre>{JSON.stringify(user, true, 2)}</pre>
        <h2>Profile</h2>
        <pre>{JSON.stringify(profile, true, 2)}</pre>
      </div>    </section>
  );
}
