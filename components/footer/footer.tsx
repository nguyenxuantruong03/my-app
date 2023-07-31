import InfomationWebsite from "./InfomationWebsite";
import ConnectForme from "./connectForme";
import FreeSupportHotline from "./freesuporthotline";
import InformationPolicy from "./infomationPolicy";
import InformationCompanyFooter from "./infomationcompanyfooter";
import PaymentMethod from "./paymentMethod";
import ServiceInfomation from "./serviceInfomation";

const Footer = () => {
  return (
    <>
    <div className="border-t">
    <div className="max-w-7xl mx-auto">
    <footer className="bg-white ">
      <div className="grid grid-cols-4 mt-4">
      <div>
        <p className=" text-lg text-[#4a4a4a]">Tổng đài hỗ trợ miễn phí</p>
          <div className="grid grid-rows-3 m-2 space-y-1 ">
              < FreeSupportHotline />
          </div>
          <p className=" text-lg text-[#4a4a4a]">Phương thức thanh toán</p>
          <div>
          <div className="grid grid-cols-5 m-2 text-sm space-y-1 ">
            <PaymentMethod />
          </div>
          </div>
        </div>
        <div>
        <p className=" text-lg text-[#4a4a4a]">Thông tin và chính sách</p>
          <div className="grid grid-rows-10 m-2 text-sm space-y-1 text-[#4a4a4a]">
              <InformationPolicy />
          </div>
        </div>
        <div>
        <p className="text-lg text-[#4a4a4a]">Dịch vụ và thông tin khác </p>
        <div className="grid grid-rows-8 m-2 text-sm space-y-1 text-[#4a4a4a]">
              <ServiceInfomation />
          </div>
        </div>

        <div>
        <p className="text-lg text-[#4a4a4a]">Kết nối với Xuân Trường </p>
        <div className="grid grid-cols-5 m-2 text-sm space-y-1 text-[#4a4a4a]">
              <ConnectForme />
          </div>
          <p className="text-lg text-[#4a4a4a] mt-6">Website cá nhân </p>
        <div className="grid grid-row-3 m-2 text-sm space-y-1 text-[#4a4a4a]">
              <InfomationWebsite />
          </div>
        </div>
      </div>
      
    </footer>
    </div>

    <div className="bg-slate-100">
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
