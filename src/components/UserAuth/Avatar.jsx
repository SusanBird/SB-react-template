import styles from './Avatar.css';

export default function Avatar({ src, username }) {
  return src ? (
    <img
      className={styles.Avatar}
      src={src}
      alt={`${username} avatar`}
    />
  ) : null;
}
