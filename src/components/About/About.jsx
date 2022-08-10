import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  OptionGroupControl,
  CheckboxOption,
  RadioOption,
  FormButtonControl,
} from '../Forms/FormControls.jsx';

import styles from './About.css';

export default function About() {
  return (
    <section className={styles.About}>
      <form>
        <InputControl
          label="email"
          name="email"
          placeholder="enter your email"
          type="email"
          required
        />

        <InputControl
          className={styles.PasswordControl}
          label="password"
          name="password"
          type="password"
          placeholder="choose a password"
          required
        />

        <SelectControl label="type">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </SelectControl>

        <CheckboxControl label="Easy Mode?" text="Yes" />

        <OptionGroupControl label="Check all that apply" size="125px">
          <CheckboxOption text="Monday" />
          <CheckboxOption text="Tuesday" />
          <CheckboxOption text="Thursday" />
          <CheckboxOption text="Wednesday" />
          <CheckboxOption text="Friday" />
          <CheckboxOption text="Saturday" />
          <CheckboxOption text="Sunday" />
        </OptionGroupControl>

        <OptionGroupControl
          name="color"
          label="Favorite Color"
          size="95px"
        >
          <RadioOption value={1} text="red" />
          <RadioOption value={2} text="blue" />
          <RadioOption value={3} text="yellow" />
          <RadioOption value={4} text="green" />
          <RadioOption value={5} text="purple" />
          <RadioOption value={6} text="brown" />
          <RadioOption value={7} text="orange" />
        </OptionGroupControl>

        <TextAreaControl
          label="bio"
          placeholder="share a deep thought or two"
        />

        <FormButtonControl>Submit</FormButtonControl>
      </form>
    </section>
  );
}
