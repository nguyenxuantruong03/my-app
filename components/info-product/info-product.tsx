"use client"
import { Product, Product1, Product10, Product11, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9 } from "@/types";
import Currency from "../ui/currency";
import { Banknote ,Shield , ShoppingBasket, ShoppingCart,Award,Tag,CreditCard,BadgePercent} from "lucide-react";
import  Button  from "../ui/button";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {Infoproductcolor} from "@/components/color/color"
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";

interface InfoProductProps{
  data: Product | Product1 | Product2 | Product3 | Product4 | Product5 |Product6 | Product7 | Product8 | Product9 | Product10 | Product11 
}
const InfoProduct:React.FC<InfoProductProps> = ({data}) => {
    const cart = useCart();
    const [quantity, setQuantity] = useState(1)
    const router = useRouter()
    const {userId} = useAuth()

    const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();
      const productWithQuantity = { ...data, quantity };
  
      const existingCartItem = cart.items.find((item) => item.id === data.id);
  
      if (existingCartItem) {
        cart.updateQuantity(data.id, existingCartItem.quantity + quantity);
        toast.success("Sản phẩm đã được cập nhật số lượng trong giỏ hàng.");
      } else {
        cart.addItem(productWithQuantity, quantity, userId); // Pass the userId here
      }
    };

    const onAddtoPushCart: MouseEventHandler<HTMLButtonElement> = (event) => {
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
      router.push("/cart");
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
            <h1 className="text-3xl font-bold text-gray-900">{data.heading} </h1>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold"> Kích cỡ: </h3>
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
                    {data?.description}
            </div>
            <div className="mt-5 flex items-center gap-x-3">
        {/* Quantity increment and decrement buttons */}
        <div className="flex mt-5 gap-x-4">
            <h3 className="font-semibold"> Số lượng: </h3>
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
        </div>

      <div className="mt-5 flex gap-x-4">
        <h3 className="font-semibold"> Tổng giá: </h3>
        <p className="text-lg text-gray-900">
          <Currency
            value={discountedPrice * quantity} 
            valueold={data.price * quantity} // Ensure data.price is a number
          />
        </p>
      </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddtoCart} className=" gap-x-2">
                    <ShoppingBasket />
                </Button>
                <Button onClick={onAddtoPushCart} className="w-full " >
                  <div className="flex text-lg items-center gap-x-2 pl-[2.25] md:pl-[11.25rem] ">
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
                <BadgePercent  className={Infoproductcolor.textcolor} />
                  <h1 className="text-sm"> Chiết khấu cao mua hàng với giá sỉ</h1>
                </div>

                <div className="flex items-center">
                <Banknote  className={Infoproductcolor.textcolor} />
                  <h1 className="ml-1 text-sm ">Ưa đãi lớn khi thanh toán trên 2 triệu</h1>
                </div>

                <div className="flex items-center">
                <Tag  className={Infoproductcolor.textcolor} />
                  <h1 className="ml-1 text-sm ">Tặng mã giảm giá ngẫu nhiên</h1>
                </div>

                <div className="flex items-center">
                <CreditCard  className={Infoproductcolor.textcolor} />
                  <h1 className="ml-1 text-sm ">Có thể thành toán bằng tiền mặt hoặc visa</h1>
                </div>

                <div className="flex items-center">
                <Award  className={Infoproductcolor.textcolor} />
                  <h1 className="ml-1 text-sm ">Ưa đãi cực nhiều khi mua hàng số lượng lớn</h1>
                </div>

                <div className="flex items-center">
                <Shield  className={Infoproductcolor.textcolor} />
                  <h1 className="ml-1 text-sm ">Nếu sản phẩm có lỗi hoặc hư bảo hành 1 năm tùy món hàng.</h1>
                </div>
            </div>
            <div className="w-full h-[205px] mt-4 rounded-md overflow-hidden"> 
              <Image 
                alt="Error"
                src="/images/baohanh.png"
                  width="600"
                  height="205"
                className="object-fill rounded-md"
              />
            </div>
        </div>
     );
}
 
export default InfoProduct;