import InfomationWebsite from "./InfomationWebsite";
import ConnectForme from "./connectForme";
import FreeSupportHotline from "./freesuporthotline";
import InformationPolicy from "./infomationPolicy";
import InformationCompanyFooter from "./infomationcompanyfooter";
import PaymentMethod from "./paymentMethod";
import ServiceInfomation from "./serviceInfomation";
import {footercolor,root} from "@/components/color/color"
const Footer = () => {
  return (
    <>
    <div className="border-t">
    <div className="max-w-7xl mx-auto">
    <footer className={root.bgwhite}>
      <div className="grid grid-cols-4 mt-4">
      <div>
        <p className={footercolor.text}>Tổng đài hỗ trợ miễn phí</p>
          <div className="grid grid-rows-3 m-2 space-y-1 ">
              < FreeSupportHotline />
          </div>
          <p className={footercolor.text}>Phương thức thanh toán</p>
          <div>
          <div className="grid grid-cols-5 m-2 text-sm space-y-1 ">
            <PaymentMethod />
          </div>
          </div>
        </div>
        <div>
        <p className={footercolor.text}>Thông tin và chính sách</p>
          <div className={footercolor.gridrows10}>
              <InformationPolicy />
          </div>
        </div>
        <div>
        <p className={footercolor.text}>Dịch vụ và thông tin khác </p>
        <div className={footercolor.gridrows8}>
              <ServiceInfomation />
          </div>
        </div>

        <div>
        <p className={footercolor.text}>Kết nối với Xuân Trường </p>
        <div className={footercolor.gridcols5}>
              <ConnectForme />
          </div>
          <p className={footercolor.textmt}>Website cá nhân </p>
        <div className={footercolor.gridrows3}>
              <InfomationWebsite />
          </div>
        </div>
      </div>
      
    </footer>
    </div>

    <div className={root.bgwhite}>
    <div className="max-w-7xl mx-auto ">
<footer >
          <div className="m-2 space-y-1 text-[11px]">
             <InformationCompanyFooter />
          </div>
</footer>
</div>
</div>
</div>

</>
  );
};

export default Footer;
