import Link from "next/link";

const RelatedTagIphone = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute flex bottom-4 left-[49.6rem] space-x-4 ">
         <div className=" p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs">
            <Link  href="">
            Apple
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs">
            <Link  href="">
            Samsung
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Xiomi
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            OPPO
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            vivo
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Realme
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Nokia
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Xem tất cả
            </Link>
      </div>
      </div>
        </div>
     );
}
 
export default RelatedTagIphone;