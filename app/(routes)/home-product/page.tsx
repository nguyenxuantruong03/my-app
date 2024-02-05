import getProduct1 from "@/actions/product/get-product1";
import getProduct10 from "@/actions/product/get-product10";
import getProduct2 from "@/actions/product/get-product2";
import getProduct3 from "@/actions/product/get-product3";
import getProduct7 from "@/actions/product/get-product7";
import getProduct8 from "@/actions/product/get-product8";
import FlowerFalling from "@/components/flower-falling/flower-falling";
import dynamic from "next/dynamic";
const MainProduct = dynamic(() => import("@/components/product/mainproduct"), {
  ssr: false,
});
const SlideItem = dynamic(() => import("@/components/slider-item/slideitem"), {
  ssr: false,
});
const Suggest = dynamic(() => import("@/components/suggest/Suggest"), {
  ssr: false,
});
const NewsPage = dynamic(() => import("@/components/news/news"), {
  ssr: false,
});
const MapAPI = dynamic(() => import("@/components/leaflet-map/leaflet-map"), {
  ssr: false,
});
export const revalidate = 86400;
const HomePage = async () => {
  const quat = await getProduct1({ isFeatured: true });
  const daydien = await getProduct3({ isFeatured: true });
  const ongnhua = await getProduct2({ isFeatured: true });
  const bongden = await getProduct10({ isFeatured: true });
  const ocam = await getProduct7({ isFeatured: true });
  const son = await getProduct8({ isFeatured: true });
  return (
    <>
      <FlowerFalling />
        <SlideItem />
        <MainProduct
          quat={quat}
          daydien={daydien}
          ongnhua={ongnhua}
          ocam={ocam}
          bongden={bongden}
          son={son}
        />
        <Suggest />
        <NewsPage />
        <MapAPI />
    </>
  );
};
export default HomePage;
