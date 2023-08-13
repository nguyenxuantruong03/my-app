import Link from "next/link";

const RelatedTagLaptop = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute flex bottom-4 left-[50rem] space-x-4 ">
         <div className=" p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs">
            <Link  href="">
            Macbook
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs">
            <Link  href="">
            Thinkpad
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Asus
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            HP
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Surface
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Acer
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            MSI
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
 
export default RelatedTagLaptop;