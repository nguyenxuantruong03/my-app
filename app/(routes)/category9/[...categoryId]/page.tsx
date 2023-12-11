"use client"
import getColors from "@/actions/get-colors";
import getProduct9 from "@/actions/product/get-product9";
import getSizes from "@/actions/get-size";
import Container from "./../../../../components/ui/container";
import getBillboard from "@/actions/billboard/get-billboard";
import { getCategories9 } from "@/actions/categories/get-categories";
import dynamic from "next/dynamic";
import { Billboard, Color, Product9, Size } from "@/types";
import { useEffect, useMemo, useState } from "react";
import LoadingPageComponent from "@/components/ui/loading";
const ProductCard = dynamic(() => import('@/components/product/productcard-category/productcard'), {ssr: false,})
const BillboardCategory = dynamic(() => import('@/components/slider-item/billboard-category'), {ssr: false,})
const Filter = dynamic(() => import('./components/filter'), {ssr: false,})
const MobileFilter = dynamic(() => import('./components/mobile-filter'), {ssr: false,})
export const revalidate = 7200;
interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}
const CategoryPage: React.FC<CategoryPageProps> = ({
  params,
  searchParams,
}) => {
  const [billboard, setBillboard] = useState<Billboard | null>(null);
  const [product, setProduct] = useState<Product9[]>([]);
  const [size, setSize] = useState<Size[]>([]);
  const [color, setColor] = useState<Color[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("");
  const handleSortChange = (value: string) => {
    setSortOrder(value);
  };

  const sortedProduct = useMemo(() => {
    let sortedArray = [...product];

    switch (sortOrder) {
      case "priceHighToLow":
        sortedArray.sort((a, b) => b.price - a.price);
        break;
      case "priceLowToHigh":
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case "nameAToZ":
        sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameZToA":
        sortedArray.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default order (unsorted)
        break;
    }

    return sortedArray;
  }, [product, sortOrder]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const billboardData = await getBillboard(
          "64baa84a-ed5f-478a-8a92-eed9ced0e786"
        );
        const productData = await getProduct9({
          categoryId: params.categoryId,
          sizeId: searchParams.sizeId,
          colorId: searchParams.colorId,
        });
        const sizeData = await getSizes();
        const colorData = await getColors();

        setBillboard(billboardData);
        setProduct(productData);
        setSize(sizeData);
        setColor(colorData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.categoryId, searchParams.sizeId, searchParams.colorId]);
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
              <div className="">
                <select
                  value={sortOrder}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="mt-2 p-2 border border-gray-300 rounded-md mb-3"
                >
                  <option value="">Lựa chọn </option>
                  <option value="priceHighToLow">Price High to Low</option>
                  <option value="priceLowToHigh">Price Low to High</option>
                  <option value="nameAToZ">Sort Names A-Z</option>
                  <option value="nameZToA">Sort Names Z-A</option>
                </select>
                {sortedProduct.length === 0 && <LoadingPageComponent />}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {sortedProduct.map((item) => (
                    <ProductCard key={item.id} data={item} route="product9" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;