import styles from './Bunnies.css';
import BunnyList from './BunnyList';

export default function Bunnies() {
  return (
    <section className={styles.Bunnies}>
      <BunnyList />
    </section>);
}
