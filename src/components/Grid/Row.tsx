import React from 'react';

import 'assets/scss/component/grid/_row.scss'

type RowProps = {
  className?: string;
  align?: string;
  gapY?: number;
  gapX?: number;
}

const Row: React.FC<RowProps> = ({ children, className, align, gapY, gapX }) => {
  return (
    //TODO: pass gap to children ${gapY ? ' -my-'+gapY : ''} ${gapX ? ' -mx-'+gapX : ''}
    <div className={`row${align ? ' items-'+align : ''}${className ? ' '+className : ''}`}>
      {children}
    </div>
  );
}

export default Row;
