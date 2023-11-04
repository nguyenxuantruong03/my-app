import Link from "next/link";
import {relatedTagTivicolor} from "@/components/color/color"

const RelatedTagTivi = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute hidden md:flex bottom-4 md:left-[26rem] lg:left-[58.1rem] space-x-4 ">
         <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="">
            Mặt 3 lỗ
            </Link>
        </div>
        <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="">
            Công tắt
            </Link>
        </div>
        <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="">
            Cầu dao 
            </Link>
        </div>
        <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="">
            Măt 1 lỗ 
            </Link>
        </div>
        <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="">
            Xem tất cả
            </Link>
      </div>
      </div>
        </div>
     );
}
 
export default RelatedTagTivi;