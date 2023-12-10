import IntroductProduct from "@/components/home/introduct-product";
import SellingProduct from "@/components/home/selling-product";
import Service from "@/components/home/service";
import Slider from "@/components/home/slider";
import Story from "@/components/home/story";
import OurProject from "@/components/home/our-project";
import News from "@/components/home/news";
import Sponsor from "@/components/home/sponsor";
import BuyProduct from "@/components/home/buy-product";

const HomePage = async () => {
 
  return (
    <>
        <Slider />
        <Story />
        <Service />
        <IntroductProduct />
        <SellingProduct />
        <OurProject />
        <BuyProduct />
        <News />
        <Sponsor />
    </>
  );
};
export default HomePage;
