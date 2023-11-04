import Image from "next/image";
import Link from "next/link";
import {InformationCompanyFootercolor} from "@/components/color/color"

const InformationCompanyFooter = () => {
  return (
    <>
      <div className=" lg:grid-cols-4 hidden lg:grid">
        <div className="grid grid-row-2 space-y-2 my-2">
        <div><Link href="/">Pin con ó</Link> - <Link href="/">Bóng Điện Quang </Link> -  <Link href="/">Bóng Rạng Đông</Link></div>
        <div><Link href="/">Keo 2 mặt </Link> - <Link href="/">Lưới xanh </Link> - <Link href="/">Xe rùa </Link> - <Link href="/">Thước kéo </Link></div>
        </div>
        <div className="grid grid-row-2 space-y-2 my-2">
        <div><Link href="/">Ống Bình Minh </Link> - <Link href="/">Quạt Treo Senko</Link> - <Link href="/">Ống lưới xanh</Link></div>
        <div><Link href="/">Sifa Thông Cống</Link> - <Link href="/">Sơn xịt ATM </Link> - <Link href="/">Cờ lê Yeti </Link> - <Link href="/">Bạt xanh </Link></div>
        </div>
        <div className="grid grid-row-2 space-y-2 my-2">
        <div><Link href="/">Keo Apolo</Link> - <Link href="/">Dây Daphaco </Link> - <Link href="/">Dây Daphaco lớn</Link></div>
        <div><Link href="/">Dây điện Cadivi </Link> - <Link href="/">Quạt Senko </Link> - <Link href="/">Sơn Expo</Link> - <Link href="/">Ổ cắm Sino </Link></div>
        </div>
        <div className="grid grid-row-2 space-y-2 my-2">
        <div><Link href="/">Ổ cắm cây thông </Link> - <Link href="/">Ổ cắm Điện Quang </Link> - <Link href="/">Keo dán sắt</Link></div>
        <div><Link href="/">Sơn Bạch Tuyết </Link> - <Link href="/">Keo con chó </Link> - <Link href="/">V lỗ </Link> - <Link href="/">Que hàn </Link> </div>
        </div>
      </div>
      <div className={InformationCompanyFootercolor.textflex}>
      Cửa hàng VLXH - Địa chỉ: 457 Lê Văn Quới, Quân Bình Tân, Phường Bình Trị Đông A, Thành phố Hồ Chí Minh, Việt Nam, Điện thoại 0352261103
        </div> 
        <div className="items-center flex justify-center">
        <Link href="/" className=" mt-1 w-20 h-8 border rounded-sm mb-16 md:mb-0">
        <Image 
        width="500"
        height="500"
        className="object-fit"
        src="/../public/images/logoSaleNoti.webp"
        alt="error"
        />
      </Link>
        </div>
    </>
  );
};

export default InformationCompanyFooter;
