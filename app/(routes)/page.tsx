import getProduct from "@/actions/product/get-product";
import MainProduct from "@/components/product/mainproduct";
import SlideItem from "@/components/slider-item/slideitem";
import Suggest from "@/components/suggest/Suggest";

export const revalidate = 0;
const HomePage = async () => {
  const products = await getProduct({ isFeatured: true });
  return (
    <>
      <SlideItem />
      <MainProduct items={products} />
      <Suggest />
    </>
  );
};
export default HomePage;
