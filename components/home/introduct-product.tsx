"use client";
import { root } from "@/components/color/color";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./index.scss"
const IntroductProduct = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className={`pb-20 px-5 pt-2 ${root.bgwhite}`}>
      <div className="xl:flex">
        <div className="mb-2 relative md:pl-12 md:pb-[310px] xl:w-[48%] xl:pl-8">
          <div className="background-infoproduct" />
          <div className=" w-full h-[320px] shadow-xl top-[120px] z-8 bg-white rounded-md md:w-[600px] md:absolute xl:w-[700px] 2xl:w-[900px] xl:h-[440px]">
            <div className='text-lg px-3 py-10  font-bold text-gray-500 text-opacity-80 xl:mt-16 md:text-2xl md:px-10 xl:px-40'> 
            Chúng tôi không chỉ chú trọng vào việc thiết kế sản phẩm mà còn đặt sự tập trung lớn vào việc phát triển Hình thức và Chức năng. Giá trị cốt lõi của chúng tôi không chỉ là nguồn động lực cho sự sáng tạo mà còn là động lực để thúc đẩy sự tiến bộ.  
            </div> 
            <div className="flex px-3 items-center md:px-10 xl:px-40">
                <span className="border-t-2 border-solid border-gray-800 w-12 "/>
                <p className="pl-4 text-[#e53350] text-lg uppercase font-bold"> Quan điểm độc đáo.</p>
            </div>
          </div>
            <div className="background-infoproduct2" />
        </div>
        <div className="video-introproduct">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=OmmgsN7GLXI&t=9s"
            width="100%"
            height="100%"
            controls
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default IntroductProduct;
