import React, { useState, useRef } from 'react';

import CollapseToggle from './CollapseToggle';
import CollapseContent from './CollapseContent';

type CollapseItemProps = {
  className?: string;
  heading?: string;
  content?: string;
}

const CollapseItem: React.FC<CollapseItemProps> = ({ children, className, heading, content }) => {

  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");

  let contentRef = useRef<HTMLDivElement | null>(null);

  function toggleCollapse() {
    setActive(!active);
    setHeight(active ? "0px" : `${contentRef.current!.scrollHeight}px`);
  }

  return (
    <div
      className={`collapse-item ${active ? 'is-open': 'is-closed'}${className ? ' '+className : ''}`}
    >
      { heading ? 
        <CollapseToggle heading={heading} onClick={toggleCollapse}></CollapseToggle>
        : 
        <CollapseToggle heading="Add heading" onClick={toggleCollapse}></CollapseToggle>
      }

      { children ? 
        <CollapseContent fRef={contentRef} style={{maxHeight: height}}>{ children }</CollapseContent>
        : 
        <CollapseContent fRef={contentRef} style={{maxHeight: height}} content={content}></CollapseContent>
      }
    </div>
  );
}

export default CollapseItem;
