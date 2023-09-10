import Link from "next/link";
import {relatedTagWatchcolor} from "@/components/color/color"

const RelatedTagWatch= () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute flex bottom-4 left-[45.8rem] space-x-4 ">
         <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="">
            Apple watch
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="">
            Samsung
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="">
            Huwei
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="">
            Garmin
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="">
            Xiomi
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="">
            Coros
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="">
            Amazfit
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