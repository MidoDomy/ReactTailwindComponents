import React from 'react';

import 'assets/scss/component/forms/_select.scss'

interface OptionsArray {
  value: number | string;
  name: string;
}

type SelectProps = {
  className?: string;
  id?: string;
  name?: string;
  options: OptionsArray[];
  showOptions?: number;
  selected?: number | string;
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const FormSelect: React.FC<SelectProps> = ({ className, id, name, options, showOptions, selected, size, block, disabled, required, onChange }) => {
  return (
    <select
      className={`select select-${size}${block ? ' select-block' : ''}${disabled ? ' is-disabled' : ''}${className ? ' '+className : ''}`}
      name={name}
      id={id} 
      value={selected}
      size={showOptions}
      disabled={disabled}
      required={required}
      onChange={onChange}
    >
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>{option.name}</option>
        )
      })}
    </select>
  );
}

FormSelect.defaultProps = {
  size: 'md'
}

export default FormSelect;
