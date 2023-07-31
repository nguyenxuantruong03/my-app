import Image from "next/image";
import Link from "next/link";

const Secondhand = () => {
    return ( 
        <div className="grid grid-cols-10  my-4 mx-2">
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg">
        <Link href="/">
        <span className="text-white font-bold p-2"> Điện thoại cũ </span>
        <div className="-mt-4  ">
        <Image 
        width="100"
        height="110"
        className="object-fit"
        src="/../public/images/ip-14-hp-cu.webp"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg overflow-hidden">
        <Link href="/">
        <span className="text-white font-bold p-2"> Máy tính bảng </span>
        <span className="text-white font-bold p-2"> cũ </span>
        <div className="-mt-12 ml-3">
        <Image 
        width="120"
        height="90"
        className="object-fit"
        src="/../public/images/ipad-cate-cu.webp"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Mac cũ </span>
        <div className=" mt-4">
        <Image 
        width="300"
        height="300"
        className="object-fit"
        src="/../public/images/maccu.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Laptop cũ </span>
        <div className="ml-3 mt-5">
        <Image 
        width="100"
        height="70"
        className="object-fit"
        src="/../public/images/laptop-cu.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Tai nghe cũ </span>
        <div className="mr-1 mb-2 -mt-10">
        <Image 
        width="120"
        height="120"
        className="object-fit"
        src="/../public/images/tainghe-cu.webp"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Loa cũ </span>
        <div className="m-3 mr-2 -mt-8">
        <Image 
        width="120"
        height="120"
        className="object-fit"
        src="/../public/images/loa-cu.webp"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Đồng hồ thông </span>
        <span className="text-white font-bold p-2"> minh cũ </span>
        <div className=" ml-1">
        <Image 
        width="110"
        height="120"
        className="object-fit"
        src="/../public/images/applewatch-cu.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Nhà thông </span>
        <span className="text-white font-bold p-2"> minh cũ </span>
        <div className="ml-4 -mt-4">
        <Image 
        width="100"
        height="100"
        className="object-fit"
        src="/../public/images/Nhathongminh-cu.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Phụ kiện cũ </span>
        <div className="-mt-10">
        <Image 
        width="150"
        height="150"
        className="object-fit"
        src="/../public/images/cucsac-cu.webp"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Màn hình cũ </span>
        <div className="-mt-10">
        <Image 
        width="150"
        height="100"
        className="object-fit"
        src="/../public/images/manhinh-cu.webp"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#d64044] rounded-lg mt-3 ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Tivi cũ </span>
        <div className="ml-8 mr-2">
        <Image 
        width="100"
        height="30"
        className="object-fit"
        src="/../public/images/tivi-cu.webp"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        
        
        </div>
     );
}
 
export default Secondhand;