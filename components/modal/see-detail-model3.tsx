import useSeeDetail3 from "@/hooks/use-see-detail3";
import Modal from "./modal";

const SeeDetail3 = () => {
    const seedetail3 = useSeeDetail3()
    return ( 
        <Modal
        open={seedetail3.isOpen}
        onClose={seedetail3.onClose}
        >
            <div className=" rounded-md">
                <h1 className=" bg-[#e5002d] rounded-md text-white font-bold p-2"> Rơi vỡ - Rớt nước</h1>
            
                    <p className="font-bold">Sản phẩm áp dụng:</p>
                    <p>+ Những đồ điện tử, quạt, có phiếu bảo hành.</p>
                <div className="flex">
                    <p className="font-bold">Thời gian bảo hành:</p>
                    <p className="ml-2"> 12 tháng</p>
                </div>
                    <p className="font-bold">Quyền lợi và dịch vụ bảo hành:</p>
                    <p className="mt-3">+ Bao gồm quyền lợi của gói Bảo hành 1 đổi 1 VIP </p>
                    <p>+ Không giới hạn số lần bảo hành đổi máy trong 12 tháng.</p>
                    <p>+ Được đổi sản phẩm tương đương nếu máy hư hỏng nặng không sửa chữa được.</p>
                    <p>+ Được trợ giá nhập lại sản phẩm bị hỏng để lên đời nếu không có sản phẩm để đổi.</p>
                    <p>+ Quỹ bảo hành sửa chữa tính trên giá niêm Yết sản phẩm.</p>
                   
                    <p className="font-bold">Điều kiện bảo hành:</p>
                    <p>+ Sản phẩm bị tác động của ngoại lực gây vỡ hoặc bị ngấm nước, ngấm các chất lỏng khác dẫn đến sản phẩm không hoạt động bình thường.</p>
             
                <p>Lưu ý: Gói bảo hành VIP 1 đổi 1 không có hiệu lực với các sản phẩm bị biến dạng so với ban đầu (cấn, móp, cong, vênh, nứt,…) và các sản phẩm bị vào nước hoặc đã được sửa chữa.</p>
                    <p className="font-bold"> Thời gian xử lý:</p>
                    <p>+ Thời gian sửa chữa từ 7 đến 14 ngày làm việc tùy thuộc vào tình trạng của sản phẩm.</p>
            </div>
        </Modal>
     );
}
 
export default SeeDetail3;