import Container from "@/components/ui/container";
import Accessory from "./accessory";
import ComputerComponentSmall from './computerComponentSmall';
import Secondhand from "./secondhand";

const Suggest = () => {
    return ( 
        <Container>
        <div>
        <p className="text-3xl font-bold my-2 text-[#444444]">PHỤ KIỆN</p>
            <Accessory />
        </div>

        <div>
        <p className="text-3xl font-bold my-2 text-[#444444]">LINH KIỆN MÁY TÍNH</p>
            <ComputerComponentSmall />
        </div>

        <div>
        <p className="text-3xl font-bold my-2 text-[#444444]">HÀNG CŨ</p>
            <Secondhand />
        </div>

      </Container>
     );
}
 
export default Suggest;