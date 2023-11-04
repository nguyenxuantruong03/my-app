import Link from "next/link";

const InformationPolicy = () => {
  return (
    <>
      <Link href="/payment-online">
        <div>Mua hàng và thanh toán online</div>
      </Link>
      <Link href="/preorder">
        <div>Đặt hàng trước trả tiền khi nhận</div>
      </Link>
      <Link href="/policy">
        <div>Chính sách và pháp lý đặt hàng</div>
      </Link>
      <Link href="/promotional-code">
        <div>Mã ưa đãi</div>
      </Link>
    </>
  );
};

export default InformationPolicy;
