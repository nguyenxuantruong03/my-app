"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButtons from './swiperButton';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Billboard } from '@/types';
import Image from 'next/image';

interface BillboardCategoryProps {
  data: Billboard | null;
}

const BillboardCategory: React.FC<BillboardCategoryProps> = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <div className="w-[750px] h-[377px] rounded-md shadow-md relative">
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
        {data.imagebillboard?.map((image, index) => (
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
        ))}
        
        <div className="absolute top-10 z-10 hidden group-hover:block">
          <SwiperButtons />
        </div>
      </Swiper>
      
      <div className="absolute bottom-[10rem] right-[20%] left-[30%] z-50 text-4xl font-bold hidden md:block text-white text-opacity-50">
        <div>
          <p>{data.label}</p>
        </div>
      </div>
    </div>
  );
};

export default BillboardCategory;
