"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import Currency from "@/components/ui/currency";
import "../product-list/product-list.css";
import {Product, Product1, Product10, Product11, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9 } from "@/types";

interface ProductCardProps {
  data: Product | Product1 |Product2 |Product3 | Product4 |Product5 |Product6 |Product7 |Product8 |Product9 |Product10 |Product11 ; 
  route: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ data, route }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${route}/${data?.name}`);
  };

  const discountedPrice = data.price * ((100 - data.percentpromotion) / 100);

  return (
    <div className="relative">
      <div onClick={handleClick} className="bg-white cursor-pointer rounded-xl border p-3 space-y-4">
        {/* Images and actions */}
        <div className="aspect-square rounded-xl bg-gray-100">
          <Image
            src={data?.images?.[0].url}
            width="500"
            height="500"
            alt="Image"
            className="aspect-square object-cover rounded-md"
            loading="lazy"
          />
        </div>
        {/* Description */}
        <div className="ml-1 md:ml-3">
          <p className="font-semibold text-base single-line-ellipsis">{data.heading}</p>
          <p className="text-sm text-gray-500 single-line-ellipsis">{data.category.name}</p>
        </div>
        <div className="flex items-center justify-between">
          <Currency valueold={data?.price} value={discountedPrice} />
        </div>
      </div>
      <div className="home-product-item__favorite">
        <span className="ml-1">Giảm {data.percentpromotion}%</span>
      </div>
    </div>
  );
};

export default ProductCard;
