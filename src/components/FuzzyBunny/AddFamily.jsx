import { useFamilyActions } from '../../state/hooks/fuzzyBunny.js';
import {
  Form,
  InputControl,
  FormButton,
} from '../Forms/FormControls.jsx';
import styles from './AddFamily.css';

//clear form on submit
export default function AddFamily() {
  const { add } = useFamilyActions();

  return (
    <Form className={styles.AddFamily} onSubmit={add}>
      <InputControl label="add a family" name="name" />

      <FormButton icon={true}> + </FormButton>
    </Form>
  );
}
