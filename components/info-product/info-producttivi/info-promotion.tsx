"use client"
import useSeeDetailSpecifications from "@/hooks/use-see-detail-specifications";
import { Tivi } from "@/types";
import { Package2, Receipt, Shield, Smartphone,GraduationCap,Gift,Sparkle, ChevronDown  } from "lucide-react";
import { MouseEventHandler } from "react";

interface InfoPromotionprops{
    data: Tivi
}
const InfoPromotion:React.FC<InfoPromotionprops> = ({data}) => {
    const seedetailspecification = useSeeDetailSpecifications()

    const onSeeDetailSpecification: MouseEventHandler<HTMLDivElement> = (event) =>{
        event.stopPropagation()

        seedetailspecification.onOpen()
    }
    return ( 
        <div className="max-w-2xl">
        <div className="hidden lg:grid  lg:grid-cols-2 lg:item-start lg:gap-x-8  mb-5">
         <div className="w-[300px] h-[200px] shadow-lg rounded-md p-4 ">
             <h1 className="font-bold text-md text-[#666666]">Thông tin sản phẩm</h1>
            <div className="flex my-1 text-[#666666]">
             <Smartphone  className="w-4 h-4"/>
                 <span className="ml-1 text-sm "> Mới, đầy đủ phụ kiện từ nhà sản xuất </span>
            </div>
            <div className="flex my-1 text-[#666666]">
             <Package2  className="w-4 h-4"/>
                 <span className=" ml-1 text-sm"> {data.name}, vệ sinh miễn phí trong vòng 1 năm </span>
            </div>
            <div className="flex my-1 text-[#666666]">
             <Shield className="w-10 h-10 -mt-3 "/>
                 <span className="ml-1 text-sm"> Bảo hành 24 tháng trung tâm bảo hành Chính hãng, 1 đổi 1 trong 30 ngày nếu có lỗi từ phía nhà sản xuất </span>
            </div>
            <div className="flex my-1 text-[#666666]">
             <Receipt  className="w-4 h-4"/>
                 <span className="ml-1 text-sm"> Giá sản phẩm đã bao gồm VAT </span>
            </div>
         </div>
             <div className="w-[250px] h-[200px] ">

             <div className="h-[90px] shadow-md my-[10px] rounded-md overflow-hidden ">
                 <h1 className= "text-white font-bold bg-[#e5002d] text-center">Ưa đãi khách hàng thân thiết</h1>
             <div className="flex text-[#666666] my-2">
                 <Gift className="ml-1 w-4 h-4 "/>
                 <div>
             <p className="ml-1 text-sm">{data.promotionheading}</p>
                 </div>
             </div >
             <div className="flex text-[#666666] my-2">
                 <Sparkle className=" ml-1 w-4 h-4 "/>
             <p className="ml-1 text-sm"> Giảm thêm 500k khi có thẻ VIP </p>
             </div>
             </div>

             <div className="h-[90px] shadow-md my-[10px] rounded-md overflow-hidden">
                 <h1 className="text-white font-bold bg-[#e5002d] text-center">Ưa đãi sinh viên</h1>
             <div className="flex text-[#666666] my-2">
                 <Gift className="ml-1 w-4 h-4 "/>
             <p className="ml-2 text-sm">{data.promotiondescription}</p>
             </div>
            <div className="flex text-[#666666] my-2">
            <GraduationCap className=" ml-1 w-5 h-5 "/>
            <p className="ml-1 text-sm"> Giảm thêm 500k khi có thẻ sinh viên </p>
            </div>
             </div>
             </div>
         </div>
         <div className="grid grid-cols-2"> 
                <div className=" w-[300px] p-2 rounded-md shadow-lg">
                    <h1 className="font-bold"> Thông số kỹ thuật </h1>
                    <div className="flex justify-between bg-gray-500 bg-opacity-10 p-4 rounded-md">
                            {data.descriptionspecifications}
                            <p>{data.valuespecifications}</p>
                    </div>
                    <div className="flex justify-between p-4 ">
                            {data.description2specifications}
                            <p>{data.value2specifications}</p>
                    </div>
                    <div className="flex justify-between bg-gray-500 bg-opacity-10 p-4 rounded-md">
                            {data.description3specifications}
                            <p>{data.value3specifications}</p>
                    </div>
                    <div className="flex justify-between p-4 ">
                            {data.description4specifications}
                            <p>{data.value4specifications}</p>
                    </div>
                    <div className="flex justify-between bg-gray-500 bg-opacity-10 p-4 rounded-md">
                            {data.description5specifications}
                            <p>{data.value5specifications}</p>
                    </div>
                </div>
                <div className=" w-[300px] p-2 rounded-md shadow-lg">
                <h1 className="font-bold"> Thông số kỹ thuật </h1>
                    <div className="flex justify-between bg-gray-500 bg-opacity-10 p-4 rounded-md">
                            {data.description6specifications}
                            <p>{data.value6specifications}</p>
                    </div>
                    <div className="flex justify-between p-4">
                            {data.description7specifications}
                            <p>{data.value7specifications}</p>
                    </div>
                    <div className="flex justify-between bg-gray-500 bg-opacity-10 p-4 rounded-md">
                            {data.description8specifications}
                            <p>{data.value8specifications}</p>
                    </div>
                    <div className="flex justify-between p-4">
                            {data.description9specifications}
                            <p>{data.value9specifications}</p>
                    </div>
                    <div className="flex justify-between bg-gray-500 bg-opacity-10 p-4 rounded-md">
                            {data.description10specifications}
                            <p>{data.value10specifications}</p>
                    </div>
                </div>
         </div>
         <div onClick={onSeeDetailSpecification} className="w-[550px] h-[50px] shadow-lg rounded-md mt-2 ml-[40px] flex items-center justify-center hover:bg-red-300 hover:bg-opacity-30 hover:border-[1px] hover:border-red-500 hover:text-red-600 cursor-pointer">
                <div >Xem chi tiết </div>
                <ChevronDown className="ml-1 h-4 w-4" />
         </div>
        </div>
     );
}
 
export default InfoPromotion;