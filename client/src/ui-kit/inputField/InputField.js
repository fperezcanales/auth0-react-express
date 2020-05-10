/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function InputField({
  id,
  label,
  name,
  error,
  onChange,
  onBlur,
  value,
  helperText,
  disabled,
  type,
}) {
  return (
    <section style={{ margin: '20px 20px 40px 20px' }}>
      <label htmlFor={name} style={error ? { color: 'red' } : {}}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        type={type}
      />
      <label name={`${id}Error`} id={id} style={error ? { color: 'red' } : { color: 'darkgrey'}} >
        {helperText}
      </label>
    </section>
  );
}

InputField.defaultProps = {
  value: '',
  onChange: () => {},
  isRequired: false,
};
