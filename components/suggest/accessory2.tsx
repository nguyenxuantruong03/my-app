import Image from "next/image";
import Link from "next/link";
import {computerComponentSmallcolor} from "@/components/color/color"

const computerComponentSmall = () => {
    return (  
        <div className="grid grid-cols-10  my-4 mx-2 overflow-x-auto gap-x-32 lg:gap-0 lg:overflow-hidden">
        <div className={computerComponentSmallcolor.bg_height_width_rounded}>
        <Link href="https://vlxdxuantruong.vercel.app/category2/%E1%BB%90ng%20l%C6%B0%E1%BB%9Bi%20xanh">
        <span className="text-white font-bold p-2">Ống lưới </span>
        <span className="text-white font-bold p-2">xanh </span>
        <div className="ml-2 -mt-2">
        <Image 
        width="100"
        height="100"
        className="object-fit"
        src="/images-product/ongluoixanh.png"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg_height_width_rounded_overflowhidden}>
        <Link href="https://vlxdxuantruong.vercel.app/category2/%E1%BB%90ng%20B%C3%ACnh%20Minh">
        <span className="text-white font-bold p-2">Ống nhựa</span>
        <span className="text-white font-bold p-2">PVC </span>
        <div className="mt-1">
        <Image 
        width="120"
        height="100"
        className="object-fit"
        src="/images-product/ongnhuapvc.png"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg}>
        <Link href="https://vlxdxuantruong.vercel.app/category/Pin%20con%20%C3%B3">
        <span className="text-white font-bold p-2"> Pin con ó </span>
        <div className="ml-4">
        <Image 
        width="100"
        height="100"
        className="object-fit"
        src="/images-product/pincono.png"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg1}>
        <Link href="https://vlxdxuantruong.vercel.app/category1/Qu%E1%BA%A1t%20Senko">
        <span className="text-white font-bold p-2">Quạt bàn </span>
        <span className="text-white font-bold p-2">Senko </span>
        <div className="ml-8">
        <Image 
        width="60"
        height="80"
        className="object-fit"
        src="/images-product/quatbansenko.png"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg2}>
        <Link href="https://vlxdxuantruong.vercel.app/category1/Qu%E1%BA%A1t%20Senko">
        <span className="text-white font-bold p-2">Quạt treo </span>
        <span className="text-white font-bold p-2">Senko </span>
        <div className="ml-7">
        <Image 
        width="70"
        height="80"
        className="object-fit"
        src="/images-product/quattreosenko.png"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg3}>
        <Link href="https://vlxdxuantruong.vercel.app/category11/Th%C3%B4ng%20c%E1%BB%91ng">
        <span className="text-white font-bold p-2">Sifa thông </span>
        <span className="text-white font-bold p-2">cống </span>
        <div className="">
        <Image 
        width="100"
        height="120"
        className="object-fit"
        src="/images-product/sifa-thongcong.png"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg4}>
        <Link href="https://vlxdxuantruong.vercel.app/category8/B%E1%BA%A1ch%20Tuy%E1%BA%BFt">
        <span className="text-white font-bold p-2"> Sơn bạch </span>
        <span className="text-white font-bold p-2"> tuyết </span>
        <div className="ml-6 -mt-4">
        <Image 
        width="65"
        height="100"
        className="object-fit"
        src="/images-product/sonbachtuyet.png"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg5}>
        <Link href="https://vlxdxuantruong.vercel.app/category8/Expo">
        <span className="text-white font-bold p-2"> Sơn Expo </span>
        <div className="-mt-3">
        <Image 
        width="100"
        height="100"
        className="object-fit"
        src="/images-product/sonexpo.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>

        <div className={computerComponentSmallcolor.bg6}>
        <Link href="https://vlxdxuantruong.vercel.app/category8/S%C6%A1n%20x%E1%BB%8Bt%20ATM">
        <span className="text-white font-bold p-2"> Sơn xịt ATM </span>
        <div className="ml-2">
        <Image 
        width="100"
        height="120"
        className="object-fit"
        src="/images-product/sonxitatm.png"
        alt="error"
        />
        </div>
        </Link>
        </div>
        
        </div>
     );
}
 
export default computerComponentSmall;