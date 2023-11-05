import Image from "next/image";
import Link from "next/link";
const ConnectForme = () => {
    return ( 
        <>
        <Link href="https://www.facebook.com/nguyenxuantruong03/">
        <div className="w-12 h-6 border rounded-sm mt-1">
         <Image 
         width="50"
         height="50"
         className="object-fit"
         src="/images/facebook.png"
         alt="error"
         />
        </div>
       </Link>

       <Link href="https://www.instagram.com/nguyenxuantruong03/">
        <div className="w-12 h-6 border rounded-sm">
         <Image 
         width="50"
         height="50"
         className="object-fit"
         src="/images/instagram.png"
         alt="error"
         />
        </div>
       </Link>

       <Link href="https://www.tiktok.com/@xuantruong1.1">
        <div className="w-12 h-6 border rounded-sm">
         <Image 
         width="50"
         height="50"
         className="object-fit"
         src="/images/tiktok.png"
         alt="error"
         />
        </div>
       </Link>

       <Link href="">
        <div className="w-12 h-6 border rounded-sm">
         <Image 
         width="50"
         height="50"
         className="object-fit"
         src="/images/zalo.png"
         alt="error"
         />
        </div>
       </Link>

       <Link href="https://www.youtube.com/channel/UCLv3jJ-NxS73KQ5ivJf8Crw">
        <div className="w-12 h-6 border rounded-sm">
         <Image 
         width="50"
         height="50"
         className="object-fit"
         src="/images/youtube.png"
         alt="error"
         />
        </div>
       </Link>
       </>
     );
}
 
export default ConnectForme;