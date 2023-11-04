import Link from "next/link";


const ServiceInfomation = () => {
    return ( 
        <>
         <Link href="/enterprise">
        <div>Khách hàng doanh nghiệp</div>
      </Link>
      <Link href="/guarantee">
        <div>Chính sách Bảo hành</div>
      </Link>
        </>
     );
}
 
export default ServiceInfomation;