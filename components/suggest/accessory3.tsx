import Image from "next/image";
import Link from "next/link";
import {secondhandcolor} from "@/components/color/color"

const Secondhand = () => {
    return ( 
        <div className="grid grid-cols-10  my-4 mx-2 overflow-x-auto gap-x-32 lg:gap-0 lg:overflow-hidden">
        <div className={secondhandcolor.bg_h_w_rounded}>
        <Link href="https://vlxdxuantruong.vercel.app/category2/T%C3%AA">
        <span className="text-white font-bold p-2"> Tê </span>
        <div className="-mt-6  ml-2">
        <Image 
        width="100"
        height="110"
        className="object-fit"
        src="/images-product/te27.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={secondhandcolor.bg_h_w_rounded_overflow}>
        <Link href="https://vlxdxuantruong.vercel.app/category11/Th%C6%B0%E1%BB%9Bc%20K%C3%A9o">
        <span className="text-white font-bold p-2"> Thước kéo </span>
        <div className="-mt-2 ml-2">
        <Image 
        width="90"
        height="90"
        className="object-fit"
        src="/images-product/thuockeo.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={secondhandcolor.bg_h_w_rounded}>
        <Link href="https://vlxdxuantruong.vercel.app/category11/B%E1%BA%A1t%20xanh">
        <span className="text-white font-bold p-2"> Bạt xanh </span>
        <div className="ml-6">
        <Image 
        width="95"
        height="100"
        className="object-fit rounded-sm"
        src="/images-product/bat_xanh.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={secondhandcolor.bg_h_w_rounded}>
        <Link href="https://vlxdxuantruong.vercel.app/category10/MPE">
        <span className="text-white font-bold p-2"> Bóng âm trần </span>
        <span className="text-white font-bold p-2"> mpe </span>
        <div className="ml-3 -mt-2">
        <Image 
        width="85"
        height="70"
        className="object-fit"
        src="/images-product/bong_am_tran_mpe.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={secondhandcolor.bg_h_w_rounded}>
        <Link href="https://vlxdxuantruong.vercel.app/category11/C%E1%BB%9D%20l%C3%AA">
        <span className="text-white font-bold p-2"> Cờ lê Yeti </span>
        <div className="mr-1 mb-2 ">
        <Image 
        width="120"
        height="120"
        className="object-fit"
        src="/images-product/co_le_yeti.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={secondhandcolor.bg_h_w_rounded}>
        <Link href="https://vlxdxuantruong.vercel.app/product7/caudaotudong06a">
        <span className="text-white font-bold p-2"> Cầu dao tự </span>
        <span className="text-white font-bold p-2"> động sino </span>
        <div className="m-1 mr-2 -mt-4">
        <Image 
        width="100"
        height="120"
        className="object-fit"
        src="/images-product/cp_sino.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={secondhandcolor.bg_h_w_rounded}>
        <Link href="https://vlxdxuantruong.vercel.app/category11/m%C3%A1y%20b%C6%A1m%20n%C6%B0%E1%BB%9Bc">
        <span className="text-white font-bold p-2"> Máy bơm nước </span>
        <span className="text-white font-bold p-2"> Panasonic </span>
        <div className=" ml-1">
        <Image 
        width="150"
        height="120"
        className="object-fit"
        src="/images-product/may-bom-nuoc.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={secondhandcolor.bg_h_w_rounded}>
        <Link href="https://vlxdxuantruong.vercel.app/product7/mat-3-lo-cam-sino">
        <span className="text-white font-bold p-2"> Mặt 3 lỗ </span>
        <span className="text-white font-bold p-2"> sino </span>
        <div className="ml-4 -mt-4">
        <Image 
        width="100"
        height="100"
        className="object-fit"
        src="/images-product/mat_3_lo_sino.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={secondhandcolor.bg_h_w_rounded}>
        <Link href="https://vlxdxuantruong.vercel.app/category11/Que%20h%C3%A0n">
        <span className="text-white font-bold p-2"> Que hàn </span>
        <div className="-mt-4">
        <Image 
        width="120"
        height="150"
        className="object-fit"
        src="/images-product/que_han.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={secondhandcolor.bg_h_w_rounded}>
        <Link href="https://vlxdxuantruong.vercel.app/category11/V%C3%AA%20l%E1%BB%97">
        <span className="text-white font-bold p-2"> V lỗ </span>
        <div className="-mt-2">
        <Image 
        width="150"
        height="100"
        className="object-fit"
        src="/images-product/v_lo.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className={secondhandcolor.bg_h_w_rounded_special}>
        <Link href="https://vlxdxuantruong.vercel.app/category11/Xe%20r%C3%B9a">
        <span className="text-white font-bold p-2"> Xe rùa </span>
        <div className="ml-2 ">
        <Image 
        width="150"
        height="150"
        className="object-fit"
        src="/images-product/xe-rua.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        
        
        </div>
     );
}
 
export default Secondhand;