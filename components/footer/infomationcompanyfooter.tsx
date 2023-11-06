import Image from "next/image";
import Link from "next/link";
import {InformationCompanyFootercolor} from "@/components/color/color"

const InformationCompanyFooter = () => {
  return (
    <>
      <div className=" lg:grid-cols-4 hidden lg:grid">
        <div className="grid grid-row-2 space-y-2 my-2">
        <div><Link href="https://vlxdxuantruong.vercel.app/category/Pin%20con%20%C3%B3">Pin con ó</Link> - <Link href="https://vlxdxuantruong.vercel.app/category10/%C4%90i%E1%BB%87n%20Quang">Bóng Điện Quang </Link> -  <Link href="https://vlxdxuantruong.vercel.app/category10/%C4%90%C3%A8n%20R%E1%BA%A1ng%20%C4%90%C3%B4ng">Bóng Rạng Đông</Link></div>
        <div><Link href="https://vlxdxuantruong.vercel.app/category6/Keo%202%20m%E1%BA%B7t">Keo 2 mặt </Link> - <Link href="https://vlxdxuantruong.vercel.app/category11/L%C6%B0%E1%BB%9Bi%20xanh">Lưới xanh </Link> - <Link href="https://vlxdxuantruong.vercel.app/category11/Xe%20r%C3%B9a">Xe rùa </Link> - <Link href="https://vlxdxuantruong.vercel.app/category11/Th%C6%B0%E1%BB%9Bc%20K%C3%A9o">Thước kéo </Link></div>
        </div>
        <div className="grid grid-row-2 space-y-2 my-2">
        <div><Link href="https://vlxdxuantruong.vercel.app/category2/%E1%BB%90ng%20B%C3%ACnh%20Minh">Ống Bình Minh </Link> - <Link href="https://vlxdxuantruong.vercel.app/category1/Qu%E1%BA%A1t%20Senko">Quạt Treo Senko</Link> - <Link href="https://vlxdxuantruong.vercel.app/category2/N%E1%BB%91i">Nối</Link></div>
        <div><Link href="https://vlxdxuantruong.vercel.app/category11/Th%C3%B4ng%20c%E1%BB%91ng">Sifa Thông Cống</Link> - <Link href="https://vlxdxuantruong.vercel.app/category8/S%C6%A1n%20x%E1%BB%8Bt%20ATM">Sơn xịt ATM </Link> - <Link href="https://vlxdxuantruong.vercel.app/category11/C%E1%BB%9D%20l%C3%AA">Cờ lê Yeti </Link> - <Link href="https://vlxdxuantruong.vercel.app/category11/B%E1%BA%A1t%20xanh">Bạt xanh </Link></div>
        </div>
        <div className="grid grid-row-2 space-y-2 my-2">
        <div><Link href="https://vlxdxuantruong.vercel.app/category6/Keo%20Apolo">Keo Apolo</Link> - <Link href="https://vlxdxuantruong.vercel.app/category3/Daphaco">Dây Daphaco </Link> - <Link href="/https://vlxdxuantruong.vercel.app/category3/Daphaco">Dây Daphaco lớn</Link></div>
        <div><Link href="https://vlxdxuantruong.vercel.app/category3/Cadivi">Dây điện Cadivi </Link> - <Link href="https://vlxdxuantruong.vercel.app/category1/Qu%E1%BA%A1t%20Senko">Quạt Senko </Link> - <Link href="https://vlxdxuantruong.vercel.app/category8/Expo">Sơn Expo</Link> - <Link href="https://vlxdxuantruong.vercel.app/category7/Sino">Ổ cắm Sino </Link></div>
        </div>
        <div className="grid grid-row-2 space-y-2 my-2">
        <div><Link href="https://vlxdxuantruong.vercel.app/category7/%E1%BB%94%20c%E1%BA%AFm">Ổ cắm cây thông </Link> - <Link href="https://vlxdxuantruong.vercel.app/category7/%E1%BB%94%20c%E1%BA%AFm">Ổ cắm Điện Quang </Link> - <Link href="https://vlxdxuantruong.vercel.app/category6/Keo%20con%20voi(502)">Keo dán sắt</Link></div>
        <div><Link href="https://vlxdxuantruong.vercel.app/category8/B%E1%BA%A1ch%20Tuy%E1%BA%BFt">Sơn Bạch Tuyết </Link> - <Link href="https://vlxdxuantruong.vercel.app/category6/Keo%20con%20ch%C3%B3">Keo con chó </Link> - <Link href="https://vlxdxuantruong.vercel.app/category11/V%C3%AA%20l%E1%BB%97">V lỗ </Link> - <Link href="https://vlxdxuantruong.vercel.app/category11/Que%20h%C3%A0n">Que hàn </Link> </div>
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
        src="/images/logoSaleNoti.webp"
        alt="error"
        />
      </Link>
        </div>
    </>
  );
};

export default InformationCompanyFooter;
