import React from 'react';

import 'assets/scss/component/grid/_col.scss'

type ColProps = {
  className?: string;
}

const Col: React.FC<ColProps> = ({ children, className }) => {
  return (
    <div className={`col${className ? ' '+className : ''}`}>
      {children}
    </div>
  );
}

export default Col;
