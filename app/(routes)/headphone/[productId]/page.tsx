import Container from "@/components/ui/container";
import Gallery from "@/components/gallery/gallery";
import InfoProduct from "@/components/info-product/info-productheadphone/info-product";
import InfoWarranty from "@/components/info-product/info-productheadphone/infowarranty";
import InfoPromotion from "@/components/info-product/info-productheadphone/info-promotion";
import getBillboardmini from "@/actions/billboard/get-billboardmini";
import Image from "next/image";
import DetailProduct from "@/components/info-product/info-productheadphone/detail-product";
import ModalProviderProductHeadphone from "@/providers/modal-provider-productheadphone";
import ProductListSingnleHeadphone from "@/components/product/product-list/product-list-headphone";
import getHeadphone from "@/actions/products/get-headphone";
import getProductHeadphone from "@/actions/product/get-product-headphone";

export const revalidate = 0;

interface PropductPageProps {
  params: {
    productId: string;
  };
}
const ProductPage: React.FC<PropductPageProps> = async ({ params }) => {
  const billboardmini = await getBillboardmini(
    "1684ae8f-6edb-4d2e-8a5a-a40f81a4a581"
  );
  const product = await getHeadphone(params.productId);

  const suggestedProducts = await getProductHeadphone({
    categoryheadphoneId: product?.categoryheadphone?.id,
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
        <ProductListSingnleHeadphone data={suggestedProducts} />
        <hr className="my-5" />
        <DetailProduct data={product} />
      </Container>
      <ModalProviderProductHeadphone data={product} />
    </div>
  );
};

export default ProductPage;
