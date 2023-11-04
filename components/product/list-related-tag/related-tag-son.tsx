import Link from "next/link";
import {relatedTagMousecolor} from "@/components/color/color"

const RelatedTagMouse = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute hidden md:flex bottom-4 md:left-[27.5rem] lg:left-[59.5rem] space-x-4 ">
         <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="">
            Sơn Bạch tuyết
            </Link>
        </div>
        <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="">
            Sơn Expo
            </Link>
        </div>
        <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="">
            Sơn ATM
            </Link>
        </div>
        <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="">
            Xem tất cả
            </Link>
      </div>
      </div>
        </div>
     );
}
 
export default RelatedTagMouse;