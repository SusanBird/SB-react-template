import styles from './BunnyList.css';

export default function BunnyList() {
  return (
    <>
      <ul className={styles.BunnyList}>
        <li>
          <h3>Flopsy</h3>
          <button>ⓧ</button>
        </li>
        <li>
          <h3>Jojo</h3>
          <button>ⓧ</button>
        </li>
        <li>
          <h3>Spud</h3>
          <button>ⓧ</button>
        </li>
        <li>
          <h3>Trogdor</h3>
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
          title={`Add a new bunny to the ${'Marcum'} family`}
          placeholder="new bunny..."
        />
        <button>⊕</button>
      </form>
    </>
  );
}
