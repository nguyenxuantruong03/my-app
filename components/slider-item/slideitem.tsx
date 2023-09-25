import getBillboard from "@/actions/billboard/get-billboard";
import ImageMini from "./imagemini";
import ImageSale from "./imagesale";
import MenuTree from "./menutree";
import SliderSwipper from "./sliderswiper";
import getBillboardmini from "@/actions/billboard/get-billboardmini";
import getBillboardsale from "@/actions/billboard/get-billboardsale";
import BillboardCategory from "./billboard-category";
import { getCategories, getCategories1, getCategories10, getCategories11, getCategories2, getCategories3, getCategories4, getCategories5, getCategories6, getCategories7, getCategories8, getCategories9 } from "@/actions/categories/get-categories";

export const revalidate = 0;
const SlideItem = async () => {
  const billboard = await getBillboard("4cb42a8d-4c68-4d01-b152-5b0d0c471e4c");
  const billboardmini = await getBillboardmini(
    "9fd6af05-278a-4149-9967-032bb2326246"
  );
  const billboardsale = await getBillboardsale(
    "4eb35ef7-2b46-4011-91b9-7aef788b1d92"
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
