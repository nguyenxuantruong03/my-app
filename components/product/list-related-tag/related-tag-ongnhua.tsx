import Link from "next/link";
import {relatedTagHeadphonecolor} from "@/components/color/color"

const RelatedTagHeadphone = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute hidden md:flex bottom-4  md:left-[23.3rem] lg:left-[49.4rem] space-x-4 ">
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/ongnhua/ong27binhminh">
            Ống 27
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/ongnhua/ong34binhminh">
            Ống 34
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/ongnhua/ong60binhminh">
            Ống 60
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/ongnhua/ong90binhminh">
            Ống 90
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/ongnhua/ong114binhminh">
            Ống 114
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/category2/Co">
            Co
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/category2/L%C6%A1i">
            Lơi
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/category2/%E1%BB%90ng%20B%C3%ACnh%20Minh">
            Xem tất cả
            </Link>
      </div>
      </div>
        </div>
     );
}
 
export default RelatedTagHeadphone;