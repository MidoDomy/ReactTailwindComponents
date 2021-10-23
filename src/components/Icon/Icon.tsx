import React from 'react';

import 'assets/scss/component/icon/_icon.scss'

type IconProps = {
  className?: string;
  icon: string;
  alt?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ className, icon, alt, size }) => {
  const src = require(`assets/icons/${icon}.svg`).default;

  return (
    <img 
      className={`icon icon-${icon}${className ? ' '+className : ''}`}
      src={src} 
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
