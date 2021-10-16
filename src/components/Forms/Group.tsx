import React from 'react';

type GroupProps = {
  className?: string;
}

const FormGroup: React.FC<GroupProps> = ({ children, className }) => {
  return (
    <div className={`form-group${className ? ' '+className : ''}`}>
      { children }
    </div>
  );
}

export default FormGroup;
