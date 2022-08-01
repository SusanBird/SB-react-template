import styles from './Families.css';

export default function Families() {
  return (
    <ul className={styles.Families}>
      <li className={styles.Family}>
        <h2>the Ivanova family</h2>
        <ul className={styles.Bunnies}>
          <li>
            <h3>yotz</h3>
            <button>ⓧ</button>
          </li>
          <li>
            <h3>yolo</h3>
            <button>ⓧ</button>
          </li>
          <li>
            <h3>Hector</h3>
            <button>ⓧ</button>
          </li>
          <li>
            <h3>OHare</h3>
            <button>ⓧ</button>
          </li>
          <li>
            <h3>add new</h3>
            <button>ⓧ</button>
          </li>
        </ul>
        <form className={styles.AddBunny}>
          <input
            required
            title={`Add a new bunny to the ${'Ivanova'} family`}
            placeholder="new bunny..."
          />
          <button>⊕</button>
        </form>
      </li>
    </ul>
  );
}
