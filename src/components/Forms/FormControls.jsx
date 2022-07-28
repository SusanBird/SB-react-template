import styles from './FormControls.css';
// import classNames from 'classnames';

function FormControl({ label, children }) {
  return (
    <label className={styles.FormControl}>
      <Label text={label} />
      {children}
    </label>
  );
}

function Label({ text }) {
  return <span className="label-text">{text}</span>;
}

export function CheckboxControl({ label, text, ...rest }) {
  return (
    <div className={styles.FormControl}>
      <Label text={label} />
      <label className={styles.CheckboxLabel}>
        <input type="checkbox" {...rest} />
        {text}
      </label>
    </div>
  );
}

export function InputControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <input {...rest} />
    </FormControl>
  );
}

export function SelectControl({
  label,
  children,
  ...rest
}) {
  return (
    <FormControl label={label}>
      <select {...rest}>{children}</select>
    </FormControl>
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <textarea {...rest}></textarea>
    </FormControl>
  );
}

export function FormButton({ children }) {
  return (
    <button className={styles.FormButton}>
      {children}
    </button>
  );
}
