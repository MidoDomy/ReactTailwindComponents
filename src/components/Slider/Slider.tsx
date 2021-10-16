import React, { useState } from 'react';

import SliderItem from './SliderItem';
import Icon from 'components/Icon/Icon';

import 'assets/scss/component/slider/_slider.scss';

type SliderProps = {
  className?: string;
  controls?: boolean;
  dots?: boolean;
  iconPrev?: string;
  iconNext?: string;
}

const Slider: React.FC<SliderProps> = ({ children, className, controls, dots, iconPrev, iconNext }) => {

  let [activeIndex, setActiveIndex] = useState(0);

  const childrenItems = React.Children.toArray(children)
  const childrenCount = childrenItems.length - 1

  function SlidePrev() {
    activeIndex !== 0 ? setActiveIndex(activeIndex -= 1) : setActiveIndex(childrenCount);
  }

  function SlideNext() {
    childrenCount !== activeIndex ? setActiveIndex(activeIndex += 1) : setActiveIndex(0);
  }

  function SetActive(index: number) {
    index !== undefined && index !== null && setActiveIndex(index);
  }

  return (
    <div className={`slider${className ? ' '+className : ''}`}>
      <div className="slider-container">
        { childrenItems.map((child, index) => (
            <div className={`slider-item ${activeIndex === index ? 'opacity-100' : 'opacity-0' }`} key={index}>
              {child}
            </div>
          ))
        }
      </div>

      {/* slider controls */}
      { controls &&
        <>
          <button 
            className="slider-btn slider-btn-prev"
            onClick={SlidePrev} 
          >
            { iconPrev && <Icon size={40} name={iconPrev} /> }
          </button>

          <button 
            className="slider-btn slider-btn-next transform origin-center rotate-180"
            onClick={SlideNext}
          >
            { iconNext && <Icon size={40} name={iconNext} /> }
          </button>
        </>
      }

      {/* dots */}
      { dots &&
        <div className="slider-dots">
          { childrenItems.map((child, index) => (
              <button onClick={() => SetActive(index)} className={`slider-dot ${activeIndex === index ? 'active' : '' }`} key={index}></button>
            ))
          }
        </div>
      }
    </div>
  );
}

Slider.defaultProps = {
  iconPrev: 'arrow-left',
  iconNext: 'arrow-left'
}

export default Object.assign(Slider, {
  Item: SliderItem
});
