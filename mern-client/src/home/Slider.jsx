import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div>
        <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="src/assets/book-Slider-images/book1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/book-Slider-images/book2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/book-Slider-images/book3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/book-Slider-images/book4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/book-Slider-images/book5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/book-Slider-images/book5.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider