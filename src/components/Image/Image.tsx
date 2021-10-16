import React from 'react';

import 'assets/scss/component/image/_image.scss'

type ImageProps = {
  className?: string;
  src?: string | undefined;
  alt?: string;
  size?: number;
}

const Image: React.FC<ImageProps> = ({ className, src, alt, size }) => {
  
  let image: string | undefined;

  if (src && src.substring(0, 4) === 'http') {
    image = src;
  }
  else {
    image = require(`assets/images/${src}`).default;
  }

  return (
    <img 
      className={`image${className ? ' '+className : ''}`}
      src={image} 
      alt={alt}
      width={size}
      height={size}
    />
  );
}

Image.defaultProps = {
  src: 'undefined.png',
  alt: ''
}

export default Image;
