import React, { ReactNode } from 'react';

import { FreeMode, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

import styles from './ChipList.module.css';

type SlideProps = React.ComponentPropsWithoutRef<'ul'> & {
  children: ReactNode[];
  isSlide?: boolean;
};

const ChipList = ({ children, isSlide = false, className }: SlideProps) => {
  if (isSlide) {
    return (
      <Swiper
        freeMode
        mousewheel
        grabCursor
        slideToClickedSlide
        updateOnWindowResize
        wrapperTag="ul"
        slidesPerView="auto"
        modules={[FreeMode, Mousewheel]}
        className={`${styles.slide} ${className}`}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={`item_${index + 1}`} tag="li">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <ul className={`${styles.chipList} ${className}`}>
      {React.Children.map(children, (child, index) => (
        <li key={`item_${index + 1}`}>{child}</li>
      ))}
    </ul>
  );
};

export default ChipList;
