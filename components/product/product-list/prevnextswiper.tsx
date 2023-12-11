import { useSwiper } from "swiper/react";
import { ChevronRight, ChevronLeft } from "lucide-react";
const PrevNextSwiper = () => {
  const swiper = useSwiper();
  return (
    <div className="hidden xl:block">
    <div className=" relative ">
        <div className=" shadow-lg left-[381px] md:left-[735px] xl:left-[1250px] cursor-pointer absolute rounded-l-full rounded-r-none  bg-white bg-opacity-70 text-gray-500  top-[120px] md:top-[250px] animate-fade-left animate-once animate-duration-500 animate-ease-in-out animate-normal animate-fill-forwards">
      <button   aria-label="Back to the page" title="Close" onClick={() => swiper.slideNext()}>
      <ChevronRight className="w-8 h-14" />
      </button>
        </div>
        <div className='relative'>
      <div className=" shadow-lg  absolute cursor-pointer  rounded-r-full rounded-l-none  rounded-2xl bg-white bg-opacity-70 text-gray-500 top-[120px] md:top-[250px] animate-fade-right animate-once animate-duration-500 animate-ease-in-out animate-normal animate-fill-forwards">
      <button   aria-label="Back to the page" title="Close" onClick={() => swiper.slidePrev()}>
      <ChevronLeft className=" w-8 h-14 "/>
      </button>
      </div>
        </div>
    </div>
</div>
  );
};

export default PrevNextSwiper;
