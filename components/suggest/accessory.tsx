import Image from "next/image";
import Link from "next/link";
import {accessorycolor} from "@/components/color/color"

const Accessory = () => {
    return ( 
        <div className="grid grid-cols-10  my-4 mx-2 overflow-x-auto gap-x-32 lg:gap-0 lg:overflow-hidden">
        <div className={accessorycolor.bg_height_width_rounded}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Ốc vít </span>
        <div className="m-4">
        <Image 
        width="80"
        height="100"
        className="object-fit"
        src="/../public/images-product/boloncontan.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Bóng Điện </span>
        <span className="text-white font-bold pl-2"> Quang </span>
        <div className="mb-2 ml-6">
        <Image 
        width="75"
        height="80"
        className="object-fit"
        src="/../public/images-product/bongdienquang.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Co </span>
        <div className=" mt-4">
        <Image 
        width="90"
        height="300"
        className="object-fit"
        src="/../public/images-product/co27.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Đá cắt </span>
        <div className="mt-1">
        <Image 
        width="100"
        height="70"
        className="object-fit"
        src="/../public/images-product/dacatsat.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Dây điện </span>
        <span className="text-white font-bold p-2"> Daphaco </span>
        <div className="mr-1 mb-2 -mt-4">
        <Image 
        width="120"
        height="120"
        className="object-fit"
        src="/../public/images-product/daphaco.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Dây điện </span>
        <span className="text-white font-bold p-2"> Cadivi </span>
        <div className="m-2 mr-3">
        <Image 
        width="80"
        height="100"
        className="object-fit"
        src="/../public/images-product/daydiencadivi.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Dây điện </span>
        <span className="text-white font-bold p-2"> Daphaco lớn </span>
        <div className="m-3 mr-2 ">
        <Image 
        width="90"
        height="100"
        className="object-fit"
        src="/../public/images-product/daydiendaphacolon.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Đèn Bàn Rạng </span>
        <span className="text-white font-bold p-2"> Đông </span>
        <div className="-mt-6">
        <Image 
        width="120"
        height="80"
        className="object-fit"
        src="/../public/images-product/denrangdong.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Keo 2 mặt</span>
        <div className="mt-2 ">
        <Image 
        width="120"
        height="100"
        className="object-fit"
        src="/../public/images-product/keo2mat.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Keo Apolo </span>
        <div className="-mt-2">
        <Image 
        width="110"
        height="120"
        className="object-fit"
        src="/../public/images-product/keoapolo.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded_mt}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Kéo bếp ăn</span>
        <div className="ml-1">
        <Image 
        width="120"
        height="120"
        className="object-fit"
        src="/../public/images-product/keobepan.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded_mt}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Keo con chó</span>
        <div className="-ml-2">
        <Image 
        width="120"
        height="120"
        className="object-fit"
        src="/../public/images-product/keoconcho.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded_mt}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Keo dán sắt</span>
        <div className="-mt-3">
        <Image 
        width="170"
        height="150"
        className="object-fit"
        src="/../public/images-product/keodansat.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded_mt}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Khóa việt </span>
        <span className="text-white font-bold p-2"> tiệp </span>
        <div className="-mt-4 ml-6">
        <Image 
        width="90"
        height="90"
        className="object-fit"
        src="/../public/images-product/khoaviettiep.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded_mt}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Lơi </span>
        <div className="-mt-2">
        <Image 
        width="140"
        height="140"
        className="object-fit"
        src="/../public/images-product/loi27.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded_mt}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Lưới xanh </span>
        <div className="ml-2 mt-2">
        <Image 
        width="100"
        height="100"
        className="object-fit"
        src="/../public/images-product/luoixanh.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded_mt}>
        <Link href="/">
        <span className="text-white font-bold p-2">Mỏ lết </span>
        <div className="ml-4">
        <Image 
        width="100"
        height="100"
        className="object-fit"
        src="/../public/images-product/molet.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded_mt}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Nối </span>
        <div className="-mt-3 ml-2">
        <Image 
        width="110"
        height="110"
        className="object-fit"
        src="/../public/images-product/noi27.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded_mt}>
        <Link href="/">
        <span className="text-white font-bold p-2">Ổ cắm cây </span>
        <span className="text-white font-bold pl-2"> thông </span>
        <div className="-mt-3 ml-9">
        <Image 
        width="100"
        height="100"
        className="object-fit"
        src="/../public/images-product/ocamcaythong.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={accessorycolor.bg_height_width_rounded_mt}>
        <Link href="/">
        <span className="text-white font-bold p-2">Ổ cắm điện </span>
        <span className="text-white font-bold p-2"> quang </span>
        <div className="ml-3">
        <Image 
        width="100"
        height="100"
        className="object-fit"
        src="/../public/images-product/ocamdienquang.png"
        alt="error"
        />
        </div>
        </Link>
        </div>
        </div>
     );
}
 
export default Accessory;