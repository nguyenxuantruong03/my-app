import Link from "next/link";

const RelatedTagMouse = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute flex bottom-4 left-[26.9rem] space-x-4 ">
         <div className=" p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs">
            <Link  href="">
            Tai nghe Bluetooth
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs">
            <Link  href="">
            Tai nghe không dây
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Tai nghe Gaming
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Tai nghe chụp tai
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Loa bluetooth
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Loa karaoke
            </Link>
        </div>
        <div className="p-1 bg-gray-300 bg-opacity-40 rounded-md border-gray-400 border-[1px] text-xs ">
            <Link  href="">
            Loa Soundbar
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
 
export default RelatedTagMouse;