import Image from "next/image";
import NewsPageProduct from "@/components/news/news-product";
import { Product, Product1, Product10, Product11, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9} from "@/types";




interface DetailProductProps {
  data: Product | Product1 | Product2 | Product3 | Product4 | Product5 |Product6 | Product7 | Product8 | Product9 | Product10 | Product11 ;
}

const DetailProduct: React.FC<DetailProductProps> = ({ data }) => {
  const images = ( data.imagesalientfeatures);

  return (
    <>
      <div className="space-x-5 relative my-2">
        <div className="w-[1000px] shadow-inner pt-5 px-5 rounded-lg">
          <div className="p-2 bg-slate-400 bg-opacity-10 rounded-lg">
            <h1 className="text-center text-lg font-bold text-red-500">
              Đặc điểm nổi bậc
            </h1>
            <p className="text-sm">{data.descriptionsalientfeatures}</p>
          </div>
          <p className="my-1">{data.description2salientfeatures}</p>
          <span className="font-bold text-lg">
            Sản phẩm {data.name} có gì mới ?
          </span>
          <div className="pl-2 my-1">
            <p>
              {data.name} là {data.description3salientfeatures}
            </p>
          </div>
          <p className="text-md font-bold my-2">
            {data.description4salientfeatures}
          </p>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.url}
              width="1000"
              height={index === 0 ? "200" : "300"}
              alt="Image"
              className="aspect-square object-cover rounded-md mt-3"
            />
          ))}
          <p className="text-sm my-2">{data.contentsalientfeatures}</p>
        </div>
        {/* News */}
        <div className="p-2 bg-slate-500 bg-opacity-20 w-[250px] rounded-lg absolute right-0 top-0">
          <h1 className="text-center text-lg font-bold text-red-500">
            Tin tức
          </h1>
          <div className="h-[1300px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
  <style>{`
    .overflow-y-auto::-webkit-scrollbar {
      width: 6px;
    }
    .overflow-y-auto::-webkit-scrollbar-thumb {
      background-color: transparent; 
    }
  `}</style>
  <NewsPageProduct />
</div>

        </div>
      </div>
    </>
  );
};

export default DetailProduct;
