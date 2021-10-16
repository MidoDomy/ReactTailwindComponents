import React from 'react';

import 'assets/scss/component/banner/_banner-img.scss'

import Image from 'components/Image/Image';

type BannerImageProps = {
  className?: string;
  src?: string | undefined;
  alt?: string;
  cover?: boolean;
}

const BannerImage: React.FC<BannerImageProps> = ({ className, src, alt, cover }) => {
  return (
    <div className={`w-full h-full banner-img-container${className ? ' '+className : ''}`} >
      <Image 
        className={`banner-img${cover ? '-cover' : ''}`} 
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default BannerImage;
