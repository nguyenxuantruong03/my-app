import Image from "next/image";
import Link from "next/link";

const Accessory = () => {
    return ( 
        <div className="grid grid-cols-10  my-4 mx-2">
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg">
        <Link href="/">
        <span className="text-white font-bold p-2"> Nổi bật </span>
        <div className="m-4">
        <Image 
        width="80"
        height="100"
        className="object-fit"
        src="/../public/images/Accessory.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg overflow-hidden">
        <Link href="/">
        <span className="text-white font-bold p-2"> Phụ kiện </span>
        <span className="text-white font-bold p-2"> Apple </span>
        <div className="mb-2">
        <Image 
        width="120"
        height="90"
        className="object-fit"
        src="/../public/images/Pk-iphone.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Dán màn hình </span>
        <div className=" mt-4">
        <Image 
        width="300"
        height="300"
        className="object-fit"
        src="/../public/images/PK-manhinh.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Ốp lưng - Bao </span>
        <span className="text-white font-bold p-2"> da </span>
        <div className="ml-6 -mt-5">
        <Image 
        width="100"
        height="70"
        className="object-fit"
        src="/../public/images/PK-oplung.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Cáp, sạc </span>
        <div className="mr-1 mb-2 -mt-4">
        <Image 
        width="120"
        height="120"
        className="object-fit"
        src="/../public/images/PK-cucsac.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Pin dự phòng </span>
        <div className="m-3 mr-2">
        <Image 
        width="80"
        height="100"
        className="object-fit"
        src="/../public/images/Pk-cucsacdanang.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Thiết bị mạng </span>
        <div className="m-3 mr-2 ">
        <Image 
        width="90"
        height="100"
        className="object-fit"
        src="/../public/images/PK-router.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Gaming Gear </span>
        <div className="m-4">
        <Image 
        width="85"
        height="100"
        className="object-fit"
        src="/../public/images/PK-taycam.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Gimbal | Tay </span>
        <span className="text-white font-bold pl-2">  cầm chống  </span>
        <span className="text-white font-bold pl-2">  rung </span>
        <div className="-mt-5 ml-8">
        <Image 
        width="70"
        height="20"
        className="object-fit"
        src="/../public/images/PK-gimble.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg ">
        <Link href="/">
        <span className="text-white font-bold p-2"> Thẻ nhớ, USB </span>
        <div className="m-3">
        <Image 
        width="80"
        height="100"
        className="object-fit"
        src="/../public/images/Pk-USB.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg mt-3">
        <Link href="/">
        <span className="text-white font-bold p-2"> Chuột, bàn </span>
        <span className="text-white font-bold p-2"> phím </span>
        <div className="ml-8">
        <Image 
        width="70"
        height="30"
        className="object-fit"
        src="/../public/images/PK-chuột.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg mt-3">
        <Link href="/">
        <span className="text-white font-bold p-2"> Sim 4G </span>
        <div className="-mt-9">
        <Image 
        width="140"
        height="140"
        className="object-fit"
        src="/../public/images/Pk-Sim.webp"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg mt-3">
        <Link href="/">
        <span className="text-white font-bold p-2"> Sim số đẹp</span>
        <div className="-mt-10">
        <Image 
        width="170"
        height="150"
        className="object-fit"
        src="/../public/images/Pk-Sim-so-dep.webp"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg mt-3">
        <Link href="/">
        <span className="text-white font-bold p-2"> Camera hành </span>
        <span className="text-white font-bold p-2"> trình </span>
        <div className="-mt-16">
        <Image 
        width="140"
        height="140"
        className="object-fit"
        src="/../public/images/Pk-camera-hanh-trinh.webp"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg mt-3">
        <Link href="/">
        <span className="text-white font-bold p-2"> Camera an</span>
        <span className="text-white font-bold p-2"> ninh</span>
        <div className="-mt-16">
        <Image 
        width="140"
        height="140"
        className="object-fit"
        src="/../public/images/Pk-camera.webp"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg mt-3">
        <Link href="/">
        <span className="text-white font-bold p-2"> Phụ kiện </span>
        <span className="text-white font-bold p-2"> Laptop </span>
        <div className="ml-6">
        <Image 
        width="80"
        height="100"
        className="object-fit"
        src="/../public/images/Pk-Gia-do-lap-top.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg mt-3">
        <Link href="/">
        <span className="text-white font-bold p-2">Balo, túi </span>
        <span className="text-white font-bold p-2"> chống sốc </span>
        <div className="ml-6">
        <Image 
        width="75"
        height="70"
        className="object-fit"
        src="/../public/images/Pk-balo-chong-nuoc.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg mt-3">
        <Link href="/">
        <span className="text-white font-bold p-2"> Quạt mini </span>
        <div className="-mt-7">
        <Image 
        width="110"
        height="110"
        className="object-fit"
        src="/../public/images/Pk-quat-mini.webp"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg mt-3">
        <Link href="/">
        <span className="text-white font-bold p-2">Ổ cứng di </span>
        <span className="text-white font-bold p-2"> dộng</span>
        <div className="-mt-3 ml-9">
        <Image 
        width="90"
        height="100"
        className="object-fit"
        src="/../public/images/Pk-o-cung-di-dong.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        <div className="w-[120px] h-[125px] bg-[#f8827a] rounded-lg mt-3">
        <Link href="/">
        <span className="text-white font-bold p-2"> Apple Care </span>
        <div className="ml-3">
        <Image 
        width="100"
        height="100"
        className="object-fit"
        src="/../public/images/PK-logo-apple.png"
        alt="error"
        />
        </div>
        </Link>

        
        </div>
        
        </div>
     );
}
 
export default Accessory;