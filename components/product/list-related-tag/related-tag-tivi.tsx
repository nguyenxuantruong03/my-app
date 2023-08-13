import Link from "next/link";

const RelatedTagTivi = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute flex bottom-4 left-[52.7rem] space-x-4 ">
         <div className=" p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs">
            <Link  href="">
            LG
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs">
            <Link  href="">
            Samsung
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Sony
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Toshiba
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Casper
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Coocaa
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
 
export default RelatedTagTivi;