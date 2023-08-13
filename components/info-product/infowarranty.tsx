"use client"
import Currencyonevalue from "@/components/ui/currencyonevalue";
import useSeeDetail from "@/hooks/use-see-detail";
import useSeeDetail1 from "@/hooks/use-see-detail1";
import useSeeDetail2 from "@/hooks/use-see-detail2";
import useSeeDetail3 from "@/hooks/use-see-detail3";
import useSeeDetail4 from "@/hooks/use-see-detail4";
import { Product } from "@/types";
import { ShieldCheck  } from "lucide-react";
import { MouseEventHandler } from 'react';

interface InfoWarrantyProps{
    data: Product
}
const InfoWarranty:React.FC<InfoWarrantyProps> = ({data}) => {
    const seedetail = useSeeDetail()
    const seedetail1 = useSeeDetail1()
    const seedetail2 = useSeeDetail2()
    const seedetail3 = useSeeDetail3()
    const seedetail4 = useSeeDetail4()


    const onSeeDetail: MouseEventHandler<HTMLButtonElement> = (event) =>{
        event.stopPropagation()

        seedetail.onOpen()
    }

    const onSeeDetail1: MouseEventHandler<HTMLButtonElement> = (event) =>{
        event.stopPropagation()

        seedetail1.onOpen()
    }

    const onSeeDetail2: MouseEventHandler<HTMLButtonElement> = (event) =>{
        event.stopPropagation()

        seedetail2.onOpen()
    }

    const onSeeDetail3: MouseEventHandler<HTMLButtonElement> = (event) =>{
        event.stopPropagation()

        seedetail3.onOpen()
    }

    const onSeeDetail4: MouseEventHandler<HTMLButtonElement> = (event) =>{
        event.stopPropagation()

        seedetail4.onOpen()
    }
    
    return ( 
        <>
        <div className="my-1 ">
                    <div className="flex bg-gradient-to-r from-[#C00000] to-[#FF3334] rounded-md p-5">
                        <ShieldCheck className="text-white"/>
                    <div className="flex ml-2 ">
                    <h1 className="text-md ml-2 text-white font-bold ">Bảo vệ sản phẩm toàn diện với dịch vụ bảo hành mở rộng</h1>
                    <span onClick={onSeeDetail}  className=" ml-2  underline font-bold cursor-pointer"> Xem chi tiết</span>    
                    </div>   
                    </div>
                    <p className="text-sm mx-4 my-2">
                    (Khách hàng đăng ký thông tin để được hỗ trợ tư vấn và thanh toán tại cửa hàng nhanh nhất, số tiền phải thanh toán chưa bao gồm giá trị của gói bảo hành mở rộng)
                    </p>
                    </div>
                    <div className="h-[65px] w-[508px] m-auto mt-4 border-2 border-slate-500  rounded-md">
                        <p className=" ml-2 text-sm font-semibold"> S24 + 12 tháng: Đổi sản phẩm tương đương hoặc miễn phí chi phí sữa chữa nếu có lỗi của NSX khi hết hạn bảo hành trong 12 tháng </p>
                        <div className="flex justify-between mx-8">
                            <p className="text-sm "><Currencyonevalue value={data.guaranteeheading}/> </p>
                            <span onClick={onSeeDetail1} className=" text-red-600 cursor-pointer text-sm font-bold"> Xem chi tiết</span> 
                        </div>
                    </div>
                    <div className="h-[65px] w-[508px] m-auto mt-4 border-2 border-slate-500  rounded-md">
                        <p className="my-1 ml-2 text-sm font-semibold"> 1 đổi 1 VIP 12 tháng: Đổi máy mới tương đương khi có lỗi từ NSX trong 12 tháng </p>
                        <div className="flex justify-between mx-8 mt-5">
                            <p className="text-sm "><Currencyonevalue value={data.guaranteedescription}/> </p>
                            <span onClick={onSeeDetail2} className=" text-red-600 cursor-pointer text-sm font-bold"> Xem chi tiết</span> 
                        </div>
                    </div>
                    <div className="h-[65px] w-[508px] m-auto mt-4 border-2 border-slate-500  rounded-md">
                        <p className="ml-2 text-sm font-semibold"> Rơi vỡ - Rớt nước: Hỗ trợ 90% chi phí sữa chữa, đổi mới sản phẩm nếu hư hỏng nặng trong 12 tháng </p>
                        <div className="flex justify-between mx-8 ">
                            <p className="text-sm "><Currencyonevalue value={data.guaranteeinfomation}/> </p>
                            <span onClick={onSeeDetail3} className=" text-red-600 cursor-pointer text-sm font-bold"> Xem chi tiết</span> 
                        </div>
                    </div>
                    <div className="h-[65px] w-[508px] m-auto mt-4 border-2 border-slate-500  rounded-md">
                        <p className="my-1 ml-2 text-sm font-semibold">1 đổi 1 VIP 6 tháng: Đổi máy mới tương đương khi có lỗi từ NSX trong 6 tháng </p>
                        <div className="flex justify-between mx-8 mt-5">
                            <p className="text-sm "><Currencyonevalue value={data.guaranteeprice}/> </p>
                            <span onClick={onSeeDetail4} className=" text-red-600 cursor-pointer text-sm font-bold"> Xem chi tiết</span> 
                        </div>
                    </div>
        </>
     );
}
 
export default InfoWarranty;