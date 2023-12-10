"use client";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import HeadingEffect from "../uis-home/HeadingEffect";
import { ChevronsRight } from 'lucide-react';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SellingProduct = () => {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleSlideChange = (swiper:any) => {
      setActiveIndex(swiper.activeIndex);
    };
  
    const handleClickProduct = () => {
      router.push("/home-product");
    };
  
    useEffect(() => {
      // Initialize the active index when the component mounts
      setActiveIndex(0);
    }, []);
  return (
    <div>
      <div className="cover-image ">
        <div className=" space-x-1 px-2 py-10 md:space-x-10 md:px-5 xl:px-80">
          <Swiper
            freeMode={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1920: { slidesPerView: 3, spaceBetween: 20 }
            }}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide className={`p-1 md:p-4 ${activeIndex >= 0 ? 'active-slide' : ''}`}>
                <HeadingEffect heading="Bóng đèn"/>
                <p className="text-base px-2 xl:px-5 2xl:px-24 ">Chuyên cung cấp các sản phẩm Điện Quang, MPE, Rạng Đông và có hợp tác với các thương hiệu giá ưa đãi,bảo hành chính hãng công ty.</p>
                
                <p onClick={handleClickProduct} className='hover:text-gray-600 cursor-pointer text-lg text-[#e53350] font-bold mt-4 flex items-center justify-center'> Xem thêm <ChevronsRight className="pl-1 w-8" /></p> 
                <div className="float-right font-bold text-4xl md:text-7xl text-[#eaeaea]"> 01 </div>
            </SwiperSlide>

            <SwiperSlide className={`p-1 md:p-4 ${activeIndex >= 1 ? 'active-slide' : ''}`}>
                
                <HeadingEffect heading="Ống nhựa"/>
                <p className="text-base px-2 xl:px-5 2xl:px-24 ">Chuyên cung cấp các loại ống điện,ống bình mình,ống hoa sen, ống thường mua số lượng lớn có chiết khấu cao và xuất hóa đơn đỏ.</p>

                <p onClick={handleClickProduct} className='hover:text-gray-600 cursor-pointer text-lg text-[#e53350] font-bold mt-4 flex items-center justify-center'> Xem thêm <ChevronsRight className="pl-1 w-8" /></p> 
                <div className="float-right font-bold text-4xl md:text-7xl text-[#eaeaea]"> 02 </div>
            </SwiperSlide>

            <SwiperSlide className={`p-1 md:p-4 ${activeIndex >= 2 ? 'active-slide' : ''}`}>
                
                <HeadingEffect heading="Dây điện"/>
                <p className="text-base px-2 xl:px-5 2xl:px-24 ">Chuyên cung cấp các loại dây điện cadivi,daphaco cho nhà ở và cho công ty có tải trọng lớn. Có bán lẻ và bán sỉ.</p>

                <p onClick={handleClickProduct} className='hover:text-gray-600 cursor-pointer text-lg text-[#e53350] font-bold mt-4 flex items-center justify-center'> Xem thêm <ChevronsRight className="pl-1 w-8" /></p> 
                <div className="float-right font-bold text-4xl md:text-7xl text-[#eaeaea]"> 03 </div>
            </SwiperSlide>

            <SwiperSlide className={`p-1 md:p-4 ${activeIndex >= 3 ? 'active-slide' : ''}`}>
                
                <HeadingEffect heading="Quạt"/>
                <p className="text-base px-2 xl:px-5 2xl:px-24 ">Chuyên cung cấp quạt senko treo, để bàn hoặc quạt công nghiệp cho các công ty và bảo hành 1 năm cho các sản phẩm từ công ty.</p>

                <p onClick={handleClickProduct} className='hover:text-gray-600 cursor-pointer text-lg text-[#e53350] font-bold mt-4 flex items-center justify-center'> Xem thêm <ChevronsRight className="pl-1 w-8" /></p> 
                <div className="float-right font-bold text-4xl md:text-7xl text-[#eaeaea]"> 04 </div>
            </SwiperSlide>

            <SwiperSlide className={`p-1 md:p-4 ${activeIndex >= 4 ? 'active-slide' : ''}`}>
                
                <HeadingEffect heading="Ổ cắm"/>
                <p className="text-base px-2 xl:px-5 2xl:px-24 ">Chuyên cung cấp ổ cắm sino,panasonic và các loại ổ cắm chống cháy đủ loại bên cạnh đó còn có cp sino, mặt nạ sino, và tủ chống cháy sino...</p>

                <p onClick={handleClickProduct} className='hover:text-gray-600 cursor-pointer text-lg text-[#e53350] font-bold mt-4 flex items-center justify-center'> Xem thêm <ChevronsRight className="pl-1 w-8" /></p> 
                <div className="float-right font-bold text-4xl md:text-7xl text-[#eaeaea]"> 05 </div>
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SellingProduct;
