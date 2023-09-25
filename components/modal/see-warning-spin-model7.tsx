import { AlertTriangle } from "lucide-react";
import Modal from "./modal";
import useSeeWarningSpin from "@/hooks/use-see-warning-spin";

const WarningSpinModal = () => {
  const warningspin = useSeeWarningSpin();
  return (
    <Modal open={warningspin.isOpen} onClose={warningspin.onClose}>
      <div className="w-full">
        <div className=" bg-yellow-400 rounded-md font-bold p-2  ">
          <h1 className="ml-[320px] flex items-center font-bold">Lưu ý <AlertTriangle className="w-5 h-5 ml-1"/> </h1>
        </div>

        <p className="mt-4">
          Số vòng quay của quý khách không đủ để thực hiện vòng quay . Nếu muốn có thêm vòng quay quý khách có thể mua sắm để được tặng vòng quay may mắn . Vui chơi có thưởng.
        </p>
      </div>
    </Modal>
  );
};

export default WarningSpinModal;
