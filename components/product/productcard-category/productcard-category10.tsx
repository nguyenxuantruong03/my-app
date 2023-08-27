"use client"


import Image from "next/image";
import { useRouter } from "next/navigation";

import { Product10 } from "@/types";
import Currency from "@/components/ui/currency";
import "../product-list/product-list.css";

interface ProductCardProps{
    data: Product10;
}
const ProductCard:React.FC<ProductCardProps> = ({data}) => {
    const router = useRouter()

    const handleClick= () =>{   
        router.push(`/product10/${data?.id}`)
    }
    const discountedPrice = data.price * ((100 - data.percentpromotion) / 100);


    return ( 
        <div className="relative">
        <div onClick={handleClick} className="bg-white cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and actions */}
            <div className="aspect-square rounded-xl bg-gray-100 ">
                <Image 
                src={data?.images?.[0].url}
                width="500"
                height="500"
                alt="Image"
                className="aspect-square object-cover rounded-md"
                />
            </div>
            {/* Description */}
            <div>
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category.name}
                </p>
            </div>
            <div className="flex items-center justify-between">
            <Currency valueold={data?.price} value={discountedPrice} />
            </div>
        </div>
         <div className="home-product-item__favorite ">
         <span className="ml-1">Giảm {data.percentpromotion}%</span>
       </div>
       </div>
     );
}
 
export default ProductCard;