import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
} from '../Forms/FormControls.jsx';

import styles from './About.css';

export default function About() {
  return (
    <section className={styles.About}>
      Some text here...
      <form>
        <InputControl
          label="email"
          name="email"
          placeholder="enter your email"
          type="email"
          required
        />

        <InputControl
          label="password"
          name="password"
          placeholder="choose a password"
          type="password"
          required
        />

        <SelectControl label="type">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </SelectControl>

        <CheckboxControl label="Easy Mode?" text="Yes" />

        <TextAreaControl label="bio" placeholder="tell us about yourself" />

        <button>Submit</button>
      </form>
    </section>
  );
}
