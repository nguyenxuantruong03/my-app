import Container from "@/components/ui/container";

const mot = () => {
    return ( 
            <Container>
                <div className="mt-[130px] mb-[20px]">
                    <h1 className="text-center text-3xl text-red-600 uppercase">Chính sách và pháp lý đặt hàng</h1>
                    <span className='font-semibold'>
Chính sách và pháp lý đặt hàng là những quy định và quy tắc mà các tổ chức, doanh nghiệp và cá nhân phải tuân thủ khi thực hiện quá trình đặt hàng sản phẩm hoặc dịch vụ từ nhà cung cấp. Điều này đảm bảo tính hợp pháp, công bằng và đồng nhất trong quá trình mua bán và giao nhận hàng hóa.</span>
                    <div className="flex space-x-2">
                        <h1 className="text-red-600 font-semibold"> Quy định chung về đặt hàng: </h1>
                        <span>Các quy định chung liên quan đến quy trình đặt hàng, bao gồm các bước thực hiện, thời gian giao hàng, phương thức thanh toán, và các điều kiện vận chuyển hàng hóa. </span>
                    </div>
                    <h1 className="text-red-600 font-semibold"> Quy định về giá cả và thanh toán: </h1>
                        <span>Xác định giá cả, thuế và các chi phí phát sinh khác liên quan đến quá trình đặt hàng. Bao gồm cả quy định về phương thức thanh toán, điều khoản về hạn thanh toán và việc xác nhận thanh toán.</span>
                    <h1 className="text-red-600 font-semibold"> Quy định về hoàn trả và đổi trả hàng: </h1>
                        <span>Trước khi xác nhận đơn hàng, hãy kiểm tra lại thông tin về sản phẩm, số lượng, giá, địa chỉ giao hàng, và phương thức thanh toán để đảm bảo không có sai sót.</span>
                    <h1 className="text-red-600 font-semibold"> Bảo mật thông tin: </h1>
                       <span>Quy định về bảo vệ thông tin cá nhân và quyền riêng tư của khách hàng, đảm bảo rằng thông tin được quản lý và sử dụng một cách an toàn và tuân thủ pháp luật.</span>
                       <h1 className="text-red-600 font-semibold"> Quy định về hoàn trả và đổi trả hàng: </h1>
                       <span>Các chính sách liên quan đến việc đổi trả, hoàn tiền hoặc sửa chữa sản phẩm nếu có lỗi hoặc không đáp ứng yêu cầu của khách hàng.</span>
                </div>
            </Container>
        );
}
 
export default mot;