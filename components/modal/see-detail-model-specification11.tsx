import { Product11 } from "@/types";
import Modal from "./modal";
import useSeeDetailSpecifications from "@/hooks/use-see-detail-specifications";

interface SeeDetailSpecificationsPropductProps {
  data: Product11;
}
const SeeDetailSpecifications: React.FC<
  SeeDetailSpecificationsPropductProps
> = ({ data }) => {
  const seedetailspecifications = useSeeDetailSpecifications();
  return (
    <Modal
      open={seedetailspecifications.isOpen}
      onClose={seedetailspecifications.onClose}
    >
      <>
        <div className="w-full">
          <div className="bg-[#e5002d] rounded-md text-white font-bold p-2 text-center">
            Thông số kỹ thuật
          </div>
          <div className=" justify-around flex p-2 rounded-md my-2 bg-gray-500 bg-opacity-10   ">
            {data.descriptionspecifications}
            <p> {data.valuespecifications} </p>
          </div>

          <div className=" justify-around flex p-2 rounded-md my-2    ">
            {data.description2specifications}
            <p> {data.value2specifications} </p>
          </div>

          <div className=" justify-around flex p-2 rounded-md my-2 bg-gray-500 bg-opacity-10   ">
            {data.description3specifications}
            <p> {data.value3specifications} </p>
          </div>

          <div className=" justify-around flex p-2 rounded-md my-2 ">
            {data.description4specifications}
            <p> {data.value4specifications} </p>
          </div>

          <div className=" justify-around flex p-2 rounded-md my-2 bg-gray-500 bg-opacity-10   ">
            {data.description5specifications}
            <p> {data.value5specifications} </p>
          </div>

          <div className=" justify-around flex p-2 rounded-md my-2  ">
            {data.description6specifications}
            <p> {data.value6specifications} </p>
          </div>

          <div className=" justify-around flex p-2 rounded-md my-2 bg-gray-500 bg-opacity-10   ">
            {data.description7specifications}
            <p> {data.value7specifications} </p>
          </div>

          <div className=" justify-around flex p-2 rounded-md my-2   ">
            {data.description8specifications}
            <p> {data.value8specifications} </p>
          </div>

          <div className=" justify-around flex p-2 rounded-md my-2 bg-gray-500 bg-opacity-10   ">
            {data.description9specifications}
            <p> {data.value9specifications} </p>
          </div>

          <div className=" justify-around flex p-2 rounded-md my-2   ">
            {data.description10specifications}
            <p> {data.value10specifications} </p>
          </div>

          <div className=" justify-around flex p-2 rounded-md my-2 bg-gray-500 bg-opacity-10   ">
            {data.description11specifications}
            <p> {data.value11specifications} </p>
          </div>

          <div className=" justify-around flex p-2 rounded-md my-2   ">
            {data.description12specifications}
            <p> {data.value12specifications} </p>
          </div>

          <div className=" justify-around flex p-2 rounded-md my-2 bg-gray-500 bg-opacity-10   ">
            {data.description13specifications}
            <p> {data.value13specifications} </p>
          </div>

          <div className=" justify-around flex p-2 rounded-md my-2">
            {data.description14specifications}
            <p> {data.value14specifications} </p>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default SeeDetailSpecifications;
