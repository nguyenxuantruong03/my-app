import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './product-list.css';
import 'swiper/css/scrollbar';

import "./product-list.css"


// import required modules
import { Grid, Pagination,Autoplay } from 'swiper/modules';

export default function ProductList() {
  return (
    <>
    <Swiper
      slidesPerView={5}
      grid={{
        rows: 2,
        fill:"row"
      }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      modules={[Grid, Pagination,Autoplay]}
      className="container-11 "
    >
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      <SwiperSlide className="container-1">Slide 1</SwiperSlide>
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
    </Swiper>
  </>
  );
}
