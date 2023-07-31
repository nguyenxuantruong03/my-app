"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const ImageDelivery = () => {
  const [isMounted,setIsMounted] = useState(false)

  useEffect(()=>{
    setIsMounted(true)
  },[])

  if(!isMounted){
    return null
  }
    return ( 
        <>
        <div>
        <Link href="/">
       <div className=" w-80 h-20 mt-2">
        <Image 
        width="500"
        height="550"
        className="object-fit"
        src="/../public/images/top-banner-chinh-sach-bao-hanh-doi-tra.webp"
        alt="error"
        />
       </div>
      </Link>
        </div>
        <div>
        <Link href="/">
       <div className=" w-80 h-20 mt-2">
        <Image 
        width="500"
        height="550"
        className="object-fit"
        src="/../public/images/top-banner-chinh-hang-xuat-vat-day-du.webp"
        alt="error"
        />
       </div>
      </Link>
        </div>
        <div>
        <Link href="/">
       <div className=" w-80 h-20 mt-2">
        <Image 
        width="500"
        height="550"
        className="object-fit"
        src="/../public/images/top-banner-giao-nhanh-mien-phi.webp"
        alt="error"
        />
       </div>
      </Link>
        </div>
        </>
     );
}
 
export default ImageDelivery;