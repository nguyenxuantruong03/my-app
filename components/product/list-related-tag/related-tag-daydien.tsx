import Link from "next/link";
import {relatedTagWatchcolor} from "@/components/color/color"

const RelatedTagWatch= () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute hidden md:flex bottom-4 md:left-[16rem] lg:left-[48.2rem] space-x-4 ">
         <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="">
            Daphaco 1.5
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="">
            Daphoco 2.5
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="">
            Cadivi 1.5
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="">
            Cadivi 2.5
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="">
            Daphaco 4.0
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="">
            Xem tất cả
            </Link>
      </div>
      </div>
        </div>
     );
}
 
export default RelatedTagWatch;