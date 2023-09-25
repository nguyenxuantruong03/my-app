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
import PrevNextSwiper from "./prevnextswiper";
import "./product-list.css"

// Define the types for different product categories
import { Product2, Product1, Product10, Product3 } from "@/types";

interface ProductListProps {
  data: Product2[] | Product1[] | Product10[] | Product3[]
  productType: "headphone" | "ipad" | "laptop" | "watch";
}

const ProductList: React.FC<ProductListProps> = ({ data, productType }) => {
  const router = useRouter();

  const handleClick = (productId: string) => {
    switch (productType) {
      case "headphone":
        router.push(`/headphone/${productId}`);
        break;
      case "ipad":
        router.push(`/ipad/${productId}`);
        break;
      case "laptop":
        router.push(`/laptop/${productId}`);
        break;
      case "watch":
        router.push(`/watch/${productId}`);
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
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-lg">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.category.name}</p>
                </div>
                <div className="flex items-center justify-between ml-3">
                  <Currency valueold={product?.price} value={discountedPrice} />
                </div>
              </div>
              <div className="home-product-item__favorite">
                <span className="ml-1">Giảm {product.percentpromotion}%</span>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="absolute top-16 z-10 ">
          <PrevNextSwiper />
        </div>
      </Swiper>
    </>
  );
};

export default ProductList;
