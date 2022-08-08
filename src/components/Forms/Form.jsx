import { Children, cloneElement } from 'react';
import { useForm } from './formData.js';

export default function Form({
  data: initialData,
  onSubmit,
  className,
  role = 'form',
  children,
}) {
  const [data, handleChange] = useForm(initialData);
  return (
    <form
      role={role}
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(data);
      }}
    >
      {Children.map(children, (child) =>
        cloneElement(child, {
          value: data[child.props.name],
          onChange: handleChange,
        })
      )}
    </form>
  );
}
