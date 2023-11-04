import Container from "@/components/ui/container";

const mot = () => {
    return ( 
            <Container>
                <div className="mt-[130px] mb-[20px]">
                    <h1 className="text-center text-3xl text-red-600 uppercase">Mua hàng và thanh toán online</h1>
                    <span className='font-semibold'>Mua hàng từ xa, hay còn gọi là mua hàng online, là một xu hướng ngày càng phổ biến trong thời đại công nghệ số hiện nay. Điều này mang lại sự tiện lợi và linh hoạt cho người tiêu dùng, giúp họ tiết kiệm thời gian và có nhiều lựa chọn hơn về sản phẩm.</span>
                    <div className="flex space-x-2">
                        <h1 className="text-red-600 font-semibold"> Chuyển khoản hoặc Thanh toán online trên website: </h1>
                        <span>thanh toán cực kì dễ dàng qua Visa và master card. </span>
                    </div>
                    <h1 className="text-red-600 font-semibold"> Nắm vững thông tin về sản phẩm: </h1>
                        <span>Trước tiên, hãy nắm vững thông tin về sản phẩm mà bạn muốn mua. Xem xét các đặc điểm kỹ thuật, giá cả, và các đánh giá từ người dùng khác để đảm bảo rằng sản phẩm phù hợp với nhu cầu của bạn.</span>
                    <h1 className="text-red-600 font-semibold"> Xác nhận đơn hàng: </h1>
                        <span>Trước khi xác nhận đơn hàng, hãy kiểm tra lại thông tin về sản phẩm, số lượng, giá, địa chỉ giao hàng, và phương thức thanh toán để đảm bảo không có sai sót.</span>
                    <h1 className="text-red-600 font-semibold"> Gửi đánh giá và phản hồi: </h1>
                       <span>Sau khi nhận hàng và sử dụng sản phẩm, hãy gửi đánh giá và phản hồi của bạn về sản phẩm và dịch vụ của cửa hàng để giúp người tiêu dùng khác có được quyết định mua hàng đúng đắn.</span>
                </div>
            </Container>
        );
}
 
export default mot;