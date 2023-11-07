import Link from "next/link";
import {relatedTagLaptopcolor} from "@/components/color/color"

const RelatedTagLaptop = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute hidden md:flex bottom-4 md:left-[12.3rem] lg:left-[37.4rem] space-x-4 ">
         <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/bongden/dienquang40w">
            Điện quang Bulb 40W
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/bongden/denbanhocledrangdong">
            Bàn học
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/bongden/denledmpe40w">
            MPE Bulb 40W
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/bongden/denledthuytinh1m2">
            Rạng Đông 1m2
            </Link>
        </div>
        <div className= {relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/bongden/bongdienquang4u50w">
            Bóng chữ u
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/bongden/bongdenledcana">
            Bóng cà na
            </Link>
        </div>
        <div className={relatedTagLaptopcolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/category10/fd46f2da-a6a2-4f46-890a-7bc951dd1aa4">
            Xem tất cả
            </Link>
      </div>
      </div>
        </div>
     );
}
 
export default RelatedTagLaptop;