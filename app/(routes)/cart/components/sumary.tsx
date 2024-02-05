"use client";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/buttoncheckin";
import Buttonn from "@/components/ui/button";
import { Trash } from "lucide-react";
import Currencyonevalue from "@/components/ui/currencyonevalue";
import "./checkout.css";
import useSeeWarning from "@/hooks/use-see-warning";
import useSeeDanger from "@/hooks/use-see-danger";
import ModalProviderNoneData from "@/providers/modal-provider-none-data";

const Sumary = () => {
  const cart = useCart();
  const items = useCart((state) => state.items);
  const [totalCoins, setTotalCoins] = useState<number>(0);

  const warningmodal = useSeeWarning();
  const dangermodal = useSeeDanger();
 
  const onRemoveAll = () => {
    cart.removeSelectedItems();
    toast.success("Tất cả lựa chọn trong giỏ hàng đã được xóa.");
  };

  const selectedItems = items.filter((item) =>
    cart.selectedItems.includes(item.id)
  );

  //Total Coins
  useEffect(() => {
    // Load totalCoins from the server using GET request
    axios.get("/api/wheelSpin").then((response) => {
      setTotalCoins(response.data.totalCoins);
    });
  }, []);

  const totalAmounts = selectedItems.reduce(
    (total, item) => {
      const itemInCart = items.find((cartItem) => cartItem.id === item.id);
      const quantity = itemInCart?.quantity || 1;

      const itemTotalPrice =
        ((item.price * (100 - item.percentpromotion)) / 100) * quantity;
      const itemTotalPriceOld = item.price * quantity;

      return {
        totalPrice: total.totalPrice + itemTotalPrice,
        totalPriceOld: total.totalPriceOld + itemTotalPriceOld,
      };
    },
    { totalPrice: 0, totalPriceOld: 0 }
  );
  // Tiền bảo hiểm
  const totalWarrantyAmount = selectedItems.reduce((total, item) => {
    const itemInCart = items.find((cartItem) => cartItem.id === item.id);
    const quantity = itemInCart?.quantity || 1;

    const selectedWarranty = cart.selectedWarranties[item.id];
    const warrantyAmount = selectedWarranty ? parseFloat(selectedWarranty) : 0;

    return total + warrantyAmount * quantity;
  }, 0);

  const totalAmount = totalAmounts.totalPrice + totalWarrantyAmount;
  const TotalAmountCoins = totalAmount - totalCoins;

  const onCheckout =() => {
    try {
      if (TotalAmountCoins > 50000) {
        dangermodal.onOpen()
      } else {
        warningmodal.onOpen();
      }
    } catch (error) {
      toast.error("An error occurred during checkout.");
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <div className="flex  items-center justify-between">
        <div className="flex items-center gap-x-3">
          <input
            className="w-4 h-4"
            type="checkbox"
            checked={selectedItems.length > 0 && cart.selectAll}
            onChange={() => cart.toggleSelectAll()}
          />
          <h2 className="text-lg font-medium text-gray-900">Chọn tất cả</h2>
        </div>
        <Buttonn
          onClick={onRemoveAll}
          disabled={selectedItems.length === 0}
          className="justify-around flex"
        >
          <Trash />
        </Buttonn>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Tổng tiền</div>
          <Currency value={totalAmount} valueold={totalAmounts.totalPriceOld} />
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Xu</div>
          <Currencyonevalue value={-totalCoins} />
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            Số tiền cần thanh toán
          </div>
          <Currencyonevalue value={TotalAmountCoins} />
        </div>
      </div>

      <Button disabled={selectedItems.length === 0} onClick={onCheckout}>
        <div className="container w-[350px] hover:w-[360px] md:w-[650px] lg:w-[1050px]  mt-6 md:max-w-3xl lg:max-w-7xl group md:hover:w-[700px] lg:hover:w-[1150px] ">
          <div className="left-side">
            <div className="card">
              <div className="card-line"></div>
              <div className="buttons"></div>
            </div>
            <div className="post">
              <div className="post-line"></div>
              <div className="screen">
                <div className="dollar">$</div>
              </div>
              <div className="numbers"></div>
              <div className="numbers-line2"></div>
            </div>
          </div>
          <div className="right-side">
            <div className="new">Thanh toán</div>

            <svg
              viewBox="0 0 451.846 451.847"
              height="512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow"
            >
              <path
                fill="#cfcfcf"
                data-old_color="#000000"
                className="active-path"
                data-original="#000000"
                d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
              ></path>
            </svg>
          </div>
        </div>
      </Button>
      <ModalProviderNoneData />
    </div>
  );
};

export default Sumary;
