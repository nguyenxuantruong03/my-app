
import getProduct1 from "@/actions/product/get-product1";
import getProduct10 from "@/actions/product/get-product10";
import getProduct2 from "@/actions/product/get-product2";
import getProduct3 from "@/actions/product/get-product3";
import getProduct7 from "@/actions/product/get-product7";
import getProduct8 from "@/actions/product/get-product8";
import NewsPage from "@/components/news/news";
import MainProduct from "@/components/product/mainproduct";
import SlideItem from "@/components/slider-item/slideitem";
import Suggest from "@/components/suggest/Suggest";

export const revalidate = 0;
const HomePage = async () => {
  const quat = await getProduct1({ isFeatured: true });
  const daydien = await getProduct3({ isFeatured: true });
  const ongnhua = await getProduct2({ isFeatured: true });
  const bongden = await getProduct10({ isFeatured: true });
  const ocam = await getProduct7({ isFeatured: true });
  const son = await getProduct8({ isFeatured: true });
  return (
    <>
      <SlideItem />
      <MainProduct quat={quat} daydien={daydien} ongnhua={ongnhua} ocam={ocam} bongden={bongden} son={son} />
      <Suggest />
      <NewsPage />
    </>
  );
};
export default HomePage;
