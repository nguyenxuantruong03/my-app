import { useSwiper } from "swiper/react";
import { ChevronRight, ChevronLeft } from "lucide-react";
const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div>
    <div className=" relative ">
        <div className=" left-[718px] cursor-pointer absolute rounded-l-full rounded-r-none  bg-[rgba(0,0,0,.3)] text-white top-[112px] animate-fade-left animate-once animate-duration-500 animate-ease-in-out animate-normal animate-fill-forwards">
      <button   aria-label="Back to the page" title="Close" onClick={() => swiper.slideNext()}>
      <ChevronRight className="w-8 h-12" />
      </button>
        </div>
        <div className='relative'>
      <div className="  absolute cursor-pointer  rounded-r-full rounded-l-none  rounded-2xl bg-[rgba(0,0,0,.3)] text-white top-[112px] animate-fade-right animate-once animate-duration-500 animate-ease-in-out animate-normal animate-fill-forwards">
      <button   aria-label="Back to the page" title="Close" onClick={() => swiper.slidePrev()}>
      <ChevronLeft className=" w-8 h-12"/>
      </button>
      </div>
        </div>
    </div>
</div>
  );
};

export default SwiperButtons;
