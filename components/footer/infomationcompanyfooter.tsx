import Image from "next/image";
import Link from "next/link";
const InformationCompanyFooter = () => {
  return (
    <>
      <div className="grid grid-cols-4">
        <div className="grid grid-row-2 space-y-2 my-2">
        <div><Link href="/">Điện thoại </Link> - <Link href="/">Điện thoại Iphone </Link> -  <Link href="/">Điện thoại IPhone14</Link></div>
        <div><Link href="/">iPhone 14 Pro 128GB  </Link> - <Link href="/">iPhone 14 Pro Max 128GB </Link></div>
        </div>
        <div className="grid grid-row-2 space-y-2 my-2">
        <div><Link href="/">Điện thoại Vivo </Link> - <Link href="/">Điện thoại OPPO </Link> - <Link href="/">Điện thoại Samsung</Link></div>
        <div><Link href="/">Back to School </Link> - <Link href="/">Điện thoại Samsung S23 Ultra </Link></div>
        </div>
        <div className="grid grid-row-2 space-y-2 my-2">
        <div><Link href="/">Máy tính Laptop</Link> - <Link href="/">Laptop Acer </Link> - <Link href="/">Laptop ASUS</Link></div>
        <div><Link href="/">Máy tính để bàn </Link> - <Link href="/">Tivi </Link> - <Link href="/">Tivi Samsung </Link> - <Link href="/">Sim số đẹp </Link></div>
        </div>
        <div className="grid grid-row-2 space-y-2 my-2">
        <div><Link href="/">Máy hút bụi </Link> - <Link href="/">Máy hút bụi cầm tay </Link> - <Link href="/">Robot hút bụi</Link></div>
        <div><Link href="/">Máy lọc không khí </Link> - <Link href="/">Máy lọc không khí Samsung </Link> </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-[#a6a6a6] space-y-2">
      Công ty TNHH MTV và TLT- Địa chỉ: Lê Văn Quới, Quân Bình Tân, Phường Bình Trị Đông A, Thành phố Hồ Chí Minh, Việt Nam, Điện thoại 0352261103
        </div> 
        <div className="items-center flex justify-center">
        <Link href="/">
       <div className=" mt-1 w-20 h-8 border rounded-sm">
        <Image 
        width="500"
        height="500"
        className="object-fit"
        src="/../public/images/logoSaleNoti.webp"
        alt="error"
        />
       </div>
      </Link>
        </div>
    </>
  );
};

export default InformationCompanyFooter;
