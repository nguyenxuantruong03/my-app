import Link from "next/link";
import {relatedTagIphonecolor} from "@/components/color/color"

const RelatedTagIphone = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute flex bottom-4 left-[49.4rem] space-x-4 ">
         <div className={relatedTagIphonecolor.bg_opacity_border}>
            <Link  href="">
            Apple
            </Link>
        </div>
        <div className={relatedTagIphonecolor.bg_opacity_border}>
            <Link  href="">
            Samsung
            </Link>
        </div>
        <div className={relatedTagIphonecolor.bg_opacity_border}>
            <Link  href="">
            Xiomi
            </Link>
        </div>
        <div className={relatedTagIphonecolor.bg_opacity_border}>
            <Link  href="">
            OPPO
            </Link>
        </div>
        <div className={relatedTagIphonecolor.bg_opacity_border}>
            <Link  href="">
            vivo
            </Link>
        </div>
        <div className={relatedTagIphonecolor.bg_opacity_border}>
            <Link  href="">
            Realme
            </Link>
        </div>
        <div className={relatedTagIphonecolor.bg_opacity_border}>
            <Link  href="">
            Nokia
            </Link>
        </div>
        <div className={relatedTagIphonecolor.bg_opacity_border}>
            <Link  href="">
            Xem tất cả
            </Link>
      </div>
      </div>
        </div>
     );
}
 
export default RelatedTagIphone;