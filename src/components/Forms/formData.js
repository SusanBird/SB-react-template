import { useState } from 'react';

export function useForm(initialData) {
  const [data, setData] = useState(initialData ?? {});

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: getValue(target),
    });
  };

  return [data, handleChange];
}

function getValue(target) {
  const { value, type, checked, form, name } = target;
  if (type === 'checkbox') {
    if (form.querySelectorAll(`[name=${name}]`).length > 1) {
      return new FormData(form).getAll(name);
    }
    return checked;
  }
  return value;
}
