import Link from "next/link";
import {relatedTagMousecolor} from "@/components/color/color"

const RelatedTagMouse = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute flex bottom-4 left-[26.7rem] space-x-4 ">
         <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="">
            Tai nghe Bluetooth
            </Link>
        </div>
        <div className={relatedTagMousecolor.bg_opacity_border} >
            <Link  href="">
            Tai nghe không dây
            </Link>
        </div>
        <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="">
            Tai nghe Gaming
            </Link>
        </div>
        <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="">
            Tai nghe chụp tai
            </Link>
        </div>
        <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="">
            Loa bluetooth
            </Link>
        </div>
        <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="">
            Loa karaoke
            </Link>
        </div>
        <div className={relatedTagMousecolor.bg_opacity_border}>
            <Link  href="">
            Loa Soundbar
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