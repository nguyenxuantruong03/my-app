"use client";

import ProductList from "@/components/product/product-list/product-list";
import ProductListSingnle from "@/components/product/product-list/product-list-single";
import { Product } from "@/types";
import NoResults from "../ui/no-result";
import RelatedTagIphone from "./list-related-tag/related-tag-iphone";
import RelatedTagWatch from "./list-related-tag/related-tag-watch";
import RelatedTagHeadphone from "./list-related-tag/related-tag-headphone";
import RelatedTagTivi from "./list-related-tag/related-tag-tivi";
import RelatedTagLaptop from "./list-related-tag/related-tag-laptop";

interface ProductMainListProps {
  items: Product[];
}
const MainProduct: React.FC<ProductMainListProps> = ({ items }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <>
        <h1 className="font-bold text-3xl">Test</h1>
        <RelatedTagIphone />
        {items.length === 0 && <NoResults />}
        <ProductList data={items} />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Test</h1>
        <RelatedTagWatch />
        {items.length === 0 && <NoResults />}
        <ProductList data={items} />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Test</h1>
        <RelatedTagLaptop />
        {items.length === 0 && <NoResults />}
        <ProductListSingnle data={items} />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Test</h1>
        <RelatedTagHeadphone />
        {items.length === 0 && <NoResults />}
        <ProductList data={items} />
      </>

      <>
        <h1 className="my-4 font-bold text-3xl">Test</h1>
        <RelatedTagTivi />
        {items.length === 0 && <NoResults />}
        <ProductList data={items} />
      </>
    </div>
  );
};

export default MainProduct;
