import React from 'react';

type GroupTextProps = {
  className?: string;
  text?: string;
}

const FormGroupText: React.FC<GroupTextProps> = ({ children, className, text }) => {
  return (
    <div className={`form-group-text${className ? ' '+className : ''}`}>
      { text ? text : children }
    </div>
  );
}

export default FormGroupText;
