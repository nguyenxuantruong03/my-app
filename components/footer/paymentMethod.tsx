import Image from "next/image";
import Link from "next/link";

const PaymentMethod = () => {
    return ( 
        <>
        <Link href="/">
       <div className=" mt-1 w-14  border rounded-sm">
        <Image 
        width="50"
        height="50"
        className="object-fit"
        src="/../public/images/alepay-logo.png"
        alt="error"
        />
       </div>
      </Link>

      <Link href="/">
       <div className=" w-14  border rounded-sm">
        <Image 
        width="50"
        height="50"
        className="object-fit"
        src="/../public/images/kredivo-logo.png"
        alt="error"
        />
       </div>
      </Link>

      <Link href="/">
       <div className=" w-14  border rounded-sm">
        <Image 
        width="50"
        height="50"
        className="object-fit"
        src="/../public/images/moca-logo.png"
        alt="error"
        />
       </div>
      </Link>

      <Link href="/">
       <div className=" w-14  border rounded-sm">
        <Image 
        width="50"
        height="50"
        className="object-fit"
        src="/../public/images/mpos-logo.png"
        alt="error"
        />
       </div>
      </Link>

      <Link href="/">
       <div className=" w-14  border rounded-sm">
        <Image 
        width="50"
        height="50"
        className="object-fit"
        src="/../public/images/onepay-logo.png"
        alt="error"
        />
       </div>
      </Link>

      <Link href="/">
       <div className=" w-14  border rounded-sm">
        <Image 
        width="50"
        height="50"
        className="object-fit"
        src="/../public/images/vnpay-logo.png"
        alt="error"
        />
       </div>
      </Link>

      <Link href="/">
       <div className=" w-14  border rounded-sm">
        <Image 
        width="50"
        height="50"
        className="object-fit"
        src="/../public/images/zalopay-logo.png"
        alt="error"
        />
       </div>
      </Link>
      </>
     );
}
 
export default PaymentMethod;