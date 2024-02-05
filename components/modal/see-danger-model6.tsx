"use client"
import { AlertTriangle } from "lucide-react";
import Modal from "./modal";
import useSeeDanger from "@/hooks/use-see-danger";
import useCart from "@/hooks/use-cart";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Button from "@/components/ui/button";

const DangerModal = () => {
  const cart = useCart();
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const [totalCoins, setTotalCoins] = useState<number>(0);
  const [rotation, setRotation] = useState<number>(0);
  const router = useRouter()
  const handleCheckoutcash =() =>{
      router.push("/checkoutcash")
  }
  const resetTotalCoins = async () => {
    try {
      const response = await axios.get("/api/wheelSpin");
      const currentRotation = response.data.latestRotation;
      // await axios.delete("/api/wheelSpin");
      
      let newRotation = currentRotation;
    const paymentAmount = totalAmount - totalCoins;

    if (paymentAmount >= 1000000) {
      newRotation += 2;
    } else if (paymentAmount >= 500000 && paymentAmount < 1000000) {
      newRotation += 1;
    } else {
      // Less than 500,000, no change in rotation
      newRotation += 0;
    }
      setRotation(newRotation);
      
      await axios.post("/api/wheelSpin", {coin:"0",rotation:newRotation });
      setTotalCoins(0);
    } catch (error) {
      toast.error("Error resetting total coins");
    }
  };
  useEffect(() => {
    if (searchParams.get("payment-success")) {
      toast.success("Payment completed");
      cart.removeSelectedItems();
      resetTotalCoins(); // Reset totalCoins on successful payment
    }
    if (searchParams.get("payment-fail")) {
      toast.error("Something went wrong");
    }
  }, [searchParams]);

  const selectedItems = items.filter((item) =>
    cart.selectedItems.includes(item.id)
  );

  //Total Coins
  useEffect(() => {
    // Load totalCoins from the server using GET request
    axios.get("/api/wheelSpin").then((response) => {
      setTotalCoins(response.data.totalCoins);
      setRotation(response.data.latestRotation);
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
  const TotalAmountCoins =  Math.ceil(totalAmount - totalCoins);

  const totalAmountOld = totalAmounts.totalPriceOld + totalWarrantyAmount;
  const totalAmountOldCoin =  Math.ceil(totalAmountOld - totalCoins);
  
  const selectedQuantities = selectedItems.map((item) => {
    const itemInCart = items.find((cartItem) => cartItem.id === item.id);
    return itemInCart?.quantity || 1;
  });

  const onCheckout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedProductIds = cart.selectedItems;
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: selectedProductIds,
          pricesales: TotalAmountCoins,
          quantity: selectedQuantities,
          priceold: totalAmountOldCoin,
          warranty: totalWarrantyAmount,
        }
      );
      
      window.location = response.data.url;
    } catch (error) {
      toast.error("An error occurred during checkout.");
    }
  };
  const danger = useSeeDanger();
  return (
    <Modal open={danger.isOpen} onClose={danger.onClose}>
      <div className="w-full">
        <div className=" bg-yellow-400 rounded-md font-bold p-2  ">
          <h1 className="ml-[120px] md:ml-[320px] flex items-center font-bold">Lưu ý <AlertTriangle className="w-5 h-5 ml-1"/> </h1>
        </div>

        <p className="mt-4">
          Khi thanh toán quý khách tránh làm mới trang và thoát trang bằng nút quay lại trên chuột , nếu muốn quay lại thì đợi load xong, sau đó rồi 
          ấn mũi tên để quay trở lại trang đảm bảo sản phẩm sẽ không bị mất khi chưa ghi thông tin thanh toán.
          Nếu khách hàng không muốn trả tiền online có thể liên lạc  <span className="text-red-400 font-semibold">0352261103</span> trả lời nhanh chóng cho quý khách trả tiền mặt.
        </p>
        <div className="mt-4 text-end">
          <span onClick={danger.onClose} className="underline text-lg mr-3 cursor-pointer">Back</span>
        <Button onClick={onCheckout}>Thanh toán visa</Button>
        <Button className="ml-3" onClick={handleCheckoutcash}>Thanh toán tiền mặt</Button>
        </div>
      </div>
    </Modal>
  );
};

export default DangerModal;
