import Link from "next/link";
import {relatedTagTivicolor} from "@/components/color/color"

const RelatedTagTivi = () => {
    return ( 
        <div className=" my-2 relative">
            <div className="absolute hidden md:flex bottom-4 md:left-[26rem] xl:left-[58.1rem] space-x-4 ">
         <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/ocam/mat-3-lo-cam-sino">
            Mặt 3 lỗ
            </Link>
        </div>
        <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/ocam/congtac1chieusino">
            Công tắt
            </Link>
        </div>
        <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/ocam/caudaotudong06a">
            Cầu dao 
            </Link>
        </div>
        <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/ocam/mat1congtacsino">
            Mặt 1 lỗ 
            </Link>
        </div>
        <div className={relatedTagTivicolor.bg_opacity_border}>
            <Link  href="https://vlxdxuantruong.vercel.app/ocam/mat-3-lo-cam-sino">
            Xem tất cả
            </Link>
      </div>
      </div>
        </div>
     );
}
 
export default RelatedTagTivi;