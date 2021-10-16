import React from 'react';

import 'assets/scss/component/icon/_icon.scss'

type IconProps = {
  className?: string;
  name: string;
  alt?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ className, name, alt, size }) => {
  const icon = require(`assets/icons/${name}.svg`).default;

  return (
    <img 
      className={`icon icon-${name}${className ? ' '+className : ''}`}
      src={icon} 
      alt={alt}
      width={size}
      height={size}
    />
  );
}

Icon.defaultProps = {
  alt: ''
}

export default Icon;
