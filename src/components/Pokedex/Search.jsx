import { useSearch } from '../../state/hooks/url.js';
import { useTypes } from '../../state/hooks/pokedex.js';
import {
  Form,
  InputControl,
  SelectControl,
  FormButton,
} from '../Forms/FormControls.jsx';

import styles from './Search.css';

export default function Search() {
  const { types } = useTypes();
  const [search, setSearch] = useSearch();

  return (
    <Form
      data={search}
      className={styles.Search}
      onSubmit={setSearch}
    >
      <InputControl label="pokemon" name="pokemon" />

      <SelectControl label="type" name="type">
        <option value={''}>all types</option>
        {types.map(({ type, count }) => (
          <TypeOption key={type} type={type} count={count} />
        ))}
      </SelectControl>

      <FormButton>🔍</FormButton>
    </Form>
  );
}

function TypeOption({ type, count }) {
  return <option value={type}>{`${type} (${count})`}</option>;
}
