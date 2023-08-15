import ImageDelivery from "./Delivery";
import Mainnav from "./mainnav";
import Link from "next/link";


const Navbar = () => {
  return (
    <>
    <div className="fixed z-[9999] w-full top-0">
    <div className="h-[40px] bg-[#e9efff]">
    <Link href="/#">
      <div className="mx-auto max-w-6xl ">
        <div className="grid grid-cols-3 ">
          <ImageDelivery />
        </div>
      </div>
    </Link>
    </div>

      <div className="bg-[#de0024]">
        <div className=" mx-auto max-w-7xl  ">
          <div className="relative flex h-16 items-center justify-between">
            <Mainnav />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
