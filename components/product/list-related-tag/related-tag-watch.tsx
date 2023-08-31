import Link from "next/link";

const RelatedTagWatch= () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute flex bottom-4 left-[45.8rem] space-x-4 ">
         <div className=" p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs">
            <Link  href="">
            Apple watch
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs">
            <Link  href="">
            Samsung
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Huwei
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Garmin
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Xiomi
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Coros
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Amazfit
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
 
export default RelatedTagWatch;