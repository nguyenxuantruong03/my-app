import Link from "next/link";
import {relatedTagHeadphonecolor} from "@/components/color/color"

const RelatedTagHeadphone = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute hidden md:flex bottom-4  md:left-[23.3rem] xl:left-[49.4rem] space-x-4 ">
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
            <Link  href="https://vlxdxuantruong.vercel.app/category2/dc60b612-be53-4418-8e69-1ca10ca1ae53">
            Co
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/category2/074d4e14-db22-4df9-9c8c-031c9ce2984a">
            Lơi
            </Link>
        </div>
        <div className={relatedTagHeadphonecolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/category2/388fcfa8-720d-4ca5-ace8-45370235e6eb">
            Xem tất cả
            </Link>
      </div>
      </div>
        </div>
     );
}
 
export default RelatedTagHeadphone;