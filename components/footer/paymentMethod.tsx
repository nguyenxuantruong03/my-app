import Image from "next/image";

const PaymentMethod = () => {
    return ( 
        <>
       <div className=" w-[3.3rem] mt-1 border rounded-sm">
        <Image 
        width="50"
        height="50"
        className="object-fit"
        src="/images/stripe.png"
        alt="error"
        />
       </div>
       <div className="  w-[3.3rem] border rounded-sm">
        <Image 
        width="50"
        height="50"
        className="object-fit"
        src="/images/visa-mastercard.png"
        alt="error"
        />
       </div>
       <div className=" w-14  border rounded-sm">
        <Image 
        width="50"
        height="50"
        className="object-fit"
        src="/images/vnpay-logo.png"
        alt="error"
        />
       </div>
      
       <div className=" w-14  border rounded-sm">
        <Image 
        width="50"
        height="50"
        className="object-fit"
        src="/images/zalopay-logo.png"
        alt="error"
        />
       </div>
       </>
     );
}
 
export default PaymentMethod;