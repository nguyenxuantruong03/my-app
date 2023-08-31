"use client"
import { Product ,Headphone, Ipad, Laptop, Mouse, Product1, Product10, Product11, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9, Tivi, Watch } from "@/types";
import Currency from "../ui/currency";
import { CheckCircle2, ShoppingBasket, ShoppingCart } from "lucide-react";
import  Button  from "../ui/button";
import Image from "next/image";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface InfoProductProps{
  data: Product | Product1 | Product2 | Product3 | Product4 | Product5 |Product6 | Product7 | Product8 | Product9 | Product10 | Product11 | Ipad |Headphone | Laptop |Tivi |Watch |Mouse;
}
const InfoProduct:React.FC<InfoProductProps> = ({data}) => {
    const cart = useCart();
    const [quantity, setQuantity] = useState(1)
    const router = useRouter()
   
    const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();
      const productWithQuantity = { ...data, quantity };
  
      const existingCartItem = cart.items.find((item) => item.id === data.id);
  
      if (existingCartItem) {
        cart.updateQuantity(data.id, existingCartItem.quantity + quantity);
        toast.success("Sản phẩm đã được cập nhật số lượng trong giỏ hàng.");
      } else {
        cart.addItem(productWithQuantity, quantity);
        toast.success("Sản phẩm đã thêm vào giỏ hàng.");
      }
    };

    const onAddtoPushCart: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();
      const productWithQuantity = { ...data, quantity,selectedWarranty: cart.getSelectedItemWarranty(data.id), };
  
      const existingCartItem = cart.items.find((item) => item.id === data.id);
  
      if (existingCartItem) {
        cart.updateQuantity(data.id, existingCartItem.quantity + quantity);
        toast.success("Sản phẩm đã được cập nhật số lượng trong giỏ hàng.");
      } else {
        cart.addItem(productWithQuantity, quantity);
        toast.success("Sản phẩm đã thêm vào giỏ hàng.");
      }
      router.push("/cart")
    };

  
    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
      };
    
      const decrementQuantity = () => {
        if (quantity > 1) {
          setQuantity((prevQuantity) => prevQuantity - 1);
        }
      };
      const discountedPrice = data.price * ((100 - data.percentpromotion) / 100);
    return ( 
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name} </h1>
           
     

            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold"> Dung lượng: </h3>
                    <div>
                        {data?.size?.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold">Màu: </h3>
                    <div className="h-6 w-6 rounded-full border border-gray-600"
                        style={{backgroundColor: data?.color?.value}}
                    />
                </div>
            </div>
            <div className="flex mt-5 gap-x-4">
            <h3 className="font-semibold"> Tính năng nổi bật: </h3>
                <div>
                    {data?.heading}
                     </div>
            </div>
            <div className="flex mt-5 gap-x-4">
            <h3 className="font-semibold"> Thông tin: </h3>
                <div>
                    {data?.description}
                     </div>
            </div>
            <div className="mt-5 flex items-center gap-x-3">
        {/* Quantity increment and decrement buttons */}
        <button
          onClick={decrementQuantity}
          className="px-2 py-1 border rounded-md border-gray-300"
        >
          -
        </button>
        <span className="text-xl mx-1">{quantity}</span>
        <button
          onClick={incrementQuantity}
          className="px-2 py-1 border rounded-md border-gray-300"
        >
          +
        </button>
      </div>
      <div className="mt-5 flex gap-x-4">
        <h3 className="font-semibold"> Tổng giá: </h3>
        <p className="text-lg text-gray-900">
          <Currency
            value={data.price * quantity} // Ensure data.price is a number
            valueold={discountedPrice * quantity} 
          />
        </p>
      </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddtoCart} className=" gap-x-2">
                    <ShoppingBasket />
                </Button>
                <Button onClick={onAddtoPushCart} className="w-full " >
                  <div className="flex text-lg items-center gap-x-2 pl-[11.25rem] ">
                   Mua ngay
                    <ShoppingCart />
                    </div>
                </Button>
            </div>
            {/* Ưa đãi thêm */}
            <div className="w-full h-52 shadow-lg mt-9 rounded-lg space-y-1 overflow-hidden ">
                <div className="h-10 bg-gray-300 flex items-center ">
                    <h1 className="ml-3 font-bold "> Ưa đãi thêm </h1>
                </div>
                <div className="flex items-center">
                <CheckCircle2 className="text-green-500 p-1 gap-x-5" />
                  <h1 className="text-sm"> Giảm thêm tới 1% cho thành viên member (áp dụng tùy sản phẩm)</h1>
                </div>

                <div className="flex items-center">
                <CheckCircle2 className="text-green-500 p-1 gap-x-5" />
                <Image
                width="70"
                height="20"
                src="/../public/images/vp-bank-icon-ssth5.webp" 
                alt="123"
                className="object-cover -mt-[5px]"
                />
                  <h1 className="ml-1 text-sm ">Ưa đãi đến 500k khi mở the VP Bank</h1>
                </div>

                <div className="flex items-center">
                <CheckCircle2 className="text-green-500 p-1 gap-x-5" />
                <Image
                width="40"
                height="40"
                src="/../public/images/kredivo.webp" 
                alt="123"
                className="object-cover -mt-[5px]"
                />
                  <h1 className="ml-1 text-sm ">Giảm thêm 5% tối đa 200.000đ khi thanh toán qua Kredivo</h1>
                </div>

                <div className="flex items-center">
                <CheckCircle2 className="text-green-500 p-1 gap-x-5" />
                <Image
                width="30"
                height="30"
                src="/../public/images/vib.webp" 
                alt="123"
                className="object-cover -mt-[5px]"
                />
                  <h1 className="ml-1 text-sm ">Mở thẻ tín dụng VIB - Nhận voucher 200.00đ khi mua hàng</h1>
                </div>

                <div className="flex items-center">
                <CheckCircle2 className="text-green-500 p-1 gap-x-5" />
                <Image
                width="45"
                height="45"
                src="/../public/images/ocb.webp" 
                alt="123"
                className="object-cover -mt-[5px]"
                />
                  <h1 className="ml-1 text-sm ">Giảm 500.000đ đơn hàng từ 10 triệu (trừ các sản phẩm từ Apple)</h1>
                </div>

                <div className="flex items-center">
                <CheckCircle2 className="text-green-500 p-1 gap-x-5" />
                <Image
                width="70"
                height="20"
                src="/../public/images/vp-bank-icon-ssth5.webp" 
                alt="123"
                className="object-cover -mt-[5px]"
                />
                  <h1 className="ml-1 text-sm ">Giảm 250k đơn hàng từ 6.5 triệu (trừ các sản phẩm Apple)</h1>
                </div>
            </div>
        </div>
     );
}
 
export default InfoProduct;