import styles from './PokemonList.css';

export default function PokemonList({ pokedex }) {
  return (
    <ul className={styles.PokemonList}>
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