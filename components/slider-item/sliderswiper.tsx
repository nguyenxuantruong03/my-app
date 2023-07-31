"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Autoplay, Pagination,Scrollbar } from 'swiper/modules';
import SwiperButtons from './swiperButton';
import { Billboard } from '@/types';
import Image from 'next/image';

interface SliderSwiperProps{
    data: Billboard
}
const SliderSwipper:React.FC<SliderSwiperProps> = ({data}) => {
    return ( 
        <div className="w-[750px] h-[377px] rounded-md shadow-md ">
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
        <SwiperSlide >
            <div className=" overflow-hidden rounded-xl md:aspect-[2/1]  bg-cover">
            <Image 
             src={data?.imagebillboard?.[0].url}
             fill
             alt="Image"
             className="aspect-square object-cover rounded-md"
            />
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className=" overflow-hidden rounded-xl md:aspect-[2/1]  bg-cover">
            <Image 
             src={data?.imagebillboard?.[1].url}
             fill
             alt="Image"
             className="aspect-square object-cover rounded-md"
            />
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className=" overflow-hidden rounded-xl md:aspect-[2/1]  bg-cover">
            <Image 
             src={data?.imagebillboard?.[2].url}
             fill
             alt="Image"
             className="aspect-square object-cover rounded-md"
            />
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className=" overflow-hidden rounded-xl md:aspect-[2/1]  bg-cover">
            <Image 
             src={data?.imagebillboard?.[3].url}
             fill
             alt="Image"
             className="aspect-square object-cover rounded-md"
            />
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className=" overflow-hidden rounded-xl md:aspect-[2/1]  bg-cover">
            <Image 
             src={data?.imagebillboard?.[4].url}
             fill
             alt="Image"
             className="aspect-square object-cover rounded-md"
            />
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className=" overflow-hidden rounded-xl md:aspect-[2/1]  bg-cover">
            <Image 
             src={data?.imagebillboard?.[5].url}
             fill
             alt="Image"
             className="aspect-square object-cover rounded-md"
            />
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className=" overflow-hidden rounded-xl md:aspect-[2/1]  bg-cover">
            <Image 
             src={data?.imagebillboard?.[6].url}
             fill
             alt="Image"
             className="aspect-square object-cover rounded-md"
            />
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className=" overflow-hidden rounded-xl md:aspect-[2/1]  bg-cover">
            <Image 
             src={data?.imagebillboard?.[7].url}
             fill
             alt="Image"
             className="aspect-square object-cover rounded-md"
            />
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className=" overflow-hidden rounded-xl md:aspect-[2/1]  bg-cover">
            <Image 
             src={data?.imagebillboard?.[8].url}
             fill
             alt="Image"
             className="aspect-square object-cover rounded-md"
            />
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className=" overflow-hidden rounded-xl md:aspect-[2/1]  bg-cover">
            <Image 
             src={data?.imagebillboard?.[9].url}
             fill
             alt="Image"
             className="aspect-square object-cover rounded-md"
            />
            </div>
        </SwiperSlide>
        

        <div className="absolute top-10 z-10 hidden group-hover:block ">
        <SwiperButtons />
        </div>
        
      </Swiper>
        </div>
     );
}
 
export default SliderSwipper;