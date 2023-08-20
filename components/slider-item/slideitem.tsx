import getBillboard from "@/actions/billboard/get-billboard";
import ImageMini from "./imagemini";
import ImageSale from "./imagesale";
import MenuTree from "./menutree";
import SliderSwipper from "./sliderswiper";
import getBillboardmini from "@/actions/billboard/get-billboardmini";
import getBillboardsale from "@/actions/billboard/get-billboardsale";
import getCategories from "@/actions/categories/get-categories";
import getCategories1 from "@/actions/categories/get-categories1";
import getCategories2 from "@/actions/categories/get-categories2";
import getCategories3 from "@/actions/categories/get-categories3";
import getCategories4 from "@/actions/categories/get-categories4";
import getCategories5 from "@/actions/categories/get-categories5";
import getCategories6 from "@/actions/categories/get-categories6";
import getCategories7 from "@/actions/categories/get-categories7";
import getCategories8 from "@/actions/categories/get-categories8";
import getCategories9 from "@/actions/categories/get-categories9";
import getCategories10 from "@/actions/categories/get-categories10";
import getCategories11 from "@/actions/categories/get-categories11";
import BillboardCategory from "./billboard-category";

export const revalidate = 0;
const SlideItem = async () => {
  const billboard = await getBillboard("3375b5bc-24fb-4e37-adfc-589a35c75d58");
  const billboardmini = await getBillboardmini(
    "1684ae8f-6edb-4d2e-8a5a-a40f81a4a581"
  );
  const billboardsale = await getBillboardsale(
    "5fc9e2b0-06d0-4695-a2c3-57b11365c95f"
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
      <div className=" mx-auto max-w-7xl h-[377px] my-2 mt-[120px]">
        <div className="flex space-x-5">
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

          <div className="w-full space-y-4 h-[115px] ">
            <ImageMini data={billboardmini} />
          </div>
        </div>
      </div>

      <div className=" mx-auto max-w-7xl my-2">
        <ImageSale data={billboardsale} />
      </div>
    </>
  );
};

export default SlideItem;
