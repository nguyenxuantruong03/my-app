import Link from "next/link";
import {freeSupportHotlinecolor} from "@/components/color/color"

const FreeSupportHotline = () => {
    return ( 
        <>
        <Link href="tel:0352261103">
        <div className={freeSupportHotlinecolor.text}>Gọi mua hàng <span className={freeSupportHotlinecolor.textfont}>035.222.111</span> (7h30- 22h00)</div>
      </Link>
      <Link href="tel:0352261103">
        <div className={freeSupportHotlinecolor.text}>Gọi Khiếu nại <span className={freeSupportHotlinecolor.textfont}>035.222.333</span> (7h30- 22h00)</div>
      </Link>
      <Link href="tel:0352261103">
        <div className={freeSupportHotlinecolor.text}>Gọi bảo hành <span className={freeSupportHotlinecolor.textfont}>035.222.444</span> (7h30- 22h00)</div>
      </Link>
        </>
     );
}
 
export default FreeSupportHotline;