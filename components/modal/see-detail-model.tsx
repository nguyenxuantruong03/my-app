import useSeeDetail from "@/hooks/use-see-detail";
import Modal from "./modal";

const SeeDetail = () => {
    const seedetail = useSeeDetail()
    return ( 
        <Modal
        open={seedetail.isOpen}
        onClose={seedetail.onClose}
        >
            <div >
                <h1 className="text-center font-bold text-2xl">Chi tiết dịch vụ mở rộng</h1>

                <h2 className="font-bold">I. BẢO HÀNH 1 ĐỔI 1 VIP:</h2>
                <ul>
                    <li>- Sản phẩm áp dụng: Những đồ điện tử, quạt, có phiếu bảo hành. </li>
                    <li>- Thời gian bảo hành: 6 tháng / 12 tháng.</li>
                    <li>- Quyền lợi và dịch vụ bảo hành:  </li>
                </ul>

                <p>+ Kiểm tra 1 đổi 1 toàn bộ linh kiện của sản phẩm.</p>
                <p>+ Đổi sản phẩm tương đương sản phẩm bảo hành.</p>
                <ul>
                    <li>- Điều kiện bảo hành: Sản phẩm bị lỗi do nhà sản xuất.</li>
                    <li>- Lưu ý: Gói bảo hành không có hiệu lực với các sản phẩm bị biến dạng so với ban đầu ( cấn, móp,cong,vênh, nứt…) và các sản phẩm bị vào nước hoặc đã được sửa chữa.</li>
                    <li>- Thời gian xử lý: Trong vòng 24h và tối đa 14 ngày làm việc tùy thuộc vào tình trạng của sản phẩm.  </li>
                </ul>

                <h2 className="font-bold">II RƠI VỠ, RƠI NƯỚC:</h2>
                <ul>
                    <li>- Sẽ không được bảo hành.</li>
                </ul>

                <h2 className="font-bold">III BẢO HÀNH CHÍNH HÃNG MẤT PHÍ</h2>
                <ul>
                    <li>-  Những đồ điện tử, quạt, và chỉ hư một số phụ kiện.</li>
                    <li>- Thời gian bảo hành : 1-2 tuần</li>
                </ul>
                <p>+ Sau khi hết bảo hành chính hãng, sản phẩm vẫn được tiếp tục bảo hành các lỗi nhà sản xuất, thời gian bảo hành theo gói bảo hành mà khách hàng lựa chọn.</p>
                <p>+ Được đổi sản phẩm tương đương nếu máy hư hỏng nặng không sửa chữa được.</p>
                <p>+ Được trợ giá nhập lại sản phẩm bị hỏng để lên đời nếu không có sản phẩm để đổi.</p>
                
            </div>
        </Modal>
     );
}
 
export default SeeDetail;