import IntroductProduct from "@/components/home/introduct-product";
import SellingProduct from "@/components/home/selling-product";
import Service from "@/components/home/service";
import Slider from "@/components/home/slider";
import Story from "@/components/home/story";
import OurProject from "@/components/home/our-project";
import News from "@/components/home/news";
import Sponsor from "@/components/home/sponsor";
import BuyProduct from "@/components/home/buy-product";
import dynamic from "next/dynamic";
import FlowerFalling from "@/components/flower-falling/flower-falling";

const MapAPI = dynamic(() => import("@/components/leaflet-map/leaflet-map"), {
  ssr: false,
});
const HomePage = async () => {
  return (
    <>
      <FlowerFalling />
      <Slider />
      <Story />
      <Service />
      <IntroductProduct />
      <SellingProduct />
      <OurProject />
      <BuyProduct />
      <News />
      <MapAPI />
      <Sponsor />
    </>
  );
};
export default HomePage;
