/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './InputField.css';

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
    <section style={{ margin: '20px', display: 'flex', flexDirection: 'column-reverse' }}>
      <label className={error ? 'error_text' : 'information_text'} id={id}>
        {helperText}
      </label>
      <input
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        type={type}
        className="input_text_field"
        autoComplete="off"
      />
      <label htmlFor={name} className='label_text' id={id}>
        {label}
      </label>
    </section>
  );
}

InputField.defaultProps = {
  value: '',
  onChange: () => { },
  isRequired: false,
};
