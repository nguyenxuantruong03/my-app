import Link from "next/link";
import {relatedTagTivicolor} from "@/components/color/color"

const RelatedTagTivi = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute flex bottom-4 left-[52.7rem] space-x-4 ">
         <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="">
            LG
            </Link>
        </div>
        <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="">
            Samsung
            </Link>
        </div>
        <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="">
            Sony
            </Link>
        </div>
        <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="">
            Toshiba
            </Link>
        </div>
        <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="">
            Casper
            </Link>
        </div>
        <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="">
            Coocaa
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