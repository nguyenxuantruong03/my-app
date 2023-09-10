import Container from "@/components/ui/container";
import Accessory from "./accessory";
import ComputerComponentSmall from './computerComponentSmall';
import Secondhand from "./secondhand";
import {suggestcolor} from "@/components/color/color"

const Suggest = () => {
    return ( 
        <Container>
        <div>
        <p className={suggestcolor.textcolor}>PHỤ KIỆN</p>
            <Accessory />
        </div>

        <div>
        <p className={suggestcolor.textcolor}>LINH KIỆN MÁY TÍNH</p>
            <ComputerComponentSmall />
        </div>

        <div>
        <p className={suggestcolor.textcolor}>HÀNG CŨ</p>
            <Secondhand />
        </div>

      </Container>
     );
}
 
export default Suggest;