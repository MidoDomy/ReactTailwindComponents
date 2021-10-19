import React from 'react';

import 'assets/scss/component/grid/_col.scss'

type ColProps = {
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
}

const Col: React.FC<ColProps> = ({ children, className, cols }) => {
  return (
    <div className={`col${cols ? ' col-'+cols : ''}${className ? ' '+className : ''}`}>
      {children}
    </div>
  );
}

export default Col;
