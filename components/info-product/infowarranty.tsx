"use client";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Currencyonevalue from "@/components/ui/currencyonevalue";
import useCart from "@/hooks/use-cart";
import useSeeDetail from "@/hooks/use-see-detail";
import useSeeDetail1 from "@/hooks/use-see-detail1";
import useSeeDetail2 from "@/hooks/use-see-detail2";
import useSeeDetail3 from "@/hooks/use-see-detail3";
import useSeeDetail4 from "@/hooks/use-see-detail4";
import {Product,Product1,Product10,Product11,Product2,Product3,Product4,Product5,Product6,Product7,Product8,Product9,} from "@/types";
import { ShieldCheck } from "lucide-react";

interface InfoWarrantyProps {
  data:| Product| Product1 | Product2| Product3| Product4| Product5| Product6| Product7| Product8| Product9| Product10| Product11;
}

const InfoWarranty: React.FC<InfoWarrantyProps> = ({ data }) => {
  const cart = useCart();
  const seedetail = useSeeDetail();
  const seedetail1 = useSeeDetail1();
  const seedetail2 = useSeeDetail2();
  const seedetail3 = useSeeDetail3();
  const seedetail4 = useSeeDetail4();
  const [selectedWarranty, setSelectedWarranty] = useState<string | null>(null);

  const handleWarrantyCheckboxChange = (warrantyOption: string) => {
    // If the clicked option is already selected, uncheck it
    if (selectedWarranty === warrantyOption) {
      setSelectedWarranty(null);
    } else {
      setSelectedWarranty(warrantyOption);
    }
    cart.updateWarrantyOption(data.id, warrantyOption);
  };

  const onSeeDetail = () => {
    seedetail.onOpen();
  };

  const onSeeDetail1 = () => {
    seedetail1.onOpen();
  };

  const onSeeDetail2 = () => {
    seedetail2.onOpen();
  };

  const onSeeDetail3 = () => {
    seedetail3.onOpen();
  };

  const onSeeDetail4 = () => {
    seedetail4.onOpen();
  };

  const warrantyOptions = [
    {
      heading: "S24 + 12 tháng",
      description:
        "Đổi sản phẩm tương đương hoặc miễn phí chi phí sữa chữa nếu có lỗi của NSX khi hết hạn bảo hành trong 12 tháng",
      value: data.guaranteeheading,
      onClick: onSeeDetail1,
    },
    {
      heading: "1 đổi 1 VIP 12 tháng",
      description: "Đổi máy mới tương đương khi có lỗi từ NSX trong 12 tháng",
      value: data.guaranteedescription,
      onClick: onSeeDetail2,
    },
    {
      heading: "Rơi vỡ - Rớt nước",
      description:
        "Hỗ trợ 90% chi phí sữa chữa, đổi mới sản phẩm nếu hư hỏng nặng trong 12 tháng",
      value: data.guaranteeinfomation,
      onClick: onSeeDetail3,
    },
    {
      heading: "1 đổi 1 VIP 6 tháng",
      description: "Đổi máy mới tương đương khi có lỗi từ NSX trong 6 tháng",
      value: data.guaranteeprice,
      onClick: onSeeDetail4,
    },
  ];

  return (
    <>
      <div className="my-1 ">
        <div className="flex bg-gradient-to-r from-[#C00000] to-[#FF3334] rounded-md p-5">
          <ShieldCheck className="text-white" />
          <div className="flex ml-2 ">
            <h1 className="text-sm md:text-base ml-2 text-white font-bold ">
              Bảo vệ sản phẩm toàn diện với dịch vụ bảo hành mở rộng
            </h1>
            <span
              onClick={onSeeDetail}
              className=" ml-2  underline font-bold cursor-pointer"
            >
              {" "}
              Xem chi tiết
            </span>
          </div>
        </div>
        <p className="text-sm mx-4 my-2">
          (Khách hàng đăng ký thông tin để được hỗ trợ tư vấn và thanh toán tại
          cửa hàng nhanh nhất, số tiền phải thanh toán chưa bao gồm giá trị của
          gói bảo hành mở rộng)
        </p>
      </div>
      <RadioGroup
        value={selectedWarranty}
        onChange={handleWarrantyCheckboxChange}
      >
        <div className="space-y-1">
          {warrantyOptions.map((option, index) => (
            <RadioGroup.Option
              key={index}
              value={option.value}
              className={({ active, checked }) =>
                `${
                  checked ? "bg-[#FF3334] bg-opacity-40 text-white" : "bg-white"
                } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
              }
            >
              {({ active, checked }) => (
                <>
                  <div className="flex w-full items-center justify-between h-[49px]">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium  ${
                            checked ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {option.heading}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={`inline ${
                            checked ? "text-gray-900" : "text-gray-500"
                          }`}
                        >
                          <span className="hidden md:block">{option.description}</span>
                        </RadioGroup.Description>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between mt-2 ">
                    <div className="flex items-center">
                      <button
                        className={`w-6 h-6 border rounded-full flex items-center justify-center border-gray-300 mx-3 ${
                          selectedWarranty === option.value
                            ? "bg-[#C00000] border-[#FF3334]"
                            : ""
                        }`}
                        onClick={() =>
                          handleWarrantyCheckboxChange(option.value)
                        }
                      >
                        {selectedWarranty === option.value && (
                          <CheckIcon className="text-white" />
                        )}
                      </button>
                      <p className="text-sm px-10">
                        <Currencyonevalue value={option.value} />
                      </p>
                    </div>
                    <span
                      onClick={option.onClick}
                      className="text-red-600 cursor-pointer text-sm font-bold my-auto"
                    >
                      Xem
                    </span>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </>
  );
};

export default InfoWarranty;

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
