import Image from "next/image";
import Link from "next/link";
import {computerComponentSmallcolor} from "@/components/color/color"

const computerComponentSmall = () => {
    return ( 
        <div className="grid grid-cols-10  my-4 mx-2">
        <div className={computerComponentSmallcolor.bg_height_width_rounded}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Pc ráp sẵn </span>
        <div className="ml-2">
        <Image 
        width="100"
        height="100"
        className="object-fit"
        src="/../public/images/PK-Pc-lap-rap-san.png"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg_height_width_rounded_overflowhidden}>
        <Link href="/">
        <span className="text-white font-bold p-1"> CPU </span>
        <div className="-mt-10">
        <Image 
        width="120"
        height="120"
        className="object-fit"
        src="/../public/images/PK-CPU.webp"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Mainboard </span>
        <div className=" -mt-8">
        <Image 
        width="300"
        height="300"
        className="object-fit"
        src="/../public/images/PK-Mainboard.webp"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg1}>
        <Link href="/">
        <span className="text-white font-bold p-2"> RAM </span>
        <div className="-mt-10">
        <Image 
        width="120"
        height="120"
        className="object-fit"
        src="/../public/images/PK-Ram.webp"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg2}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Ổ cứng </span>
        <div className="-mt-10">
        <Image 
        width="120"
        height="120"
        className="object-fit"
        src="/../public/images/PK-SSD.webp"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg3}>
        <Link href="/">
        <span className="text-white font-bold p-2">Card màn </span>
        <span className="text-white font-bold p-2">hình </span>
        <div className="-mt-16">
        <Image 
        width="120"
        height="120"
        className="object-fit"
        src="/../public/images/PK-VGA.webp"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg4}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Nguồn máy </span>
        <span className="text-white font-bold p-2"> tính </span>
        <div className="-mt-14 ">
        <Image 
        width="120"
        height="100"
        className="object-fit"
        src="/../public/images/PK-Nguon-may-tinh.webp"
        alt="error"
        />
        </div>
        </Link>
        </div>

        <div className={computerComponentSmallcolor.bg5}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Tản nhiệt </span>
        <div className="-mt-10">
        <Image 
        width="120"
        height="100"
        className="object-fit"
        src="/../public/images/Pk-tan-nhiet.webp"
        alt="error"
        />
        </div>
        </Link>

        
        </div>

        <div className={computerComponentSmallcolor.bg6}>
        <Link href="/">
        <span className="text-white font-bold p-2"> Case máy tính </span>
        <div className="-mt-10">
        <Image 
        width="150"
        height="120"
        className="object-fit"
        src="/../public/images/PK-case-may-tinh.webp"
        alt="error"
        />
        </div>
        </Link>
        </div>
        
        </div>
     );
}
 
export default computerComponentSmall;