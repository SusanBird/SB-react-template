import { useFamilies } from '../../state/hooks/fuzzyBunny.js';
import Family from './Family.jsx';
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
