import React from 'react';

type DropdownItemProps = {
  className?: string;
  text?: string;
  href?: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, className, text, href }) => {
  return (
    <li className={`dropdown-item ${className ? ' '+className : ''}`}>
      <a 
        href={href}
      >
        { text ? text : children }
      </a>
    </li>
  );
}

DropdownItem.defaultProps = {
  href: '#'
}

export default DropdownItem;
