import useSeeDetail4 from "@/hooks/use-see-detail4";
import Modal from "./modal";

const SeeDetail4 = () => {
    const seedetail4 = useSeeDetail4()
    return ( 
        <Modal
        open={seedetail4.isOpen}
        onClose={seedetail4.onClose}
        >
            <div>
                <h1 className=" bg-[#e5002d] rounded-md text-white font-bold p-2"> 1 đổi 1 VIP 12 tháng: Đổi máy mới tương đương khi có lỗi từ NSX trong 12 tháng</h1>
            
                    <p className="font-bold">Sản phẩm áp dụng:</p>
                    <p>+ Điện thoại, máy tính bảng mới/cũ, tai nghe cao cấp mới, đồng hồ thông minh Apple/Samsung mới.</p>
                <div className="flex">
                    <p className="font-bold">Thời gian tham gia:</p>
                    <p className="ml-2"> 6 tháng</p>
                </div>
                    <p className="font-bold">Quyền lợi và dịch vụ bảo hành:</p>
                    <p className="mt-3">+ Bao test 1 đổi 1 toàn bộ linh kiện phần cứng của máy (Bao gồm lỗi phím bấm vật lý - Lỗi pin dưới 70%). </p>
                    <p>+ Không giới hạn số lần bảo hành đổi máy nếu phát sinh lỗi (trong phạm vi bảo hành) trong thời gian tham gia.</p>
                    <p>+ Đổi máy tương đương sản phẩm bảo hành.</p>
                    <p>+ Được chuyển nhượng quyền sở hữu của sản phẩm và gói bảo hành trong thời gian tham gia</p>
                    <div className="flex mt-3">
                    <p className="font-bold">Điều kiện bảo hành:</p>
                    <p className="ml-2">Sản phẩm bị lỗi do nhà sản xuất.</p>
                </div>
                <p>Lưu ý: Gói bảo hành không có hiệu lực với các sản phẩm bị biến dạng so với ban đầu (cấn, móp,cong,vênh, nứt,…) và các sản phẩm bị vào nước hoặc đã được sửa chữa.</p>
                    <p className="font-bold"> Thời gian xử lý:</p>
                    <p className="">+ Trong vòng 24h và tối đa 14 ngày làm việc tùy thuộc vào tình trạng của sản phẩm.</p>
            </div>
        </Modal>
     );
}
 
export default SeeDetail4;