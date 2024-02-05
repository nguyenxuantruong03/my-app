"use client";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
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
import Image from "next/image";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import "./product-list.css";
import { useAuth } from "@clerk/nextjs";
import useLike from "@/hooks/use-like";
import toast from "react-hot-toast";
import { debounce } from "lodash";
import { Expand, Heart, ShoppingCart } from "lucide-react";
import usePreviewModal from "@/hooks/use-preview-modal";
import { MouseEventHandler, useState } from "react";
import useCart from "@/hooks/use-cart";
import IconButton from "@/components/ui/icon-button";
import CommentStar from "../star-comment/star-comment";
interface ProductListProps {
  data:
    | Product[]
    | Product1[]
    | Product2[]
    | Product3[]
    | Product4[]
    | Product5[]
    | Product6[]
    | Product7[]
    | Product8[]
    | Product9[]
    | Product10[]
    | Product11[];

  route: string; // Route for navigation
}
const ProductListSingleSuggest: React.FC<ProductListProps> = ({
  data,
  route,
}) => {
  const router = useRouter();
  const like = useLike();
  const cart = useCart();
  const [quantity, setQuantity] = useState(1);
  const { userId } = useAuth();
  const previewModal = usePreviewModal();

  const handleClick = (productId: string) => {
    router.push(`/${route}/${productId}`);
  };

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1025: { slidesPerView: 5, spaceBetween: 20 },
          1400: { slidesPerView: 5, spaceBetween: 20 },
        }}
        modules={[FreeMode, Autoplay]}
        className="container-0"
      >
        {data.map((product) => {
          const discountedPrice =
            product.price * ((100 - product.percentpromotion) / 100);

          const debouncedOnAddtoCart = debounce(
            (event: React.MouseEvent<HTMLButtonElement>) => {
              event.stopPropagation();
              const productWithQuantity = {
                ...product,
                quantity,
                selectedWarranty: cart.getSelectedItemWarranty(product.id),
              };

              const existingCartItem = cart.items.find(
                (item) => item.id === product.id
              );

              if (existingCartItem) {
                cart.updateQuantity(
                  product.id,
                  existingCartItem.quantity + quantity
                );
                toast.success(
                  "Sản phẩm đã được cập nhật số lượng trong giỏ hàng."
                );
              } else {
                cart.addItem(productWithQuantity, quantity, userId);
              }
            },
            1000 // Adjust the debounce time (in milliseconds) based on your preference
          );

          const onAddtoCart: React.MouseEventHandler<HTMLButtonElement> = (
            event
          ) => {
            debouncedOnAddtoCart(event);
          };

          const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
            event.stopPropagation();

            previewModal.onOpen(product);
          };

          //Handle add like và sử dụng debounce sau 1 giay mới được add được thêm vào giỏ hàng ngăn chặn hành vi spam
          const debouncedHandleIconClick = debounce((productId: string) => {
            const productToLike = data.find(
              (product) => product.id === productId
            );

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
          return (
            <SwiperSlide key={product.id}>
              <div
                onClick={() => handleClick(product.name)}
                className=" bg-white group cursor-pointer rounded-xl border space-y-4 shadow-inner relative "
              >
                {/* Images and actions */}
                <div className="aspect-square rounded-xl bg-gray-100 relative  ">
                  <Image
                    src={product?.images?.[0].url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-xl "
                    loading="lazy"
                  />
                </div>

                {/* Description */}
                <div className="ml-1 md:ml-3">
                  <p className="font-semibold text-sm md:text-base single-line-ellipsis">
                    {product.heading}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 single-line-ellipsis">
                    {product.category.name}
                  </p>
                </div>
                <div className="flex items-center justify-between ml-2 md:ml-3 mb-2.5">
                  <Currency valueold={product?.price} value={discountedPrice} />
                </div>
                <CommentStar data={product.heading} />
              </div>
              <div className="home-product-item__favorite">
                <span className="ml-1">Giảm {product.percentpromotion}%</span>
              </div>
              <div className="transition w-full px-6 top-24 left-0 md:top-2 md:left-12 absolute">
                <div className="flex gap-x-2 justify-center">
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
                    onClick={() => handleIconClick(product.id)}
                    icon={
                      <Heart
                        size={20}
                        className={`text-gray-600 ${
                          like.items.some((item) => item.id === product.id)
                            ? "active"
                            : ""
                        }`}
                      />
                    }
                    text="Thả tim"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductListSingleSuggest;
