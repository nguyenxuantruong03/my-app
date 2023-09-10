import ImageDelivery from "./Delivery";
import Mainnav from "./mainnav";
import {navbarcolor} from "@/components/color/color"



const Navbar = () => {
  return (
    <>
    <div className="fixed z-[100] w-full top-0">
    <div className={navbarcolor.bg_height}>
      <div className="mx-auto max-w-6xl ">
        <div className="grid grid-cols-3 ">
          <ImageDelivery/>
        </div>
      </div>
    </div>
      <div className={navbarcolor.bg}>
        <div className=" mx-auto max-w-7xl ">
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
