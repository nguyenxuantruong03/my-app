import getBillboard from "@/actions/get-billboard";
import ImageMini from "./imagemini";
import ImageSale from "./imagesale";
import MenuTree from "./menutree";
import SliderSwipper from "./sliderswiper";
import getBillboardmini from "@/actions/get-billboardmini";
import getBillboardsale from "@/actions/get-billboardsale";

const SlideItem= async () => {
  const billboard = await getBillboard("31ba6f38-f122-40b6-84b4-27247bfa1347")
  const billboardmini = await getBillboardmini("70744066-8b86-4b0d-928e-9579637be313")
  const billboardsale = await getBillboardsale("2c100cda-1bd9-41bd-8d48-8ae8f64b5c42")
  return (
    <>
    <div className=" mx-auto max-w-7xl h-[377px] my-2 mt-[120px]">
        <div className="flex space-x-5">
            <MenuTree />

            <SliderSwipper data={billboard}/>

            <div className="w-full space-y-4 h-[115px]">
            <ImageMini  data={billboardmini}/>
            </div>

        </div>
      </div>

      <div className=" mx-auto max-w-7xl my-2">
            <ImageSale data={billboardsale}/>
      </div>
      </>
  );
};

export default SlideItem;
