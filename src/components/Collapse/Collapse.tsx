import React from 'react';

import CollapseItem from './CollapseItem';
import CollapseToggle from './CollapseToggle';
import CollapseContent from './CollapseContent';

import 'assets/scss/component/collapse/_collapse.scss'

type CollapseProps = {
  className?: string;
  accordion?: boolean;
}

const Collapse: React.FC<CollapseProps> = ({ children, className, accordion }) => {
  return (
    <div
      className={`collapse${accordion ? ' accordion' : ''}${className ? ' '+className : ''}`}
    >
      { children }
    </div>
  );
}

export default Object.assign(Collapse, {
  Item: CollapseItem,
  Btn: CollapseToggle,
  Content: CollapseContent
});
