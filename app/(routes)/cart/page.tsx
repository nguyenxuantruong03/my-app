"use client";
import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import Sumary from "./components/sumary";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

const CartPage = () => {
  const cart = useCart();
  const router = useRouter();
  const handleBuyNow = () => {
    router.push("/home-product");
  };
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-white mt-16 mx-auto max-w-7xl pl-2 pt-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-black"> Giỏ hàng</h1>
      <div className="mt-12 lg:grid-cols-12 lg:items-start gap-x-12 lg:col-span-7">
        {cart.items.length === 0 && (
           <>
           <div className="flex justify-center">
             <Image src="/images/no-cart.png" alt="" width="108" height="98" />
           </div>
           <div className="flex justify-center my-2">
             <p className="text-neutral-500">Giỏ hàng của bạn còn trống</p>
           </div>
           <div className="flex justify-center my-2">
             <Button onClick={handleBuyNow}> Mua ngay</Button>
           </div>
         </>
        )}
        <ul>
          {cart.items.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </ul>
        <Sumary />
      </div>
    </div>
  );
};

export default CartPage;
