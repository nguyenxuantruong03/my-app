"use client";

import { Ipad, Watch, Tivi, Headphone, Laptop, Mouse } from "@/types";
import NoResults from "../ui/no-result";
import RelatedTagIphone from "./list-related-tag/related-tag-iphone";
import RelatedTagWatch from "./list-related-tag/related-tag-watch";
import RelatedTagHeadphone from "./list-related-tag/related-tag-headphone";
import RelatedTagTivi from "./list-related-tag/related-tag-tivi";
import RelatedTagLaptop from "./list-related-tag/related-tag-laptop";
import RelatedTagMouse from "./list-related-tag/related-tag-mouse";
import ProductList from "./product-list/product-list";
import ProductListSingle from "./product-list/product-list-signle";

interface ProductMainListProps {
  ipad: Ipad[];
  watch: Watch[];
  tivi: Tivi[];
  headphone: Headphone[];
  laptop: Laptop[];
  mouse: Mouse[];
}
const MainProduct: React.FC<ProductMainListProps> = ({
  ipad,
  watch,
  tivi,
  headphone,
  laptop,
  mouse,
}) => {
  return (
    <div className="mx-auto max-w-7xl">
      <>
        <h1 className="font-bold text-3xl">Ipad</h1>
        <RelatedTagIphone />
        {ipad.length === 0 && <NoResults />}
        <ProductList data={ipad} productType="ipad" />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Watch</h1>
        <RelatedTagWatch />
        {watch.length === 0 && <NoResults />}
        <ProductList data={watch} productType="watch" />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Tivi</h1>
        <RelatedTagTivi />
        {tivi.length === 0 && <NoResults />}
        <ProductListSingle data={tivi} route="tivi" />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Headphone</h1>
        <RelatedTagHeadphone />
        {headphone.length === 0 && <NoResults />}
        <ProductList data={headphone} productType="headphone" />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Laptop</h1>
        <RelatedTagLaptop />
        {laptop.length === 0 && <NoResults />}
        <ProductList data={laptop} productType="laptop" />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Mouse</h1>
        <RelatedTagMouse />
        {mouse.length === 0 && <NoResults />}
        <ProductListSingle data={mouse} route="mouse" />
      </>
    </div>
  );
};

export default MainProduct;
