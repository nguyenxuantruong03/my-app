"use client"
import getColors from "@/actions/get-colors";
import getProduct3 from "@/actions/product/get-product3";
import getSizes from "@/actions/get-size";
import Container from "./../../../../components/ui/container";
import getBillboard from "@/actions/billboard/get-billboard";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { Billboard, Color, Product3, Size } from "@/types";
import LoadingPageComponent from "@/components/ui/loading";
import PreviewModal from "@/components/modal/preview.modal";
import MobileFilter from "@/components/filter-category/mobile-filter";
import Filter from "@/components/filter-category/filter";
import {ArrowDownAZ,ArrowDownWideNarrow,ArrowDownZA,ArrowUpNarrowWide,Percent} from "lucide-react";
import { SortButton } from "@/components/ui/sortButton";
import PriceRangeCategory from "@/components/ui/price-change-ranger-category";
const ProductCard = dynamic(() => import('@/components/product/productcard-category/productcard'), {ssr: false,})
const BillboardCategory = dynamic(() => import('@/components/slider-item/billboard-category'), {ssr: false,})
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


const sortButtons = [
  {
    label: "Giá cao đến thấp",
    sortType: "priceHighToLow",
    icon: <ArrowDownWideNarrow className="w-5 h-5" />,
  },
  {
    label: "Giá thấp đến cao",
    sortType: "priceLowToHigh",
    icon: <ArrowUpNarrowWide className="w-5 h-5 " />,
  },
  {
    label: "Tên A đến Z",
    sortType: "nameAToZ",
    icon: <ArrowDownAZ className="w-5 h-5 " />,
  },
  {
    label: "Tên Z đến A",
    sortType: "nameZToA",
    icon: <ArrowDownZA className="w-5 h-5" />,
  },
  {
    label: "Khuyến mãi hot",
    sortType: "percentPromotionHighToLow",
    icon: <Percent className="w-5 h-5" />,
  },
];

const CategoryPage: React.FC<CategoryPageProps> = ({
  params,
  searchParams,
}) => {
  const [billboard, setBillboard] = useState<Billboard | null>(null);
  const [product, setProduct] = useState<Product3[]>([]);
  const [size, setSize] = useState<Size[]>([]);
  const [color, setColor] = useState<Color[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [maxPriceInDatas, setMaxPriceInDatas] = useState<number>(0);

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  // Function to filter products based on price range
  const filterProductsByPrice = (products: Product3[]) => {
    return products.filter(
      (product) => product.price * ((100 - product.percentpromotion) / 100) >= minPrice && product.price * ((100 - product.percentpromotion) / 100) <= maxPrice
    );
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
      case "percentPromotionHighToLow":
        sortedArray.sort((a, b) => b.percentpromotion - a.percentpromotion);
        break;
      default:
        break;
    }
    return sortedArray;
  }, [product, sortOrder]);

  const handleSortChange = (value: string) => {
    setSortOrder(value);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const billboardData = await getBillboard(
          "6bd8ea52-78dc-4c2d-9e09-b76b2085f44d"
        );
        const productData = await getProduct3({
          categoryId: params.categoryId,
          sizeId: searchParams.sizeId,
          colorId: searchParams.colorId,
        });
        const sizeData = await getSizes();
        const colorData = await getColors();
        
        // Tìm giá cao nhất trong danh sách sản phẩm
        const highestPrice = productData.reduce(
          (max, product) =>
            product.price * ((100 - product.percentpromotion) / 100) + 1000000 >
            max
              ? product.price * ((100 - product.percentpromotion) / 100) + 1000000
              : max,
          0
        );
        setMaxPrice(Math.floor(highestPrice));
        setMaxPriceInDatas(Math.floor(highestPrice))
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
        <div className="mt-28 flex items-center justify-center px-2.5">
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
              <div className="mb-4">
                  <PriceRangeCategory
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    maxPriceInDatas= {maxPriceInDatas}
                    onPriceChange={handlePriceChange}
                  />
                </div>
                <div className="flex justify-start items-center mb-4 w-full overflow-x-auto ">
                  <div className="flex space-x-2">
                    {sortButtons.map((button, index) => (
                      <SortButton
                        key={index}
                        onClick={() => handleSortChange(button.sortType)}
                        active={sortOrder === button.sortType}
                        label={button.label}
                        icon={button.icon}
                      />
                    ))}
                  </div>
                </div>
                {sortedProduct.length === 0 && <LoadingPageComponent />}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filterProductsByPrice(sortedProduct).map((item) => (
                    <ProductCard key={item.id} data={item} route="product3" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <PreviewModal />
      </Container>
    </div>
  );
};

export default CategoryPage;