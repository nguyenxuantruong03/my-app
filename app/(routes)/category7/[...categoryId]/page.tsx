import getColors from "@/actions/get-colors";
import getProduct7 from "@/actions/product/get-product7";
import getSizes from "@/actions/get-size";
import NoResults from "@/components/ui/no-result";
import MobileFilter from "./components/mobile-filter";
import Filter from "./components/filter";
import Container from "./../../../../components/ui/container";
import getBillboard from "@/actions/billboard/get-billboard";
import BillboardCategory from "@/components/slider-item/billboard-category";
import ProductCard from "@/components/product/productcard-category/productcard";
import { getCategories7 } from "@/actions/categories/get-categories";

export const revalidate = 0;
interface CategoryPageProps {
  params: {
    name: string;
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
  const billboard = await getBillboard("13c6b333-d51d-454d-85b0-5d975465017e");
  const product = await getProduct7({
    categoryId: params.name,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });

  const size = await getSizes();
  const color = await getColors();
  return (
    <div className="bg-white">
      <Container>
        <div className="mt-28 flex items-center justify-center">
        <BillboardCategory data={billboard} />
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
                  <ProductCard key={item.id} data={item} route="product7"/>
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


type Props={
  params:{
    categoryId: string
  }
}
export async function generateMetadata({ params: { categoryId }}:Props) {
  const categories = await getCategories7();
  const category = categories.find((category) => category.name);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: "Ổ cắm, mặt ổ cắm"
  };
}