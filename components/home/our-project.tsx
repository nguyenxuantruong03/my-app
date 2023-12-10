"use client"
import { root } from "@/components/color/color";
import Container from "../ui/container";
import HeadingEffect from "../uis-home/HeadingEffect";
import Image from "next/image";
import { useRouter } from "next/navigation";

const OurProject = () => {
    const router = useRouter()
    const handleClickProduct = () =>{
        router.push("/enterprise")
    }
  return (
    <div className={` py-16 ${root.bgwhite}`}>
      <Container>
        <div className="text-center my-4">
          <HeadingEffect heading="Công trình" />
          <p className="font-semibold text-xl text-[#7d7777]">
            Chuyên nhận các công trình lớn, các vật liệu nhà tắm và nhà bếp, đèn
            trần... <br />
            Hãy làm đẹp cho ngôi nhà của bạn.
          </p>
        </div>
        <div className=" grid grid-cols-3 ">
          <div className="space-y-4 mx-1 md:mx-3">
            <div className="relative inline-block group w-full h-[140px] md:h-[240px]">
              <Image
                fill
                alt="image"
                src="/images/our-project1.jpg"
                className="block group-hover:opacity-75 transition-opacity duration-300"
                onClick={handleClickProduct}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p onClick={handleClickProduct} className="text-white font-extrabold cursor-pointer text-2xl">Phòng ăn</p>
              </div>
            </div>
            <div className="relative inline-block group w-full h-[140px] md:h-[240px]">
              <Image
                fill
                alt="image"
                src="/images/our-project2.jpg"
                className="block group-hover:opacity-75 transition-opacity duration-300"
                onClick={handleClickProduct}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p onClick={handleClickProduct} className="text-white font-extrabold cursor-pointer text-2xl">Phòng khách</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 mx-1 md:mx-3">
          <div className="relative inline-block group  w-full h-[140px] md:h-[240px]">
              <Image
                fill
                alt="image"
                src="/images/our-project3.jpg"
                className="block group-hover:opacity-75 transition-opacity duration-300"
                onClick={handleClickProduct}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p onClick={handleClickProduct} className="text-white font-extrabold cursor-pointer text-2xl">Đường ống nước</p>
              </div>
            </div>
            <div className="relative inline-block group w-full h-[140px] md:h-[240px]">
              <Image
                fill
                alt="image"
                src="/images/our-project4.jpg"
                className="block group-hover:opacity-75 transition-opacity duration-300"
                onClick={handleClickProduct}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p onClick={handleClickProduct} className="text-white font-extrabold cursor-pointer text-2xl">Đường dây điện</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 mx-1 md:mx-3">
          <div className="relative inline-block group  w-full h-[140px] md:h-[240px]">
              <Image
                fill
                alt="image"
                src="/images/ourr-project5.jpg"
                className="block group-hover:opacity-75 transition-opacity duration-300"
                onClick={handleClickProduct}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p onClick={handleClickProduct} className="text-white font-extrabold cursor-pointer text-2xl">Đèn trần</p>
              </div>
            </div>
            <div className="relative inline-block group  w-full h-[140px] md:h-[240px]">
              <Image
                fill
                alt="image"
                src="/images/our-project6.jpg"
                className="block group-hover:opacity-75 transition-opacity duration-300"
                onClick={handleClickProduct}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p onClick={handleClickProduct} className="text-white font-extrabold cursor-pointer text-2xl">VLXD công trình</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurProject;
