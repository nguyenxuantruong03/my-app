"use client"
import { root } from "@/components/color/color";
import Container from "../ui/container";
import "./index.scss";
import HeadingEffect from "../uis-home/HeadingEffect";
import Image from "next/image";
import Button from "../ui/button";
import { useRouter } from "next/navigation";

const Service = () => {
    const router = useRouter()
    const handleClickProduct = () =>{
        router.push("/enterprise")
    }
  return (
    <div className={` py-20 ${root.bgwhite}`}>
      <Container>
        <div className="bg-service">
          <div className="w-full">
            <HeadingEffect heading="Dịch vụ nội thất" />
          </div>
          <div className=" md:flex md:space-x-5 mt-20 md:justify-between">
            <div className=" w-[300px] h-[285px] text-center rotate-on-hover relative mx-auto">
              <div className="w-[100px] h-[100px] mx-auto">
                <Image
                  src="/images/apartment-icon.png"
                  className="rotate-on-hover-image"
                  alt="iamge"
                  width="300"
                  height="100"
                />
              </div>
              <p className="font-bold text-xl">Công trình </p>
              <p>
                Luôn để các giá cực tốt cho thầu xây cả công trình và hợp tác
                lâu dài.
              </p>
            <Button onClick={handleClickProduct} className="absolute bottom-7 md:bottom-0 left-[30%]">Xem thêm</Button>
            </div>
            <div className=" w-[300px] h-[285px] text-center rotate-on-hover relative mx-auto">
              <div className="w-[100px] h-[100px] mx-auto">
                <Image
                  src="/images/home-icon.png"
                  className="rotate-on-hover-image"
                  alt="iamge"
                  width="300"
                  height="100"
                />
              </div>
              <p className="font-bold text-xl">Nhà ở </p>
              <p>
                Luôn cung cấp phụ kiện cho nhà VD: tất cả loại đèn,cửa,quạt giá
                tốt.
              </p>
            <Button onClick={handleClickProduct} className="absolute bottom-7 md:bottom-0 left-[30%]">Xem thêm</Button>
            </div>
            <div className=" w-[300px] h-[285px] text-center rotate-on-hover relative mx-auto">
              <div className="w-[100px] h-[100px] mx-auto">
                <Image
                  src="/images/daydien-icon.png"
                  className="rotate-on-hover-image"
                  alt="iamge"
                  width="300"
                  height="100"
                />
              </div>
              <p className="font-bold text-xl">Dây điện</p>
              <p>
                Chuyên cung cấp dây diện daphaco,cadivi đầy đủ dây đơn và tất cả
                dây đôi.
              </p>
            <Button onClick={handleClickProduct} className="absolute bottom-7 md:bottom-0 left-[30%]">Xem thêm</Button>
            </div>
            <div className=" w-[300px] h-[285px] text-center rotate-on-hover relative mx-auto">
              <div className="w-[100px] h-[70px] mx-auto">
                <Image
                  src="/images/ongnhua-icon.png"
                  className=" mt-10 rotate-on-hover-image"
                  alt="iamge"
                  width="300"
                  height="100"
                />
              </div>
              <p className="font-bold text-xl">Ống nhựa</p>
              <p>
                Chúng tôi hợp tác với ống nhựa Bình Minh PVC nên để giá sỉ rất
                tốt rất khác với giá lẻ chiết khấu cao.
              </p>
            <Button onClick={handleClickProduct} className="absolute bottom-7 md:bottom-0 left-[30%]">Xem thêm</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
