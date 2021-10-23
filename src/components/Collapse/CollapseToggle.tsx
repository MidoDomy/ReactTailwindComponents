import React from 'react';

import Icon from 'components/Icon/Icon';

type CollapseToggleProps = {
  className?: string;
  heading?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CollapseToggle: React.FC<CollapseToggleProps> = ({ children, className, heading, onClick }) => {
  return (
    <button
      className={`collapse-btn${className ? ' '+className : ''}`}
      onClick={onClick}
    >
      { heading ? heading : children }

      <Icon icon="plus" />
      <Icon icon="minus" />
    </button>
  );
}

export default CollapseToggle;
