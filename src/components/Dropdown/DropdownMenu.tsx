import React from 'react';

type DropdownMenuProps = {
  className?: string;
  style?: React.CSSProperties;
  fRef?: React.ForwardedRef<HTMLDivElement> | null;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, style, className, fRef }) => {
  return (
    <div ref={fRef} className={`dropdown-content overflow-hidden ${className ? ' '+className : ''}`} style={style}>
      <ul className="dropdown-menu">
        { children }
      </ul>
    </div>
  );
}

export default DropdownMenu;
