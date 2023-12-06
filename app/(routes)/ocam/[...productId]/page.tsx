import Container from "@/components/ui/container";
import getBillboardmini from "@/actions/billboard/get-billboardmini";
import Image from "next/image";
import ModalProvider from "@/providers/modal-provider";
import { getProducts2, getProducts7 } from "@/actions/products/get-products";
import getProduct7 from "@/actions/product/get-product7";
import getProduct2 from "@/actions/product/get-product2";
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
  const product = await getProducts7(params.productId);

  const suggestedProducts = await getProduct7({
    categoryId: product?.category?.id,
  });
  const product2 = await getProducts2(params.productId);

  const suggestedProducts2 = await getProduct2({
    categoryId: product2?.category?.id,
  });

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-8 sm:px-6 lg:px-8 mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:item-start lg:gap-x-8 mt-5">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <InfoProduct data={product} />
            </div>
          </div>
        </div>
        {/* Infomation khuyen mai va bao hanh */}
        <div className="md:max-w-3xl lg:max-w-7xl grid lg:grid-cols-2 relative">
          <InfoPromotion data={product} />
          <div className="h-[580px] md:h-[460px] w-full shadow-lg mb-5 rounded-md overflow-hidden ">
            <InfoWarranty data={product} />
            <div className="w-[19.5rem] h-28 shadow-lg absolute top-[30.5rem]  rounded-xl hidden lg:block">
              <Image
                src={billboardmini?.imagebillboardmini?.[3].url}
                fill
                alt="Image"
                className="aspect-square object-cover rounded-md"
              />
            </div>
            <div className="  rounded-xl w-[19.5rem] h-28 shadow-lg absolute top-[30.5rem] right-0 hidden lg:block">
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
        <ProductListSingleSuggest data={suggestedProducts} route="ocam"/>
        <h1 className="font-bold text-3xl my-3">Loại khác </h1>
        <ProductListSingleSuggest data={suggestedProducts2} route="product2" />
        <hr className="my-8" />
        <DetailProduct data={product} />
        <Comment data={product.name}/>
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
  const post = await getProducts7(`${productId}`); //deduped!
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