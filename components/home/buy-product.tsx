"use client"
import { ArrowDown, ChevronsRight } from "lucide-react";
import "./index.scss"
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const BuyProduct = () => {
    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false);
    const handleClickProduct = () =>{
        router.push("/home-product")
    }
        useEffect(() => {
            setIsMounted(true);
        }, []);

        if (!isMounted) {
            return null;
        }
    return ( 
        <div className="buyproduct-image"> 
        <div className="absolute w-full py-10 md:py-24">
        <p className="text-center uppercase  font-bold text-xl md:text-4xl text-[#ec2f4b]"> Tô điểm thế giới bên trong ngôi nhà của bạn </p>
        <p className="text-2xl text-center font-semibold my-5 text-white">Chúng tôi cung cấp cho bạn chất lượng với sự tín nhiệm hoàn hảo,<br/>sự hài lòng của bạn là cân nhắc hàng đầu của chúng tôi.</p>
        <p className="flex items-center justify-center text-center text-lg font-semibold"> Hãy bắt đầu ngay bây giờ nhấp vào bên dưới để mua hàng <div className="arrow bounce"><ArrowDown className="w-8"/></div></p>
        <Button onClick={handleClickProduct} className="flex items-center justify-center mt-5 mx-auto"> Mua hàng tại đây <ChevronsRight className="w-10"/></Button>
        </div>
        </div>
     );
}
 
export default BuyProduct;