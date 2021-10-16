import React from 'react';

import 'assets/scss/component/forms/_textarea.scss'

type TextareaProps = {
  className?: string;
  id?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  value?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const FormTextarea: React.FC<TextareaProps> = ({ className, id, name, size, value, placeholder, rows, cols, disabled, readonly, required, onChange }) => {
  return (
    <textarea 
      className={`textarea textarea-${size}${className ? ' '+className : ''}${disabled ? ' is-disabled' : ''}`}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      disabled={disabled}
      readOnly={readonly}
      required={required} 
      onChange={onChange}
    />
  );
}

FormTextarea.defaultProps = {
  size: 'md',
  rows: 5
}

export default FormTextarea;
