import React from 'react';

import 'assets/scss/component/slider/_slider.scss'

type SliderItemProps = {
  className?: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ children, className }) => {
  return (
    <div className={`slider-item-content${className ? ' '+className : ''}`}>
      { children }
    </div>
  );
}

export default SliderItem;
