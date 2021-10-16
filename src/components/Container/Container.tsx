import React from 'react';

import 'assets/scss/component/container/_container.scss'

type ContainerProps = {
  className?: string;
  fluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, className, fluid }) => {
  return (
    <div className={`${fluid ? 'container-fluid' : 'container'}${className ? ' '+className : ''}`}>
      {children}
    </div>
  );
}

export default Container;
