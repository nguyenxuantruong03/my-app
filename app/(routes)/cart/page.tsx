"use client"
import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import Sumary from "./components/sumary";
import { useEffect, useState } from "react";

const CartPage = () => {
    const cart =useCart()
   /* Đoạn mã đang sử dụng các hook useState và useEffect từ React để quản lý một biến trạng thái
    được gọi là `isMounted`. */
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
      setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
      }
    return ( 
        <div className="bg-white mt-16 mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black"> Giỏ hàng</h1>
                    <div className="mt-12 lg:grid-cols-12 lg:items-start gap-x-12 lg:col-span-7">
                                {cart.items.length ===0 &&(
                                    <p className="text-neutral-500">
                                        No items added to cart
                                    </p>
                                )}
                                <ul>
                                {cart.items.map((item)=>(
                                    <CartItem key={item.id} data={item}/>
                                ))} 
                                </ul>
                        <Sumary />
                    </div>
        </div>
     );
}
 
export default CartPage;