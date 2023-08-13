import useSeeDetail1 from "@/hooks/use-see-detail1";
import Modal from "./modal";

const SeeDetail1 = () => {
    const seedetail1 = useSeeDetail1()
    return ( 
        <Modal
        open={seedetail1.isOpen}
        onClose={seedetail1.onClose}
        >
            <div >
                <h1 className=" bg-[#e5002d] rounded-md text-white font-bold p-2"> S24+ 12 tháng: Đổi sản phẩm tương đương hoặc miễn phí chi phí sửa chữa nếu có lỗi của NSX khi hết hạn bảo hành trong 12 tháng</h1>
            
                <div className="flex">
                    <p className="font-bold">Sản phẩm áp dụng:</p>
                    <p className="ml-2"> Phụ kiện cao cấp, MacBook, điện thoại mới.</p>
                </div>
                <div className="flex">
                    <p className="font-bold">Thời gian tham gia:</p>
                    <p className="ml-2"> 24 tháng bao gồm 12 tháng bảo hành từ nhà sản xuất.</p>
                </div>
                    <p className="font-bold">Quyền lợi và dịch vụ bảo hành:</p>
                    <p className="mt-3">+ 24 tháng đến 36 tháng bao gồm 12 tháng bảo hành từ nhà sản xuất. </p>
                    <p>+ Sau khi hết bảo hành chính hãng, sản phẩm vẫn được CellphoneS tiếp tục bảo hành các lỗi nhà sản xuất, thời gian bảo hành theo gói bảo hành mà khách hàng lựa chọn.</p>
                    <p>+ Khách hàng được miễn phí chi phí sửa chữa và thay thế linh kiện.</p>
                    <p>+ Được đổi sản phẩm tương đương nếu máy hư hỏng nặng không sửa chữa được.</p>
                    <p>+ Được trợ giá nhập lại sản phẩm bị hỏng để lên đời nếu không có sản phẩm để đổi.</p>
                    <div className="flex mt-3">
                    <p className="font-bold">Điều kiện bảo hành:</p>
                    <p className="ml-2">Sản phẩm bị lỗi do nhà sản xuất khi hết thời gian bảo hành</p>
                </div>
                <p>Lưu ý: Gói bảo hành S24+ không có hiệu lực với các sản phẩm bị biến dạng so với ban đầu (cấn, móp, cong, vênh, nứt,…) và các sản phẩm bị vào nước hoặc đã được sửa chữa.</p>
                    <p className="font-bold"> Thời gian xử lý:</p>
                    <p className="">+ Thời gian sửa chữa từ 7 đến 14 ngày làm việc tùy thuộc vào tình trạng của sản phẩm, riêng MacBook thời gian xử lý bảo hành của hãng có thể lên 3 đến 4 tuần.</p>
                   
                    <p className="font-bold">Địa điểm kiểm tra lỗi và bảo hành:</p>
                    <p className="">+ Tại các trung tâm bảo hành Điện Thoại Vui - CellphoneS hoặc các trung tâm bảo hành của nhà sản xuất.</p>
            </div>
        </Modal>
     );
}
 
export default SeeDetail1;