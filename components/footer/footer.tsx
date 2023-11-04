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
      <div className="md:grid md:grid-cols-4 md:mt-4">
      <div>
        <p className={footercolor.textml}>Hỗ trợ đổi hàng</p>
          <div className="grid grid-rows-3 m-2 space-y-1 ">
              < FreeSupportHotline />
          </div>
          <p className={footercolor.textml}>Phương thức thanh toán</p>
          <div>
          <div className="grid grid-cols-4 m-2 text-sm space-y-1 md:gap-14 lg:gap-0">
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
        <p className={footercolor.textml} >Dịch vụ và thông tin </p>
        <div className={footercolor.gridrows8}>
              <ServiceInfomation />
          </div>
        </div>

        <div>
          <p className={footercolor.text}>Website cá nhân </p>
        <div className={footercolor.gridrows3}>
              <InfomationWebsite />
          </div>
          <p className={footercolor.textmt}>Liên hệ khác</p>
        <div className={footercolor.gridcols5}>
              <ConnectForme />
          </div>
        </div>
      </div>
      
    </footer>
    </div>

    <div className={root.bgwhite}>
    <div className="md:max-w-3xl lg:max-w-7xl mx-auto">
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
