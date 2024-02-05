"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Currency from "@/components/ui/currency";
import "../product-list/product-list.css";
import {
  Product,
  Product1,
  Product10,
  Product11,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
  Product9,
} from "@/types";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";
import IconButton from "@/components/ui/icon-button";
import { Expand, Heart, ShoppingCart } from "lucide-react";
import useLike from "@/hooks/use-like";
import { debounce } from "lodash";
import CommentStar from "../star-comment/star-comment";

interface ProductCardProps {
  data:
    | Product
    | Product1
    | Product2
    | Product3
    | Product4
    | Product5
    | Product6
    | Product7
    | Product8
    | Product9
    | Product10
    | Product11;
  route: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ data, route }) => {
  const previewModal = usePreviewModal();
  const router = useRouter();
  const cart = useCart();
  const [quantity, setQuantity] = useState(1);
  const { userId } = useAuth();
  const like = useLike();
  const { addItem, removeItem, items } = useLike();

  //Handle add like và sử dụng debounce sau 1 giay mới được add được thêm vào giỏ hàng ngăn chặn hành vi spam
  const debouncedHandleIconClick = debounce((productId: string) => {
    const isLiked = items.some((item) => item.id === productId);

    if (isLiked) {
      removeItem(productId);
    } else {
      addItem(data, userId);
    }
  }, 1000);

  const handleIconClick = (productId: string) => {
    debouncedHandleIconClick(productId);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    const productWithQuantity = {
      ...data,
      quantity,
      selectedWarranty: cart.getSelectedItemWarranty(data.id),
    };

    const existingCartItem = cart.items.find((item) => item.id === data.id);

    if (existingCartItem) {
      cart.updateQuantity(data.id, existingCartItem.quantity + quantity);
      toast.success("Sản phẩm đã được cập nhật số lượng trong giỏ hàng.");
    } else {
      cart.addItem(productWithQuantity, quantity, userId); // Pass the userId here
    }
  };

  const handleClick = () => {
    router.push(`/${route}/${data?.name}`);
  };

  const discountedPrice = data.price * ((100 - data.percentpromotion) / 100);

  return (
    <div className="relative">
      <div
        onClick={handleClick}
        className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      >
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
          <div className="opacity-0 group-hover:opacity-100 transition w-full pr-6 top-40 absolute">
            <div className="flex gap-x-6 justify-center">
              <IconButton
                onClick={onPreview}
                icon={<Expand size={20} className="text-gray-600" />}
                text="Mở rộng"
              />
              <IconButton
                onClick={onAddtoCart}
                icon={<ShoppingCart size={20} className="text-gray-600" />}
                text="Thêm mới"
              />
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
        </div>
        {/* Description */}
        <div>
          <p className="font-semibold text-base single-line-ellipsis">
            {data.heading}
          </p>
          <p className="text-sm text-gray-500 single-line-ellipsis">
            {data.category.name}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Currency valueold={data?.price} value={discountedPrice} />
        </div>
        <CommentStar data={data.heading} />
      </div>
      <div className="home-product-item__favorite">
        <span className="ml-1">Giảm {data.percentpromotion}%</span>
      </div>
    </div>
  );
};

export default ProductCard;
