import styles from './Families.css';
import AddFamily from './AddFamily.jsx';
import FamilyList from './FamilyList.jsx';

export default function Families() {
  return (
    <section className={styles.Families}>
      <AddFamily />
      <FamilyList />
    </section>
  );
}
