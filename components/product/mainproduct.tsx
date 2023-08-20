"use client";

import TiviListSingnle from "@/components/product/product-list/product-list-single-tivi";
import MouseListSignle from "@/components/product/product-list/product-list-single-mouse";
import { Ipad, Watch, Tivi, Headphone, Laptop, Mouse } from "@/types";
import NoResults from "../ui/no-result";
import RelatedTagIphone from "./list-related-tag/related-tag-iphone";
import RelatedTagWatch from "./list-related-tag/related-tag-watch";
import RelatedTagHeadphone from "./list-related-tag/related-tag-headphone";
import RelatedTagTivi from "./list-related-tag/related-tag-tivi";
import RelatedTagLaptop from "./list-related-tag/related-tag-laptop";
import IpadList from "./product-list/product-list-ipad";
import WatchList from "./product-list/product-list-watch";
import LaptopList from "./product-list/product-list-laptop";
import HeadphoneList from "./product-list/product-list-headphone";
import RelatedTagMouse from "./list-related-tag/related-tag-mouse";

interface ProductMainListProps {
  ipad: Ipad[]
  watch: Watch[]
  tivi: Tivi[]
  headphone: Headphone[]
  laptop: Laptop[]
  mouse: Mouse[]
}
const MainProduct: React.FC<ProductMainListProps> = ({ ipad,watch,tivi,headphone,laptop,mouse }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <>
        <h1 className="font-bold text-3xl">Ipad</h1>
        <RelatedTagIphone />
        {ipad.length === 0 && <NoResults />}
        <IpadList data={ipad} />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Watch</h1>
        <RelatedTagWatch />
        {watch.length === 0 && <NoResults />}
        <WatchList data={watch} />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Tivi</h1>
        <RelatedTagTivi />
        {tivi.length === 0 && <NoResults />}
        <TiviListSingnle data={tivi} />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Headphone</h1>
        <RelatedTagHeadphone />
        {headphone.length === 0 && <NoResults />}
        <HeadphoneList data={headphone} />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Laptop</h1>
        <RelatedTagLaptop />
        {laptop.length === 0 && <NoResults />}
        <LaptopList data={laptop} />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Mouse</h1>
        <RelatedTagMouse />
        {mouse.length === 0 && <NoResults />}
        <MouseListSignle data={mouse} />
      </>
    </div>
  );
};

export default MainProduct;
