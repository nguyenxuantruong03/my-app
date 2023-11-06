import Link from "next/link";
import {relatedTagMousecolor} from "@/components/color/color"

const RelatedTagMouse = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute hidden md:flex bottom-4 md:left-[27.5rem] lg:left-[59.5rem] space-x-4 ">
         <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/category8/B%E1%BA%A1ch%20Tuy%E1%BA%BFt">
            Sơn Bạch tuyết
            </Link>
        </div>
        <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/category8/Expo">
            Sơn Expo
            </Link>
        </div>
        <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/category8/S%C6%A1n%20x%E1%BB%8Bt%20ATM">
            Sơn ATM
            </Link>
        </div>
        <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/category8/B%E1%BA%A1ch%20Tuy%E1%BA%BFt">
            Xem tất cả
            </Link>
      </div>
      </div>
        </div>
     );
}
 
export default RelatedTagMouse;