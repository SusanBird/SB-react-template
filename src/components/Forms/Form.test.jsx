import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import {
  InputControl,
  FormButton,
  SelectControl,
  CheckboxControl,
  TextAreaControl,
  OptionGroupControl,
  CheckboxOption,
  RadioOption,
} from '../../components/Forms/FormControls.jsx';
import Form from './Form.jsx';

function Test({ data, onSubmit }) {
  return (
    <Form data={data} onSubmit={onSubmit}>
      <InputControl label="input control" name="inputControl" />

      <SelectControl
        label="select control"
        name="selectControl"
        type="number"
      >
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </SelectControl>

      <CheckboxControl
        label="checkbox control"
        text="checkbox text"
        name="checkboxControl"
      />

      <TextAreaControl
        label="textarea control"
        name="textareaControl"
      />

      <OptionGroupControl
        label="radio group control"
        name="radioGroupControl"
      >
        <RadioOption value="1" text="A" />
        <RadioOption value="2" text="B" />
        <RadioOption value="3" text="C" />
      </OptionGroupControl>

      <OptionGroupControl
        label="checkbox group control"
        name="checkboxGroupControl"
      >
        <CheckboxOption value="1" text="monday" />
        <CheckboxOption value="2" text="tuesday" />
        <CheckboxOption value="3" text="wednesday" />
        <CheckboxOption value="4" text="thursday" />
        <CheckboxOption value="5" text="friday" />
      </OptionGroupControl>

      <FormButton />
    </Form>
  );
}

const submitted = (mockFn) => mockFn.mock.calls[0][0];

test('Control changes update data', async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();
  render(<Test onSubmit={handleSubmit} />);

  const input = screen.getByLabelText('input control');
  await user.type(input, 'ic value');

  const selectControl = screen.getByLabelText('select control');
  await user.selectOptions(selectControl, '2');

  const checkboxControl = screen.getByLabelText('checkbox text');
  await user.click(checkboxControl);

  const textarea = screen.getByLabelText('textarea control');
  await user.type(textarea, 'ta value');

  const radioOption = screen.getByLabelText('B');
  await user.click(radioOption);

  const checkboxOption1 = screen.getByLabelText('tuesday');
  await user.click(checkboxOption1);

  const checkboxOption2 = screen.getByLabelText('thursday');
  await user.click(checkboxOption2);

  await user.click(screen.getByRole('button'));
  expect(submitted(handleSubmit)).toEqual({
    inputControl: 'ic value',
    selectControl: '2',
    checkboxControl: true,
    textareaControl: 'ta value',
    radioGroupControl: '2',
    checkboxGroupControl: ['2', '4'],
  });
});

test('Initial data is preserved', async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();
  const data = {
    inputControl: 'ic value',
    selectControl: '2',
    checkboxOption: true,
    textareaControl: 'ta value',
    radioGroupControl: '2',
  };
  render(<Test data={data} onSubmit={handleSubmit} />);

  const input = screen.getByLabelText('input control');
  await user.clear(input);
  await user.type(input, 'new value');

  await user.click(screen.getByRole('button'));
  expect(submitted(handleSubmit)).toEqual({
    inputControl: 'new value',
    selectControl: '2',
    checkboxOption: true,
    textareaControl: 'ta value',
    radioGroupControl: '2',
  });
});

test('Custom class name on form', async () => {
  render(<Form className="test-class" />);
  const form = screen.getByRole('form');
  expect(form.className).toBe('test-class');
});

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
