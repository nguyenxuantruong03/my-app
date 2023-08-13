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
                    <li>- Sản phẩm áp dụng: Điện thoại, máy tính bảng mới/cũ, tai nghe cao cấp mới, đồng hồ thông minh Apple/Samsung mới. </li>
                    <li>- Thời gian tham gia: 6 tháng / 12 tháng.</li>
                    <li>- Quyền lợi và dịch vụ bảo hành:  </li>
                </ul>

                <p>+ Bao test 1 đổi 1 toàn bộ linh kiện phần cứng của máy ( Bao gồm lỗi phím bấm vật lý - Lỗi pin dưới 70%).</p>
                <p>+ Đổi máy tương đương sản phẩm bảo hành.</p>
                <p>+ Được chuyển nhượng quyền sở hữu của sản phẩm và gói bảo hành trong thời gian tham gia</p>
                <ul>
                    <li>- Điều kiện bảo hành: Sản phẩm bị lỗi do nhà sản xuất.</li>
                    <li>- Lưu ý: Gói bảo hành không có hiệu lực với các sản phẩm bị biến dạng so với ban đầu ( cấn, móp,cong,vênh, nứt…) và các sản phẩm bị vào nước hoặc đã được sửa chữa.</li>
                    <li>- Thời gian xử lý: Trong vòng 24h và tối đa 14 ngày làm việc tùy thuộc vào tình trạng của sản phẩm.  </li>
                </ul>

                <h2 className="font-bold">II  BẢO HÀNH RƠI VỠ, RƠI NƯỚC ( BHRV-NN):</h2>
                <ul>
                    <li>- Sản phẩm áp dụng: Điện thoại/ máy tính bảng mới/ cũ.</li>
                    <li>- Thời gian tham gia: 12 tháng.</li>
                    <li>- Quyền lợi và dịch vụ bảo hành:</li>
                </ul>
                <p>+ Tặng gói Bảo hành 1 đổi 1 VIP ( xem chi tiết gói 1 đổi 1 VIP tại đây)</p>
                <p>+ Không giới hạn số lần bảo hành đổi máy.</p>
                <p>+ Máy rơi vỡ - vào nước : khách hàng được hỗ trợ tới 90% chi phí sửa chữa.</p>

                <h2 className="font-bold">III BẢO HÀNH MỞ RỘNG S24+:</h2>
                <ul>
                    <li>- Sản phẩm áp dụng: Phụ kiện cao cấp,  Macbook, điện thoại mới.</li>
                    <li>- Thời gian tham gia: 24 tháng đến 36 tháng bao gồm 12 tháng bảo hành từ nhà sản xuất.</li>
                    <li>- Quyền lợi và dịch vụ bảo hành: </li>
                </ul>
                <p>+ 24 tháng đến 36 tháng bao gồm 12 tháng bảo hành từ nhà sản xuất.</p>
                <p>+ Sau khi hết bảo hành chính hãng, sản phẩm vẫn được CellphoneS tiếp tục bảo hành các lỗi nhà sản xuất, thời gian bảo hành theo gói bảo hành mà khách hàng lựa chọn.</p>
                <p>+ Được đổi sản phẩm tương đương nếu máy hư hỏng nặng không sửa chữa được.</p>
                <p>+ Được trợ giá nhập lại sản phẩm bị hỏng để lên đời nếu không có sản phẩm để đổi.</p>
                
            </div>
        </Modal>
     );
}
 
export default SeeDetail;