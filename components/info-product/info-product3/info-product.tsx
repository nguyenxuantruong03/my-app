import { Product3 } from "@/types";
import { CheckCircle2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";

interface InfoProductProps{
    data: Product3;
}
const InfoProduct:React.FC<InfoProductProps> = ({data}) => {
    return ( 
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name} </h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data.price} valueold={data.priceold}/>
                </p>
            </div>
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
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2">
                    Mua ngay
                    <ShoppingCart />
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