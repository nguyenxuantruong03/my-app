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
  const billboard = await getBillboard("b07b8761-8367-44d1-b67e-349646648191");
  const billboardmini = await getBillboardmini(
    "3e77206e-551f-4453-948b-955e18ec62c1"
  );
  const billboardsale = await getBillboardsale(
    "85c5eda8-421e-4f83-a40f-fc2f0760ba70"
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
