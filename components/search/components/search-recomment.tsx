import Image from "next/image";
import Link from "next/link";

const SearchRecomment = () => {
    return ( 
        <>
        <div className="border-t-2 border-gray-200 my-2 " />
            <div className="my-2 text-base text-gray-500 text-opacity-90 ">
              Gợi ý
            </div>
            <div className="grid grid-cols-2 ">
              <div className="my-1">
                <Link
                  href="https://vlxdxuantruong.vercel.app/category2/e9762cb1-1077-43ef-97e9-44d0d20dec83"
                  className="flex items-center my-2 hover:bg-gray-200 rounded-md p-1"
                >
                  <div className="my-1">Ống nhựa</div>
                  <Image
                    src="/images-product/ongnhuapvc.png"
                    alt="404"
                    width="35"
                    height="35"
                    className="ml-20"
                  />
                </Link>
  
                <Link
                  href="https://vlxdxuantruong.vercel.app/category10/4bf607bb-79d9-4b51-bde2-320c285573e0"
                  className="flex items-center my-2 hover:bg-gray-200 rounded-md p-1"
                >
                  <div className="my-1">Bóng đèn</div>
                  <Image
                    src="/images-product/bongdienquang.png"
                    alt="404"
                    width="35"
                    height="35"
                    className="ml-20"
                  />
                </Link>
  
                <Link
                  href="https://vlxdxuantruong.vercel.app/category1/52d11611-ccd2-4326-bf7f-bd224ebef89d"
                  className="flex items-center my-2 hover:bg-gray-200 rounded-md p-1"
                >
                  <div className="my-1">Quạt</div>
                  <Image
                    src="/images-product/quatbansenko.png"
                    alt="404"
                    width="35"
                    height="35"
                    className="ml-28"
                  />
                </Link>
              </div>
  
              <div className="my-2">
                <div className="border-l-2 border-gray-200 my-1">
                  <Link
                    href="https://vlxdxuantruong.vercel.app/product7/o-cam-cay-thong"
                    className="flex items-center hover:bg-gray-200 rounded-md p-1"
                  >
                    <div className="mx-2">Ổ cắm cây thông</div>
                    <Image
                      src="/images-product/ocamcaythong.png"
                      alt="404"
                      width="35"
                      height="35"
                      className="ml-7"
                    />
                  </Link>
                </div>
  
                <div className="border-l-2 border-gray-200 my-1">
                  <Link
                    href="https://vlxdxuantruong.vercel.app/category/8bcd192e-d45b-49e6-a73e-444a17c09a50"
                    className="flex items-center hover:bg-gray-200 rounded-md p-1"
                  >
                    <div className="mx-2">Pin</div>
                    <Image
                      src="/images-product/pincono.png"
                      alt="404"
                      width="35"
                      height="35"
                      className="ml-32"
                    />
                  </Link>
                </div>
  
                <div className="border-l-2 border-gray-200 my-1">
                  <Link
                    href="https://vlxdxuantruong.vercel.app/category8/595f6934-f5d2-49e0-84f0-71c1e6eba2f9"
                    className="flex items-center hover:bg-gray-200 rounded-md p-1"
                  >
                    <div className="mx-2">Sơn</div>
                    <Image
                      src="/images-product/sonexpo.png"
                      alt="404"
                      width="35"
                      height="35"
                      className="ml-[7.6rem]"
                    />
                  </Link>
                </div>
              </div>
            </div>
        </>
     );
}
 
export default SearchRecomment;