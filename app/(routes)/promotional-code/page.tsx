import Container from "@/components/ui/container";

const mot = () => {
    return ( 
            <Container>
                <div className="mt-[130px] mb-[20px]">
                    <h1 className="text-center text-3xl text-red-600 uppercase">Mã ưa đãi</h1>
                    <span className='font-semibold'>Mã ưu đãi có thể được cung cấp dưới nhiều hình thức, bao gồm mã giảm giá dựa trên phần trăm hoặc số tiền giảm, quà tặng miễn phí, vận chuyển miễn phí, hoặc các ưu đãi đặc biệt khác. Khách hàng thường nhập mã này vào trang thanh toán khi mua hàng trực tuyến hoặc cung cấp mã này tại cửa hàng để nhận ưu đãi tương ứng.</span>
                    <div className="flex space-x-2">
                        <h1 className="text-red-600 font-semibold"> Chuyển khoản hoặc Thanh toán online trên website: </h1>
                        <span>sẽ nhận được nhiều quà ưa đãi hơn khi mua với một số lượng lớn. </span>
                    </div>
                    <h1 className="text-red-600 font-semibold"> Cách để nhận mã ưa đãi: </h1>
                        <span>Trước tiên, khách hàng phải thanh toán qua qua stripe để nhân được một mã ưa đãi ngẫu nhiên.</span>
                    <h1 className="text-red-600 font-semibold"> Tặng vòng quay may mắn </h1>
                        <span>Khi mua 1.000.000đ sẽ được tặng 2 vòng quay may mắn, 500.000đ sẽ được tặng 1 vòng quay may mắn.</span>
                </div>
            </Container>
        );
}
 
export default mot;