import ImageMini from "./imagemini";
import ImageSale from "./imagesale";
import MenuTree from "./menutree";
import SliderSwipper from "./sliderswiper";

const SlideItem = () => {
  return (
    <>
    <div className=" mx-auto max-w-7xl h-[377px] my-2 mt-[120px]">
        <div className="flex space-x-5">
            <MenuTree />

            <SliderSwipper />

            <div className="w-full space-y-4">
            <ImageMini />
            </div>

        </div>
      </div>

      <div className=" mx-auto max-w-7xl my-2">
            <ImageSale />
      </div>
      </>
  );
};

export default SlideItem;
