import React from 'react';

import 'assets/scss/component/grid/_row.scss'

type RowProps = {
  className?: string;
  align?: string;
}

const Row: React.FC<RowProps> = ({ children, className, align }) => {
  return (
    <div className={`row${align ? ' items-'+align : ''}${className ? ' '+className : ''}`}>
      {children}
    </div>
  );
}

export default Row;
