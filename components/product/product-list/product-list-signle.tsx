"use client";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import {  Product, Product1, Product10, Product11, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9 } from "@/types";
import Image from "next/image";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import PrevNextSwiper from "./prevnextswiper";
import "./product-list.css"
interface ProductListProps {
 data: Product[] | Product1[] |Product2[] |Product3[] | Product4[] 
       |Product5[] |Product6[] |Product7[] |Product8[] |Product9[] |Product10[] |Product11[] ; 

  route: string; // Route for navigation
}
const ProductListSingle: React.FC<ProductListProps> = ({ data, route }) => {
  const router = useRouter();

  const handleClick = (productId: string) => {
    router.push(`/${route}/${productId}`);
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
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
        modules={[FreeMode, Autoplay]}
        className="container-0"
      >
        {data.map((product) => {
          const discountedPrice = product.price * ((100 - product.percentpromotion) / 100);

          return (
            <SwiperSlide key={product.id}>
              <div
                onClick={() => handleClick(product.name)}
                className=" bg-white group cursor-pointer rounded-xl border space-y-4 shadow-inner relative "
              >
                {/* Images and actions */}
                <div className="aspect-square rounded-xl bg-gray-100 relative  ">
                  <Image
                    src={product?.images?.[0].url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-xl "
                    loading="lazy"
                  />
                </div>

                {/* Description */}
                <div className="ml-1 md:ml-3">
                  <p className="font-semibold text-sm md:text-base single-line-ellipsis">{product.heading}</p>
                  <p className="text-xs md:text-sm text-gray-500 single-line-ellipsis">{product.category.name}</p>
                </div>
                <div className="flex items-center justify-between ml-2 md:ml-3 mb-2.5">
                  <Currency valueold={product?.price} value={discountedPrice} />
                </div>
              </div>
              <div className="home-product-item__favorite">
                <span className="ml-1">Giảm {product.percentpromotion}%</span>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="absolute -top-[2rem] md:-top-32 z-10 ">
          <PrevNextSwiper />
        </div>
      </Swiper>
    </>
  );
};

export default ProductListSingle;
