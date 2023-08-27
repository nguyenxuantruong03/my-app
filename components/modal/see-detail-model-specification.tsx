import Modal from "./modal";
import useSeeDetailSpecifications from "@/hooks/use-see-detail-specifications";

interface SeeDetailSpecificationsProps<T> {
  data: T;
}

const SeeDetailSpecifications: React.FC<SeeDetailSpecificationsProps<any>> = ({
  data,
}) => {
  const seedetailspecifications = useSeeDetailSpecifications();

  return (
    <Modal
      open={seedetailspecifications.isOpen}
      onClose={seedetailspecifications.onClose}
    >
      <div className="w-full">
        <div className="bg-[#e5002d] rounded-md text-white font-bold p-2 text-center">
          Thông số kỹ thuật
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
          <div
            key={num}
            className={`justify-around flex p-2 rounded-md my-2 ${
            /* Biểu thức `num % 2 === 0` đang kiểm tra xem giá trị của `num` có phải là số chẵn hay không. `%`
             toán tử là toán tử mô đun, trả về phần dư của phép chia `num` cho 2. Nếu
             số dư là 0, nghĩa là `num` chia hết cho 2 và do đó là số chẵn. Vì vậy, `num %
             2 === 0` đánh giá là `true` cho số chẵn và `false` cho số lẻ. */
              num % 2 === 0 ? "bg-gray-500 bg-opacity-10" : ""
            }`}
          >
            {data[`description${num}specifications`]}
            <p> {data[`value${num}specifications`]} </p>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default SeeDetailSpecifications;
