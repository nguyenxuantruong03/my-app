import getProductHeadphone from "@/actions/product/get-product-headphone";
import getProductIpad from "@/actions/product/get-product-ipad";
import getProductLaptop from "@/actions/product/get-product-laptop";
import getProductMouse from "@/actions/product/get-product-mouse";
import getProductTivi from "@/actions/product/get-product-tivi";
import getProductWatch from "@/actions/product/get-product-watch";
import NewsPage from "@/components/news/news";
import MainProduct from "@/components/product/mainproduct";
import SlideItem from "@/components/slider-item/slideitem";
import Suggest from "@/components/suggest/Suggest";
import Container from "@/components/ui/container";

export const revalidate = 0;
const HomePage = async () => {
  const ipad = await getProductIpad({ isFeatured: true });
  const watch = await getProductWatch({ isFeatured: true });
  const headphone = await getProductHeadphone({ isFeatured: true });
  const laptop = await getProductLaptop({ isFeatured: true });
  const tivi = await getProductTivi({ isFeatured: true });
  const mouse = await getProductMouse({ isFeatured: true });
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
