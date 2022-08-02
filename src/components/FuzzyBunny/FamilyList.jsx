import { useEffect, useRef, useState } from 'react';
import {
  useFamilies,
  useFamilyActions,
} from '../../state/hooks/fuzzyBunny.js';
import styles from './FamilyList.css';
import { InputControl } from '../Forms/FormControls.jsx';

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
  const { remove, update } = useFamilyActions();
  const [editing, setEditing] = useState(false);
  const ref = useRef();
  const [name, setName] = useState(family.name);

  const handleRemove = () => remove(family.id);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  useEffect(() => {
    if (editing) ref.current.focus();
  }, [editing]);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleEdit = async () => {
    setEditing(false);
    if (name === family.name) return;
    await update({ name, id: family.id });
  };

  const handleKeyUp = (e) => {
    if (e.code === 'Enter') handleEdit();
  };

  return (
    <li className={styles.Family}>
      {editing ? (
        <InputControl
          ref={ref}
          name="name"
          value={name}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onBlur={handleEdit}
        />
      ) : (
        <h2 onDoubleClick={handleDoubleClick}>{family.name}</h2>
      )}
      <button onClick={handleRemove}>ⓧ</button>
    </li>
  );
}
