"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import SwiperButtons from './swiperButton';
import { Billboard } from '@/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';

interface SliderSwiperProps {
  data: Billboard;
}

const SliderSwiper: React.FC<SliderSwiperProps> = ({ data }) => {
  const renderSlides = () => {
    return data?.imagebillboard?.map((image, index) => (
      <SwiperSlide key={index}>
        <div className="overflow-hidden rounded-xl md:aspect-[2/1] bg-cover">
          <Image
            src={image.url}
            fill
            alt="Image"
            className="aspect-square object-cover rounded-md"
          />
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <div className="w-[750px] h-[377px] rounded-md shadow-md">
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
        className="h-[380px] relative group"
      >
        {renderSlides()}
        <div className="absolute top-10 z-10 hidden group-hover:block">
          <SwiperButtons />
        </div>
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
