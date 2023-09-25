
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
  const ipad = await getProduct1({ isFeatured: true });
  const watch = await getProduct3({ isFeatured: true });
  const headphone = await getProduct2({ isFeatured: true });
  const laptop = await getProduct10({ isFeatured: true });
  const tivi = await getProduct7({ isFeatured: true });
  const mouse = await getProduct8({ isFeatured: true });
  return (
    <>
      <SlideItem />
      <MainProduct ipad={ipad} watch={watch} headphone={headphone} tivi={tivi} laptop={laptop} mouse={mouse} />
      <Suggest />
      <NewsPage />
    </>
  );
};
export default HomePage;
