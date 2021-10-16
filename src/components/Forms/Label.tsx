import React from 'react';

import 'assets/scss/component/forms/_label.scss'

type LabelProps = {
  className?: string;
  label: string;
  htmlFor?: string;
}

const FormLabel: React.FC<LabelProps> = ({ children, className, label, htmlFor }) => {
  return (
    <label 
      htmlFor={htmlFor}
      className={`label${className ? ' '+className : ''}`}
    >
      {label ? label : children }
    </label>
  );
}

export default FormLabel;
