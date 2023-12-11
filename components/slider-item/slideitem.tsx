import getBillboard from "@/actions/billboard/get-billboard";
import ImageMini from "./imagemini";
import ImageSale from "./imagesale";
import MenuTree from "./menutree";
import SliderSwipper from "./sliderswiper";
import getBillboardmini from "@/actions/billboard/get-billboardmini";
import getBillboardsale from "@/actions/billboard/get-billboardsale";
import BillboardCategory from "./billboard-category";
import { getCategories, getCategories1, getCategories10, getCategories11, getCategories2, getCategories3, getCategories4, getCategories5, getCategories6, getCategories7, getCategories8, getCategories9 } from "@/actions/categories/get-categories";


export const revalidate = 86400;
const SlideItem = async () => {
  const billboard = await getBillboard("671f2bf3-3c95-4ac8-82bc-9ce9a026ad75");
  const billboardmini = await getBillboardmini(
    "f4ad613b-e77a-4f79-969a-32017dc278a5"
  );
  const billboardsale = await getBillboardsale(
    "c549dc49-35a3-466d-ba22-272a2b3e2ce3"
  );
  const billboardsaleipad = await getBillboardsale(
    "0081ff49-2a20-49e9-addf-1ab48b54a0ff"
  );
  const billboardsalemobile = await getBillboardsale(
    "957e9978-07ea-4da7-9749-8e8b93d6ad3f"
  );
  const categories = await getCategories();
  const categories1 = await getCategories1();
  const categories2 = await getCategories2();
  const categories3 = await getCategories3();
  const categories4 = await getCategories4();
  const categories5 = await getCategories5();
  const categories6 = await getCategories6();
  const categories7 = await getCategories7();
  const categories8 = await getCategories8();
  const categories9 = await getCategories9();
  const categories10 = await getCategories10();
  const categories11 =await getCategories11();
  return (
    <>
      <div className=" mx-auto max-w-7xl h-[377px] my-2 mt-[120px] ">
        <div className="flex space-x-5 md:m-5 xl:m-0">
          <MenuTree
            data={categories}
            categories1={categories1}
            categories2={categories2}
            categories3={categories3}
            categories4={categories4}
            categories5={categories5}
            categories6={categories6}
            categories7={categories7}
            categories8={categories8}
            categories9={categories9}
            categories10={categories10}
            categories11={categories11}
          />
          <div className="hidden">
          <BillboardCategory data={billboard} />
          </div>
          <SliderSwipper data={billboard} />

          <div className="w-full space-y-4 h-[115px] hidden xl:block">
            <ImageMini data={billboardmini} />
          </div>
        </div>
      </div>

      <div className=" mx-auto md:max-w-3xl xl:max-w-7xl my-2 hidden xl:block">
        <ImageSale data={billboardsale} />
      </div>
      <div className=" mx-auto md:max-w-3xl xl:max-w-7xl my-2 hidden md:block xl:hidden">
        <ImageSale data={billboardsaleipad} />
      </div>
      <div className=" mx-auto mb-2 mt-10 md:hidden">
        <ImageSale data={billboardsalemobile} />
      </div>
    </>
  );
};

export default SlideItem;
