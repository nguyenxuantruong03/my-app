import Container from "@/components/ui/container";
import Accessory from "./accessory";
import ComputerComponentSmall from './accessory2';
import Secondhand from "./accessory3";
import {suggestcolor} from "@/components/color/color"

const Suggest = () => {
    return ( 
        <Container>
        <div className=" mt-3 md:mt-10">
        <p className={suggestcolor.textcolor}>GIA DỤNG</p>
            <Accessory />
        </div>

        <div className="mt-3 md:mt-10"> 
        <p className={suggestcolor.textcolor}>NỘI THẤT</p>
            <ComputerComponentSmall />
        </div>

        <div className="mt-3 md:mt-10">
        <p className={suggestcolor.textcolor}>XÂY DỰNG</p>
            <Secondhand />
        </div>

      </Container>
     );
}
 
export default Suggest;