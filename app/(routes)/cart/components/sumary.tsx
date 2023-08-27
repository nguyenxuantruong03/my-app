"use client"
import useCart from "@/hooks/use-cart";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";

const Sumary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const cart = useCart();
  

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Paymemt completed");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams, removeAll]);

  const selectedItems = items.filter(item => cart.selectedItems.includes(item.id));

const totalAmounts = selectedItems.reduce(
  (total, item) => {
    const itemInCart = items.find(cartItem => cartItem.id === item.id);
    const quantity = itemInCart?.quantity || 1; // Use quantity from item in cart, default to 1

    const itemTotalPrice = item.price * ((100 - item.percentpromotion) / 100) * quantity;
    const itemTotalPriceOld = item.price * quantity;

    return {
      totalPrice: total.totalPrice + itemTotalPrice,
      totalPriceOld: total.totalPriceOld + itemTotalPriceOld,
    };
  },
  { totalPrice: 0, totalPriceOld: 0 }
);

  // const onCheckout = async () => {
  //   const reponse = await axios.post(
  //     `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
  //     {
  //       productIds: items.map((item) => item.id),
  //     }
  //   );

  //   window.location = reponse.data.url;
  // };
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <div className="flex gap-x-3 items-center">
        <input
      className="w-4 h-4"
        type="checkbox"
        checked={cart.selectAll}
        onChange={() => cart.toggleSelectAll()}
      />
      <h2 className="text-lg font-medium text-gray-900">Chọn tất cả</h2>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Tổng tiền</div>
          <Currency value={totalAmounts.totalPrice}  valueold ={totalAmounts.totalPriceOld}/>
        </div>
      </div>
      <Button
        // onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6"
      >
        Thanh toán
      </Button>
    
    </div>
  );
};

export default Sumary;
