import { render, screen } from '@testing-library/react';
import {
  // InputControl,
  // FormButton,
  // SelectControl,
  // CheckboxControl,
  // TextAreaControl,
  OptionGroupControl,
  CheckboxOption,
  RadioOption,
} from './FormControls.jsx';

test('Checkbox Option Group handles multiple values', async () => {
  render(
    <OptionGroupControl
      label="checkbox group control"
      name="checkboxGroupControl"
      onChange={() => {}}
      value={['2', '4']}
    >
      <CheckboxOption value="1" text="monday" />
      <CheckboxOption value="2" text="tuesday" />
      <CheckboxOption value="3" text="wednesday" />
      <CheckboxOption value="4" text="thursday" />
      <CheckboxOption value="5" text="friday" />
    </OptionGroupControl>
  );

  const checkboxOption1 = screen.getByLabelText('tuesday');
  expect(checkboxOption1.checked).toBe(true);

  const checkboxOption2 = screen.getByLabelText('wednesday');
  expect(checkboxOption2.checked).toBe(false);

  const checkboxOption3 = screen.getByLabelText('thursday');
  expect(checkboxOption3.checked).toBe(true);
});

test('Radio Option Group handles value', async () => {
  render(
    <OptionGroupControl
      label="radio group control"
      name="radioGroupControl"
      onChange={() => {}}
      value="2"
    >
      <RadioOption value="1" text="A" />
      <RadioOption value="2" text="B" />
      <RadioOption value="3" text="C" />
    </OptionGroupControl>
  );

  const radioOption = screen.getByLabelText('B');
  expect(radioOption.checked).toBe(true);

  const radioOption2 = screen.getByLabelText('A');
  expect(radioOption2.checked).toBe(false);
});
