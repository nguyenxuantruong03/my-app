import Container from "@/components/ui/container";
import Gallery from "@/components/gallery/gallery";
import InfoProduct from "@/components/info-product/info-product";
import InfoWarranty from "@/components/info-product/infowarranty";
import InfoPromotion from "@/components/info-product/info-promotion";
import ProductListSingnle6 from "@/components/product/product-list/product-list-single6";
import getBillboardmini from "@/actions/billboard/get-billboardmini";
import Image from "next/image";
import DetailProduct from "@/components/info-product/detail-product";
import ModalProvider from "@/providers/modal-provider";
import getProducts6 from "@/actions/products/get-PC6";
import getProduct6 from "@/actions/product/get-product6";
import Comment from "@/components/comment/comment";

export const revalidate = 0;

interface PropductPageProps {
  params: {
    productId: string;
  };
}
const ProductPage: React.FC<PropductPageProps> = async ({ params }) => {
  const billboardmini = await getBillboardmini(
    "3e77206e-551f-4453-948b-955e18ec62c1"
  );
  const product = await getProducts6(params.productId);

  const suggestedProducts = await getProduct6({
    categoryId: product?.category?.id,
  });

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8 mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:item-start lg:gap-x-8 mt-5">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <InfoProduct data={product} />
            </div>
          </div>
        </div>
        {/* Infomation khuyen mai va bao hanh */}
        <div className="max-w-7xl grid grid-cols-2 relative">
          <InfoPromotion data={product} />
          <div className="h-[460px] w-full shadow-lg mb-5 rounded-md overflow-hidden ">
            <InfoWarranty data={product} />
            <div className="w-[19.5rem] h-28 shadow-lg absolute top-[30.5rem]  rounded-xl">
              <Image
                src={billboardmini?.imagebillboardmini?.[3].url}
                fill
                alt="Image"
                className="aspect-square object-cover rounded-md"
              />
            </div>
            <div className="  rounded-xl w-[19.5rem] h-28 shadow-lg absolute top-[30.5rem] right-0 ">
              <Image
                src={billboardmini?.imagebillboardmini?.[4].url}
                fill
                alt="Image"
                className="aspect-square object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <h1 className="font-bold text-3xl my-3">Gợi ý khác </h1>
        <ProductListSingnle6 data={suggestedProducts} />
        <hr className="my-5" />
        <DetailProduct data={product} />
        <Comment data={product.name}/>
      </Container>
      <ModalProvider data={product} />
    </div>
  );
};

export default ProductPage;
