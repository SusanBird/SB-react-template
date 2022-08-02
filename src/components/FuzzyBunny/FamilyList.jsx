import {
  useFamilies,
  useActions
} from '../../state/hooks/fuzzyBunny.js';
import styles from './FamilyList.css';

export default function FamilyList() {
  const { families } = useFamilies();
  
  if (!families) return null;
  
  return (
    <ul className={styles.FamilyList}>
      {families.map((family) => (
        <Family key={family.id} family={family} />
      ))}
    </ul>
  );
}

function Family({ family }) {
  const { remove } = useActions();

  const handleRemove = () => remove(family.id);

  return (
    <li className={styles.Family}>
      <button onClick={handleRemove}>ⓧ</button>
    </li>
  );
}
