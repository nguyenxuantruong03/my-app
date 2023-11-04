import {InfomationWebsitecolor} from "@/components/color/color"
import Link from "next/link";

const InfomationWebsite = () => {
    return ( 
        <>
        <div>
            Website thuộc về Xuân Trường
        </div>
        <div>
            Liên lạc <span className={InfomationWebsitecolor.textfont}><Link href="tel:0352261103">035.222.444</Link></span>
        </div>
        <div>
            Hoặc zalo <span className={InfomationWebsitecolor.textfont}><Link href="tel:0352261103">035.222.444</Link></span> (7h00-21h00)
        </div>
        </>
     );
}
 
export default InfomationWebsite;