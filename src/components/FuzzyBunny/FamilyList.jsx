import {
  useFamilies,
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

function Family() {

  return (
    <li className={styles.Family}>
    </li>
  );
}
