import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper  } from 'swiper/react';
import {  SwiperSlide  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './main.css'
// import required modules
import { FreeMode,Autoplay } from 'swiper/modules';

export default function ProductListSingnle() {
  return (
    <>
      <Swiper
      className='container-0'
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode,Autoplay]}
        
      >
        <SwiperSlide className='container-2'>Slide 1</SwiperSlide>
        <SwiperSlide className='container-2'>Slide 1</SwiperSlide>
        <SwiperSlide className='container-2'>Slide 1</SwiperSlide>
        <SwiperSlide className='container-2'>Slide 1</SwiperSlide>
        <SwiperSlide className='container-2'>Slide 1</SwiperSlide>
        <SwiperSlide className='container-2'>Slide 1</SwiperSlide>
        <SwiperSlide className='container-2'>Slide 1</SwiperSlide>
        <SwiperSlide className='container-2'>Slide 1</SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>

  );
}


