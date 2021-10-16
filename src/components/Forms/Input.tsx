import React from 'react';

import 'assets/scss/component/forms/_input.scss'

type InputProps = {
  className?: string;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormInput: React.FC<InputProps> = ({ className, id, name, value, placeholder, size, type, disabled, readonly, required, onChange }) => {
  return (
    <input 
      className={`input input-${size}${className ? ' '+className : ''}${disabled ? ' is-disabled' : ''}`}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      disabled={disabled}
      readOnly={readonly}
      required={required}
      onChange={onChange}
    />
  );
}

FormInput.defaultProps = {
  size: 'md',
  type: 'text'
}

export default FormInput;
