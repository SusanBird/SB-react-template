import { useState } from 'react';
import { useActions } from '../../state/hooks/fuzzyBunny.js';
import { InputControl, FormButton } from '../Forms/FormControls.jsx';
import styles from './AddFamily.css';

export default function AddFamily() {
  const { add } = useActions();
  const [name, setName] = useState('');
  const handleChange = ({ target }) => setName(target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await add({ name });
    setName('');
  };

  return (
    <form className={styles.AddFamily} onSubmit={handleSubmit}>
      <InputControl
        label="add a family"
        name="NewFam"
        value={name}
        onChange={handleChange}
      />

      <FormButton>🔍</FormButton>
    </form>
  );
}
