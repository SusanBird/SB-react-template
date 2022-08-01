import PokemonList from './PokemonList.jsx';
import Search from './Search.jsx';
import styles from './Pokedex.css';

export default function Pokedex() {
  return (
    <section className={styles.Pokedex}>
      <Search />
      <PokemonList />
    </section>
  );
}
