import DeleteButton from '../Forms/DeleteButton.jsx';
import { InputControl, FormButton } from '../Forms/FormControls.jsx';
import styles from './BunnyTags.css';

export default function BunnyTags({ bunnies }) {
  return (
    <>
      <ul className={styles.BunnyTags}>
        {bunnies.map((bunny) => (
          <li key={bunny.id}>
            <h3>{bunny.name}</h3>
            <DeleteButton />
          </li>
        ))}
      </ul>

      <form className={styles.AddBunny}>
        <InputControl
          required
          title={`Add a new bunny to the ${'Marcum'} family`}
          placeholder="new bunny..."
        />

        <FormButton icon={true}>🐰</FormButton>
      </form>
    </>
  );
}
