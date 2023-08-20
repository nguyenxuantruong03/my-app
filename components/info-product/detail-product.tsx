import { Product } from "@/types";
import Image from "next/image";
import NewsPageProduct from "../news/news-product";

interface DetailProductProps {
  data: Product;
}
const DetailProduct: React.FC<DetailProductProps> = ({ data }) => {
  return (
    <>
      <div className="space-x-5 relative my-2">
        <div className=" w-[1000px] shadow-inner pt-5 px-5 rounded-lg">
          <div className=" p-2 bg-slate-400 bg-opacity-10 rounded-lg">
            <h1 className="text-center text-lg font-bold text-red-500">
              Đặc điểm nổi bậc
            </h1>
            <p className="text-sm "> {data.descriptionsalientfeatures}</p>
          </div>
          <p className="my-1">{data.description2salientfeatures} </p>
          <span className="font-bold text-lg">
            Sản phẩm {data.name} có gì mới ?
          </span>
          <div className="pl-2 my-1 ">
            <p>
              {data.name} là {data.description3salientfeatures}
            </p>
          </div>
          <p className="text-md font-bold my-2">
            {data.description4salientfeatures}
          </p>
          <Image
            src={data?.imagesalientfeatures?.[0].url}
            width="1000"
            height="200"
            alt="Image"
            className="aspect-square object-cover rounded-md"
          />
            <p className="text-sm my-2">
            {data.contentsalientfeatures}
          </p>
<Image
            src={data?.imagesalientfeatures?.[1].url}
            width="1000"
            height="300"
            alt="Image"
            className="aspect-square object-cover rounded-md"
          />
        </div>
        {/* News */}
        <div className=" p-2 bg-slate-500 bg-opacity-20 w-[250px] rounded-lg absolute right-0 top-0">
          <h1 className="text-center text-lg font-bold text-red-500">
            Tin tức
          </h1>
          <div>
            <NewsPageProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
