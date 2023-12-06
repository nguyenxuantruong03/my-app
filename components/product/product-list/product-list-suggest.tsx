"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Grid, Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import "./product-list.css"

// Define the types for different product categories
import { Product2, Product1, Product10, Product3 } from "@/types";

interface ProductListProps {
  data: Product2[] | Product1[] | Product10[] | Product3[]
  productType: "ongnhua" | "quat" | "bongden" | "daydien";
}

const ProductListSuggest: React.FC<ProductListProps> = ({ data, productType }) => {
  const router = useRouter();

  const handleClick = (productId: string) => {
    switch (productType) {
      case "ongnhua":
        router.push(`/ongnhua/${productId}`);
        break;
      case "quat":
        router.push(`/quat/${productId}`);
        break;
      case "bongden":
        router.push(`/bongden/${productId}`);
        break;
      case "daydien":
        router.push(`/daydien/${productId}`);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={5}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        modules={[Grid, Autoplay, FreeMode]}
        className="mySwiper"
      >
        {data.map((product) => {
          const discountedPrice = product.price * ((100 - product.percentpromotion) / 100);

          return (
            <SwiperSlide key={product.id}>
              <div
                onClick={() => handleClick(product.name)}
                className="bg-white group cursor-pointer rounded-xl border space-y-4 shadow-inner relative"
              >
                <div className="aspect-square rounded-xl bg-gray-100 relative">
                  <Image
                    src={product?.images?.[0].url}
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                    fill
                    loading="lazy"
                  />
                </div>
                <div className="ml-3">
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
      </Swiper>
    </>
  );
};

export default ProductListSuggest;
