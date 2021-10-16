import React from 'react';

type CollapseContentProps = {
  className?: string;
  content?: string;
  style?: React.CSSProperties;
  fRef?: React.ForwardedRef<HTMLDivElement> | null;
}

const CollapseContent: React.FC<CollapseContentProps> = ({ children, style, className, content, fRef }) => {
  return (
    <div ref={fRef} style={style} className={`collapse-content-outer overflow-hidden${className ? ' '+className : ''}`}>
      <div className="collapse-content">
        { content ? content : children }
      </div>
    </div>
  );
}

export default CollapseContent;
