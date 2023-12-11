import Link from "next/link";
import {relatedTagWatchcolor} from "@/components/color/color"

const RelatedTagWatch= () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute hidden md:flex bottom-4 md:left-[16rem] xl:left-[48.2rem] space-x-4 ">
         <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/daydien/daydiendaphaco1.5">
            Daphaco 1.5
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/daydien/day-dien-daphaco-2.5">
            Daphoco 2.5
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/daydien/daydiendoncadivi1.5">
            Cadivi 1.5
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/daydien/daydiencadivi2.5">
            Cadivi 2.5
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/daydien/daydiendaphaco4.0">
            Daphaco 4.0
            </Link>
        </div>
        <div className={relatedTagWatchcolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/category3/37e650f8-c1aa-49dc-9c34-22b1c038bbeb">
            Xem tất cả
            </Link>
      </div>
      </div>
        </div>
     );
}
 
export default RelatedTagWatch;