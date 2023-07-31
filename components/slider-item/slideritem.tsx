"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Autoplay, Pagination,Scrollbar } from 'swiper/modules';
import SwiperButtons from './swiperButton';
const SliderItem = () => {
    return (
        <>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        scrollbar={{
          hide: true,
        }}
        modules={[Autoplay, Pagination, Scrollbar]}
        className="h-[380px] relative group "
      >
        <SwiperSlide >Slide 1</SwiperSlide>
        <SwiperSlide >Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <div className="absolute top-10 z-10 hidden group-hover:block ">
        <SwiperButtons />
        </div>
        
      </Swiper>
    </>
      );
}
 
export default SliderItem;