"use client";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart, { ProductUnion } from "@/hooks/use-cart";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CartItemProps {
  data: ProductUnion;
}

type ProductWithQuantity = ProductUnion & { quantity: number };

const isProductWithQuantity = (item: ProductUnion): item is ProductWithQuantity => {
  return 'quantity' in item;
};

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  const [quantity, setQuantity] = useState<number>(
    isProductWithQuantity(data) ? data.quantity : 1
  );

  const incrementQuantity = () => {
    if (isProductWithQuantity(data)) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      cart.updateQuantity(data.id, newQuantity); // Update the quantity in the cart
    }
  };

  const decrementQuantity = () => {
    if (
      (isProductWithQuantity(data)) &&
      quantity > 1
    ) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      cart.updateQuantity(data.id, newQuantity);
    }
  };

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  const totalPrice = data.price * quantity;
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
                <p className="text-gray-500">
                        {data.color.name}
                </p>
                <p className="text-gray-500 ml-4 border-1 border-gray-200">
                        {data.size.name}
                </p>
          </div>
          <div className="mt-1 flex text-sm">
            {/* ... */}
            {/* Quantity increment and decrement buttons */}
            <button
              onClick={decrementQuantity}
              className="px-2 py-1 border rounded-md border-gray-300"
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="px-2 py-1 border rounded-md border-gray-300"
            >
              +
            </button>
          </div>
          <Currency value={totalPrice} valueold={data.priceold}/>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
