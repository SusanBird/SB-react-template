import { useState, useEffect } from 'react';
import { useSearch } from '../../state/hooks/url.js';
import { useTypes } from '../../state/hooks/pokedex.js';
import {
  InputControl,
  SelectControl,
  FormButton,
} from '../Forms/FormControls.jsx';
import styles from './Search.css';

export default function Search() {
  const { types } = useTypes();
  const { params, setParams } = useSearch();
  const [formData, setFormData] = useState({});
  const { pokemon, type } = params;

  useEffect(() => {
    setFormData({ pokemon, type });
  }, [pokemon, type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setParams(formData);
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <form className={styles.Search} onSubmit={handleSubmit}>
      <InputControl
        label="pokemon"
        name="pokemon"
        value={formData.pokemon}
        onChange={handleChange}
      />

      <SelectControl
        label="type"
        name="type"
        value={formData.type}
        onChange={handleChange}
      >
        <option value={''}>all types</option>
        {types.map(({ type, count }) => (
          <TypeOption key={type} type={type} count={count} />
        ))}
      </SelectControl>

      <FormButton>🔍</FormButton>
    </form>
  );
}

function TypeOption({ type, count }) {
  return <option value={type}>{`${type} (${count})`}</option>;
}
