import getColors from "@/actions/get-colors";
import getProduct8 from "@/actions/product/get-product8";
import getSizes from "@/actions/get-size";
import SliderSwipper from "@/components/slider-item/sliderswiper";
import NoResults from "@/components/ui/no-result";
import MobileFilter from "./components/mobile-filter";
import Filter from "./components/filter";
import Container from "./../../../../components/ui/container";
import getBillboard from "@/actions/billboard/get-billboard";
import  ProductCard8  from '@/components/product/productcard-category/productcard-category8';

export const revalidate = 0;
interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const billboard = await getBillboard("3375b5bc-24fb-4e37-adfc-589a35c75d58");
  const product = await getProduct8({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });

  const size = await getSizes();
  const color = await getColors();
  return (
    <div className="bg-white">
      <Container>
        <div className="mt-28 flex items-center justify-center">
          <SliderSwipper data={billboard} />
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-24 my-5">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilter size={size} color={color} />
            {/* Desktop and laptop */}
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={size} />
              <Filter valueKey="colorId" name="Colors" data={color} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {product.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {product.map((item) => (
                  <ProductCard8 key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
