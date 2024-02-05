"use client";

import Currency from "@/components/ui/currency";
import toast from "react-hot-toast";
import useLike, { ProductUnion } from "@/hooks/use-like";
import { Heart } from "lucide-react";
import Image from "next/image";
import "./like-item.css";
import { useAuth } from "@clerk/nextjs";
import { debounce } from "lodash";
import IconButton from "@/components/ui/icon-button";
import { useRouter } from "next/navigation";
import CommentStar from "@/components/product/star-comment/star-comment";

interface LikeItemProps {
  data: ProductUnion;
}

const LikeItem: React.FC<LikeItemProps> = ({ data }) => {
  const like = useLike();
  const { userId } = useAuth();
  const router = useRouter();

  const percentPrice = data.price * ((100 - data.percentpromotion) / 100);
  const totalPrice = data.price;

  const debouncedHandleIconClick = debounce((productId: string) => {
    const productToLike = like.items.find((product) => product.id === data.id);

    if (productToLike) {
      const isLiked = like.items.some((item) => item.id === productId);

      if (isLiked) {
        like.removeItem(productId);
      } else {
        like.addItem(productToLike, userId);
      }
    } else {
      toast.error(`Product with id ${productId} not found.`);
    }
  }, 1000); // Adjust the debounce time (in milliseconds) based on your preference

  const handleIconClick = (productId: string) => {
    debouncedHandleIconClick(productId);
  };

  const getRouteBasedOnProductType = (productType: any) => {
    switch (productType) {
      case "ongnhua":
        return "ongnhua";
      case "quat":
        return "quat";
      case "bongden":
        return "bongden";
      case "daydien":
        return "daydien";
      case "ocam":
        return "ocam";
      case "son":
        return "son";
      case "product":
        return "product0";
      case "product1":
        return "product1";
      case "product2":
        return "product2";
      case "product3":
        return "product3";
      case "product4":
        return "product4";
      case "product5":
        return "product5";
      case "product6":
        return "product6";
      case "product7":
        return "product7";
      case "product8":
        return "product8";
      case "product9":
        return "product9";
      case "product10":
        return "product10";
      case "product11":
        return "product11";
      default:
        return ""; // Handle the default case as needed
    }
  };

  const handleClick = () => {
    const route = getRouteBasedOnProductType(
      String(data.productType).toLowerCase()
    );
    // // -----------Log the values for debugging----------------
    // console.log('Product Type:', data.productType);
    // console.log('Route:', route);
    if (route) {
      // Construct the complete URL
      const href = `/${route}/${data.name}`;
      // Use the Link component for navigation
      router.push(href);
    } else {
      console.error("Invalid route:", route);
    }
  };

  return (
    <div className="relative" onClick={handleClick}>
      <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        {/* Images and actions */}
        <div className="aspect-square rounded-xl bg-gray-100">
          <Image
            src={data.images[0].url}
            width="400"
            height="400"
            alt="error"
            className="aspect-square object-cover rounded-md"
            loading="lazy"
          />
          <div className="absolute z-10 right-[25px] bottom-6 ">
            <IconButton
              onClick={() => handleIconClick(data.id)}
              icon={
                <Heart
                  size={20}
                  className={`text-gray-600 ${
                    like.items.some((item) => item.id === data.id)
                      ? "active"
                      : ""
                  }`}
                />
              }
              text="Thả tim"
            />
          </div>
        </div>
        {/* Description */}
        <div>
          <p className="font-semibold text-base truncate">{data.heading}</p>
          <p className="text-sm text-gray-500 truncate">{data.category.name}</p>
        </div>
        <div className="flex items-center justify-between">
          <Currency value={percentPrice} valueold={totalPrice} />
        </div>
        <CommentStar data={data.heading} />
      </div>
      <div className="home-product-item__favorite">
        <span className="ml-1">Giảm {data.percentpromotion}%</span>
      </div>
    </div>
  );
};

export default LikeItem;
