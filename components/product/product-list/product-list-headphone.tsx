"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./product-list.css";
import "swiper/css/scrollbar";

import { Grid, Autoplay,FreeMode } from "swiper/modules";
import { Headphone, Tivi, Watch } from "@/types";
import Image from "next/image";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import PrevNextSwiper from "./prevnextswiper";

interface HeadphoneListPorps {
  data: Headphone[];
}

const ProductListSingnleHeadphone: React.FC<HeadphoneListPorps> = ({ data }) => {
  const router = useRouter();

  // /product ở đây là file product nằm ở routes nó sẽ chuyển vào [productId]
  const handleClick = (productId: string) => {
    router.push(`/headphone/${productId}`);
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
        modules={[Grid, Autoplay,FreeMode]}
        className="mySwiper"
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
         <div className="absolute top-16 z-10 ">
        <PrevNextSwiper/>
        </div>
      </Swiper>
    </>
  );
};

export default ProductListSingnleHeadphone;
