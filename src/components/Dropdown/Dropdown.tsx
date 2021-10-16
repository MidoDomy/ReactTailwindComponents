import React, { useState, useRef } from 'react';

import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';

import 'assets/scss/component/dropdown/_dropdown.scss'

type DropdownProps = {
  className?: string;
  btnText?: string;
  position?: 'left' | 'right';
}

const Dropdown: React.FC<DropdownProps> = ({ children, className, btnText, position }) => {

  const [active, setActive] = useState(false);
  let contentRef = useRef<HTMLDivElement | null>(null);

  function toggleDropdown() {
    setActive(!active);
  }

  return (
    <div
      className={`dropdown dropdown-${position}${className ? ' '+className : ''}`}
    >
      { btnText ? 
        <DropdownToggle btnText={btnText} onClick={toggleDropdown}></DropdownToggle>
        :
        <DropdownToggle btnText="Add btn text" onClick={toggleDropdown}></DropdownToggle>
      }
      <DropdownMenu fRef={contentRef} style={{ display: active ? 'block' : 'none' }}>
        { children }
      </DropdownMenu>
    </div>
  );
}

Dropdown.defaultProps = {
  position: 'left'
}

export default  Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Content: DropdownMenu,
  Item: DropdownItem
});
