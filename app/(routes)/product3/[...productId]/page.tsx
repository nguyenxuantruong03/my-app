import Container from "@/components/ui/container";
import getBillboardmini from "@/actions/billboard/get-billboardmini";
import Image from "next/image";
import ModalProvider from "@/providers/modal-provider";
import getProduct3 from "@/actions/product/get-product3";
import { getProducts3, getProducts6 } from "@/actions/products/get-products";
import getProduct6 from "@/actions/product/get-product6";
import dynamic from "next/dynamic";
const ProductListSingleSuggest = dynamic(() => import('@/components/product/product-list/product-list-signle-suggest'), {ssr: false,})
const Comment = dynamic(() => import('@/components/comment/comment'), {ssr: false,})
const DetailProduct = dynamic(() => import('@/components/info-product/detail-product'), {ssr: false,})
const InfoPromotion = dynamic(() => import('@/components/info-product/info-promotion'), {ssr: false})
const InfoWarranty = dynamic(() => import('@/components/info-product/infowarranty'), {ssr: false,})
const InfoProduct = dynamic(() => import('@/components/info-product/info-product'), {ssr: false,})
const Gallery = dynamic(() => import('@/components/gallery/gallery'), {ssr: false,})
export const revalidate = 86400;

interface PropductPageProps {
  params: {
    productId: string;
  };
}
const ProductPage: React.FC<PropductPageProps> = async ({ params }) => {
  const billboardmini = await getBillboardmini(
    "f4ad613b-e77a-4f79-969a-32017dc278a5"
  );
  const product = await getProducts3(params.productId);

  const suggestedProducts = await getProduct3({
    categoryId: product?.category?.id,
  });
  const product6 = await getProducts6(params.productId);

  const suggestedProducts6 = await getProduct6({
    categoryId: product6?.category?.id,
  });

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-8 sm:px-6 xl:px-8 mt-20">
          <div className="xl:grid xl:grid-cols-2 xl:item-start xl:gap-x-8 mt-5">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 xl:mt-0">
              <InfoProduct data={product} />
            </div>
          </div>
        </div>
        {/* Infomation khuyen mai va bao hanh */}
        <div className="xl:max-w-7xl grid xl:grid-cols-2 relative">
          <InfoPromotion data={product} />
          <div className="h-[580px] md:h-[460px] w-full shadow-lg mb-5 rounded-md overflow-hidden ">
            <InfoWarranty data={product} />
            <div className="w-[19.5rem] h-28 shadow-lg absolute top-[30.5rem]  rounded-xl hidden xl:block">
              <Image
                src={billboardmini?.imagebillboardmini?.[3].url}
                fill
                alt="Image"
                className="aspect-square object-cover rounded-md"
              />
            </div>
            <div className="rounded-xl w-[19.5rem] h-28 shadow-lg absolute top-[30.5rem] right-0 hidden xl:block">
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
        <ProductListSingleSuggest data={suggestedProducts} route="product3" />
        <h1 className="font-bold text-3xl my-3">Loại khác </h1>
        <ProductListSingleSuggest data={suggestedProducts6} route="product6" />
        <hr className="my-8" />
        <DetailProduct data={product} />
        <Comment data={product.heading} />
      </Container>
      <ModalProvider data={product} />
    </div>
  );
};

export default ProductPage;


type Props={
  params:{
    productId: string
  }
}

export async function generateMetadata({params :{productId}}:Props ) {
  const post = await getProducts3(`${productId}`); //deduped!
//deduped loại bỏ trùng lặp trong quá trình xây dựng 
  if (!post) {
    return {
      title: "Product Not Found",
    }
  }
  return {
    title: post.heading,
  };
}