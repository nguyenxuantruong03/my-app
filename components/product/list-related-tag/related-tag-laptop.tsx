import Link from "next/link";
import {relatedTagLaptopcolor} from "@/components/color/color"

const RelatedTagLaptop = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute flex bottom-4 left-[50rem] space-x-4 ">
         <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            Macbook
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            Thinkpad
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            Asus
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            HP
            </Link>
        </div>
        <div className= {relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            Surface
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            Acer
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="">
            MSI
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