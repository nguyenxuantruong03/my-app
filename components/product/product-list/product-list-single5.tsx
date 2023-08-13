"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import { Product5 } from "@/types";
import Image from "next/image";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import PrevNextSwiper from "../prevnextswiper";

interface ProductListPorps {
  data: Product5[];
}
const ProductListSingnle: React.FC<ProductListPorps> = ({ data }) => {
  const router = useRouter();

  // /product ở đây là file product nằm ở routes nó sẽ chuyển vào [productId]
  const handleClick = (productId: string) => {
    router.push(`/product5/${productId}`);
  };

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="container-0"
      >
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              onClick={() => handleClick(product.id)}
              className=" bg-white group cursor-pointer rounded-xl border space-y-4 shadow-inner relative"
            >
              {/* Images and actions */}
              <div className="aspect-square rounded-xl bg-gray-100 relative  ">
                <Image
                  src={product?.images?.[0].url}
                  fill
                  alt="Image"
                  className="aspect-square object-cover rounded-md"
                />
              </div>

              {/* Description */}
              <div className="ml-3">
                <p className="font-semibold text-lg">{product.name}</p>
                <p className="text-sm text-gray-500">{product.category.name}</p>
              </div>
              <div className="flex items-center justify-between ml-3">
                <Currency valueold={product?.priceold} value={product?.price} />
              </div>
            </div>
            <div className="home-product-item__favorite">
              <span className="ml-1">Giảm {product.percentpromotion}%</span>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute -top-32 z-10 ">
          <PrevNextSwiper />
        </div>
      </Swiper>
    </>
  );
};

export default ProductListSingnle;
