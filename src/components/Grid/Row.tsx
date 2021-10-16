import React from 'react';

import 'assets/scss/component/grid/_row.scss'

type RowProps = {
  className?: string;
}

const Row: React.FC<RowProps> = ({ children, className }) => {
  return (
    <div className={`row${className ? ' '+className : ''}`}>
      {children}
    </div>
  );
}

export default Row;
