import Image from "next/image";
import Container from "../ui/container";
import {root} from "@/components/color/color"
import HeadingEffect from "../uis-home/HeadingEffect";
import "./index.scss"
const Story = () => {
  return (
    <div className={root.bgwhite}>
      <Container>
        <div className="mx:auto xl:grid xl:grid-cols-2 ">
          <div className="my-2 md:my-20">
            <Image
              className="hidden xl:block bg-cover bg-center relative z-10 ml-24 "
              src="/images/vlxd.jpg"
              alt="image"
              width="471"
              height="606"
            />
            <Image
              className="hidden xl:block xl:-bottom-[545px] xl:left-[165px] 2xl:-bottom-[525px] 2xl:left-[350px] absolute "
              src="/images/coating.png"
              alt="image"
              width="471"
              height="606"
            />
          </div>

          <div className="p-5 xl:my-20">
            <HeadingEffect heading="Thông tin cửa hàng"/>
            <span className="font-bold text-3xl text-[#ec2f4b]" id="cuahangtruongdat" > Cửa hàng Trường Đạt</span>
            <div>
              <h2 className="font-bold">Ngày thành lập:</h2>
              <p>
                Trong hơn 15 năm qua, từ năm 2005, Cửa hàng Trường Đạt đã góp
                phần không nhỏ vào ngành xây dựng và cung ứng vật liệu xây dựng
                chất lượng cao. Ban đầu, khi đường phố còn thô sơ, cửa hàng
                không có biển hiệu rõ ràng. Nhưng với sự phát triển từng ngày,
                sự chú ý của cộng đồng dần dần tăng lên, từ đó, cửa hàng đã chọn
                tên là Trường Đạt để đánh dấu sự đồng hành và uy tín.
              </p>
              <h2 className="font-bold">Chuyên bán mặt hàng:</h2>
              <p>
                Chuyên cung cấp các sản phẩm chuyên dụng trong lĩnh vực vật liệu
                xây dựng, bao gồm ống nước, đồ điện và nhiều mặt hàng khác. Sự
                đa dạng trong danh mục sản phẩm không chỉ đáp ứng nhu cầu cá
                nhân mà còn phục vụ cho các dự án xây dựng lớn thông qua chính
                sách bỏ sỉ linh hoạt.
              </p>
              <h2 className="font-bold">Cam Kết Chất Lượng:</h2>
              <p>
                Với hơn một thập kỷ kinh nghiệm, Trường Đạt luôn đặt chất lượng
                lên hàng đầu. Sự chăm chỉ trong việc lựa chọn các nhà cung cấp
                và kiểm soát chất lượng sản phẩm đã giúp cửa hàng xây dựng được
                uy tín mạnh mẽ trong cộng đồng.
              </p>
              <div className="border-t-2 border-dashed border-gray-500 mt-10 mb-3" />
              <div className="flex">
                   <p className="font-bold">Địa chỉ: </p>  <p className="ml-2"> 457 Lê Văn Quới, Phường Bình Trị Đông A, Quận Bình Tân, TpHCM</p>
              </div>
              <div className="flex">
              <p className="font-bold">Điện thoại:</p> <p className="ml-2">0352261103</p>
              </div>
              <div className="flex">
              <p className="font-bold">Email:</p> <p className="ml-2">nxt159753@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Story;
