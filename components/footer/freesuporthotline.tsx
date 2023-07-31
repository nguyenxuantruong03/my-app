import Link from "next/link";


const FreeSupportHotline = () => {
    return ( 
        <>
        <Link href="/">
        <div className=" text-sm text-[#4a4a4a]]">Gọi mua hàng <span className="font-extrabold text-[#585858]">035.222.111</span> (7h30- 22h00)</div>
      </Link>
      <Link href="/">
        <div className=" text-sm text-[#4a4a4a]">Gọi Khiếu nại <span className="font-extrabold text-[#585858]">035.222.333</span> (7h30- 22h00)</div>
      </Link>
      <Link href="/">
        <div className=" text-sm text-[#4a4a4a]">Gọi bảo hành <span className="font-extrabold text-[#585858]">035.222.444</span> (7h30- 22h00)</div>
      </Link>
        </>
     );
}
 
export default FreeSupportHotline;