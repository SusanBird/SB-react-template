import styles from './Families.css';

export default function Families() {
  return (
    <ul className={styles.Families}>
      <li className={styles.Family}>
        <h2>the Marcum family</h2>
        <ul className={styles.Bunnies}>
          <li>
            <h3>Cotton Tail</h3>
            <button>ⓧ</button>
          </li>
          <li>
            <h3>Flopsy</h3>
            <button>ⓧ</button>
          </li>
          <li>
            <h3>Florentine</h3>
            <button>ⓧ</button>
          </li>
          <li>
            <h3>Larry</h3>
            <button>ⓧ</button>
          </li>
          <li>
            <h3>Rutger</h3>
            <button>ⓧ</button>
          </li>
        </ul>
        <form className={styles.AddBunny}>
          <input
            required
            title={`Add a new bunny to the ${'Marcum'} family`}
            placeholder="new bunny..."
          />
          <button>⊕</button>
        </form>
      </li>
    </ul>
  );
}
