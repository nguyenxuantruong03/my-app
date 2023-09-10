import {InfomationWebsitecolor} from "@/components/color/color"

const InfomationWebsite = () => {
    return ( 
        <>
        <div>
            Website thuộc về Xuân Trường
        </div>
        <div>
            Liên lạc <span className={InfomationWebsitecolor.textfont}>035.222.444</span>
        </div>
        <div>
            Hoặc zalo <span className={InfomationWebsitecolor.textfont}>035.222.444</span> (7h00-21h00)
        </div>
        </>
     );
}
 
export default InfomationWebsite;