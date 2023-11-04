import Container from "@/components/ui/container";

const mot = () => {
    return ( 
            <Container>
                <div className="mt-[130px] mb-[20px]">
                    <h1 className="text-center text-3xl text-red-600 uppercase">Chính sách Bảo hành</h1>
                    <div className="flex space-x-2">
                        <h1 className="text-red-600 font-semibold"> Thời gian bảo hành: </h1>
                        <span>Thời gian bảo hành thường được quy định từ trước bởi nhà sản xuất hoặc nhà cung cấp dựa trên loại sản phẩm. Đối với đồ điện tử và điện nước, thời gian bảo hành thường nằm trong khoảng từ 6 tháng đến 2 năm. Một số sản phẩm cao cấp có thể có thời gian bảo hành lâu hơn. </span>
                    </div>
                    <h1 className="text-red-600 font-semibold"> Nội dung bảo hành: </h1>
                        <span>Chính sách bảo hành cần ghi rõ những phần mà bảo hành áp dụng, ví dụ như linh kiện, cấu trúc, hoặc chất lượng công việc. Bảo hành thường không áp dụng đối với các sự cố gây ra do lỗi của người dùng hoặc do các yếu tố bên ngoài như lửa, nước, va đập.</span>
                    <h1 className="text-red-600 font-semibold">Cách thức gửi bảo hành: </h1>
                        <span>Chính sách này mô tả quy trình người tiêu dùng cần thực hiện khi muốn gửi sản phẩm bảo hành. Điều này bao gồm việc liên hệ với trung tâm bảo hành, điền thông tin, và cách đóng gói sản phẩm.</span>
                    <h1 className="text-red-600 font-semibold"> Phí bảo hành: </h1>
                        <span>Một số chính sách bảo hành có thể quy định các loại phí có thể phát sinh trong quá trình bảo hành như phí vận chuyển, phí thay thế linh kiện, hoặc phí sửa chữa.</span>
                    <h1 className="text-red-600 font-semibold"> Dịch vụ hỗ trợ sau bảo hành: </h1>
                        <span>Bên cạnh chính sách bảo hành, cần nêu rõ dịch vụ hỗ trợ sau khi kết thúc thời gian bảo hành, bao gồm việc cung cấp linh kiện, sửa chữa với chi phí phát sinh.</span>
                        <h1 className="text-red-600 font-semibold"> Quyền lợi của người tiêu dùng: </h1>
                        <span>Chính sách cần nêu rõ quyền lợi của người tiêu dùng trong thời gian bảo hành, bao gồm quyền được sửa chữa, thay thế, hoặc hoàn tiền trong trường hợp sản phẩm không hoạt động đúng chức năng.</span>
                </div>
            </Container>
        );
}
 
export default mot;