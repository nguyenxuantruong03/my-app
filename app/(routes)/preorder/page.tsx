import Container from "@/components/ui/container";

const hai = () => {
  return (
    <Container>
      <div className="mt-[130px] mb-[20px]">
        <h1 className="text-center text-3xl text-red-600 uppercase">
          Đặt hàng trước trả tiền khi nhận
        </h1>
        <span className="font-semibold">
          Đặt hàng trước và trả tiền khi nhận là một mô hình mua sắm phổ biến và
          linh hoạt mà nhiều người tiêu dùng lựa chọn. Thực tế, đây là một xu
          hướng mà nhiều doanh nghiệp và cửa hàng đã áp dụng để tối ưu hóa trải
          nghiệm mua sắm của khách hàng và giải quyết một số vấn đề liên quan
          đến thanh toán và đảm bảo sự hài lòng của người tiêu dùng.
        </span>
        <div className="flex space-x-2">
          <h1 className="text-red-600 font-semibold"> Giảm rủi ro: </h1>
          <span>
            Việc thanh toán khi nhận hàng giúp tránh những tình huống không mong
            muốn, như sản phẩm không đúng mẫu mã, không đủ chất lượng hoặc không
            đúng yêu cầu của khách hàng. Người mua chỉ trả tiền khi thực sự hài
            lòng với sản phẩm hoặc dịch vụ đã nhận.
          </span>
        </div>
        <h1 className="text-red-600 font-semibold"> Tăng độ tin cậy: </h1>
        <span>
          Mô hình này tạo sự tin cậy cho khách hàng vì họ có thể kiểm tra sản
          phẩm trước khi trả tiền. Điều này đặc biệt quan trọng đối với các sản
          phẩm có giá trị lớn hoặc khi mua từ các nhà cung cấp mới.
        </span>
        <h1 className="text-red-600 font-semibold"> Xác nhận đơn hàng: </h1>
        <span>
          Cửa hàng xác nhận đơn hàng và tiến hành giao hàng đến địa chỉ khách
          hàng chỉ định. Khách hàng kiểm tra sản phẩm hoặc dịch vụ sau khi nhận
          hàng. Sau khi kiểm tra và hài lòng, khách hàng thanh toán tiền cho đơn
          hàng đã nhận.
        </span>
      </div>
    </Container>
  );
};

export default hai;
