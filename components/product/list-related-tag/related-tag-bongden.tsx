import Link from "next/link";
import {relatedTagLaptopcolor} from "@/components/color/color"

const RelatedTagLaptop = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute hidden md:flex bottom-4 md:left-[14.3rem] lg:left-[46.3rem] space-x-4 ">
         <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            Điện quang
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            Bàn học
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            MPE
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            Rạng Đông
            </Link>
        </div>
        <div className= {relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            Bóng chữ u
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            Bóng trái ớt
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            Xem tất cả
            </Link>
      </div>
      </div>
        </div>
     );
}
 
export default RelatedTagLaptop;