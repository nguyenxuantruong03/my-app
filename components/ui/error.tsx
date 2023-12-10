"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";


export default function ErrorComponent({
  reset,
}: {
  reset: () => void;
}) {

  return (
    <Container>
    <div className=" bg-gray-50 flex items-center mt-24">
      <div className="flex flex-col md:flex-row items-center justify-between px-5 text-gray-700 mt-5 md:mt-0">
        <div className="w-full lg:w-1/2 mx-8">
          <div className="text-7xl text-green-500 font-dark font-extrabold mb-8">
            404
          </div>
          <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
            Xin Lỗi chúng tôi không thể, thực hiện đúng theo yêu cầu của bạn !
          </p>

          <button
            className="p-4 bg-red-500 text-white rounded-xl hover:bg-green-600"
            onClick={() => reset()}
          >
            Thử lại
          </button>
          <Link
            href="/"
            className="p-4 ml-5 inline text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700"
          >
            Back to homepage
          </Link>
        </div>
        <div className="w-full lg:flex lg:justify-end mx-5 my-12 h-[200px] md:h-[300px] xl:h-[500px]">
          <Image
            src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
            className=""
            height="300"
            width="300"
            alt="Page not found"
          />
        </div>
      </div>
    </div>
    </Container>
  );
}
