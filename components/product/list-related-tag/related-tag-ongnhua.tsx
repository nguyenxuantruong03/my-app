import Link from "next/link";
import {relatedTagHeadphonecolor} from "@/components/color/color"

const RelatedTagHeadphone = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute hidden md:flex bottom-4  md:left-[17.4rem] lg:left-[49.4rem] space-x-4 ">
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="">
            Ống 27
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="">
            Ống 34
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="">
            Ống 60
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="">
            Ống 90
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="">
            Ống 114
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="">
            Co
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="">
            Lơi
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="">
            Xem tất cả
            </Link>
      </div>
      </div>
        </div>
     );
}
 
export default RelatedTagHeadphone;