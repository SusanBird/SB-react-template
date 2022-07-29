import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { InputControl, FormButton } from '../Forms/FormControls.jsx';
import styles from './Search.css';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pokemon = searchParams.get('pokemon') || '';
  const type = searchParams.get('type') || '';

  const [search, setSearch] = useState({ pokemon, type });

  useEffect(() => {
    setSearch({ pokemon, type });
  }, [pokemon, type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(search);
  };

  const handleChange = ({ target: { name, value } }) => {
    setSearch((search) => ({ ...search, [name]: value }));
  };

  return (
    <form className={styles.Search} onSubmit={handleSubmit}>
      <InputControl
        label="pokemon"
        name="pokemon"
        value={search.pokemon}
        onChange={handleChange}
      />
      <InputControl
        label="type"
        name="type"
        value={search.type}
        onChange={handleChange}
      />
      <FormButton>🔍</FormButton>
    </form>
  );
}
