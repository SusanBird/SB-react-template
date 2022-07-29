import { useState } from 'react';
import { usePokedex } from '../../state/hooks/pokedex.js';
import { useSearchParams } from 'react-router-dom';
import {
  InputControl,
  FormButton,
} from '../Forms/FormControls.jsx';
import styles from './List.css';

export default function List() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState('');

  const { pokedex } = usePokedex();

  if (!pokedex) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ pokemon: name });
  };

  const handleChange = ({ target: { name, value } }) => {
    setName(value);
  };

  return (
    <section>
      <form
        className={styles.Search}
        onSubmit={handleSubmit}
      >
        <InputControl
          name="name"
          value={name}
          onChange={handleChange}
        />
        <FormButton>🔍</FormButton>
      </form>
      <PokemonList pokedex={pokedex} />;
    </section>
  );
}

function PokemonList({ pokedex }) {
  return (
    <ul className={styles.List}>
      {pokedex.map((pokemon) => (
        <Card key={pokemon._id} pokemon={pokemon} />
      ))}
    </ul>
  );
}

function Card({ pokemon }) {
  const {
    url_image,
    pokemon: name,
    type_1,
    type_2,
  } = pokemon;

  return (
    <li className={styles.Card}>
      <img src={url_image} alt={name} />

      <h2 className={styles.Header}>{name}</h2>

      <div className={styles.Types}>
        <Type type={type_1} />
        <Type type={type_2} />
      </div>
    </li>
  );
}

function Type({ type }) {
  return type === 'NA' ? null : <span>{type}</span>;
}
