"use client";

import {
  Product1,
  Product10,
  Product2,
  Product7,
  Product3,
  Product8,
} from "@/types";
import NoResults from "../ui/no-result";
import RelatedTagIphone from "./list-related-tag/related-tag-iphone";
import RelatedTagWatch from "./list-related-tag/related-tag-watch";
import RelatedTagHeadphone from "./list-related-tag/related-tag-headphone";
import RelatedTagTivi from "./list-related-tag/related-tag-tivi";
import RelatedTagLaptop from "./list-related-tag/related-tag-laptop";
import RelatedTagMouse from "./list-related-tag/related-tag-mouse";
import ProductList from "./product-list/product-list";
import ProductListSingle from "./product-list/product-list-signle";
import { useEffect, useState } from "react";
import "./product-list/product-list.css"

interface ProductMainListProps {
  ipad: Product1[];
  watch: Product3[];
  tivi: Product7[];
  headphone: Product2[];
  laptop: Product10[];
  mouse: Product8[];
}
const MainProduct: React.FC<ProductMainListProps> = ({
  ipad,
  watch,
  tivi,
  headphone,
  laptop,
  mouse,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const showTimeout = 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds
    const hideTimeout = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds

    const interval = setInterval(
      () => {
        setIsVisible((prevVisible) => !prevVisible);
      },
      isVisible ? hideTimeout : showTimeout
    );

    return () => clearInterval(interval);
  }, [isVisible]);
  return (
    <div className="mx-auto max-w-7xl">
      <div
        className={`bg-black bg-opacity-90 rounded-md p-2 ${isVisible ? "block" : "hidden"}`}
      >
        <div className="flex item-center justify-between">
          <h1 className="content">Ipad</h1>
          <div>
              <div className="content">
                <div className="content__container">
                  <p className="content__container__text">
                    Sản phẩm bán chạy nhất
                  </p>

                  <ul className="content__container__list">
                    <li className="content__container__list__item">uiverse !</li>
                    <li className="content__container__list__item">uiverse !</li>
                    <li className="content__container__list__item">uiverse !</li>
                    <li className="content__container__list__item">uiverse</li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="relative">
          <div className="absolute left-[-368px] bottom-[-72px]">
          <div className="scene">
  <div className="forest">
    <div className="tree tree1">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
    </div>

    <div className="tree tree2">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
      <div className="branch branch-bottom"></div>
    </div>

    <div className="tree tree3">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
      <div className="branch branch-bottom"></div>
    </div>

    <div className="tree tree4">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
      <div className="branch branch-bottom"></div>
    </div>

    <div className="tree tree5">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
      <div className="branch branch-bottom"></div>
    </div>

    <div className="tree tree6">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
      <div className="branch branch-bottom"></div>
    </div>

    <div className="tree tree7">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
      <div className="branch branch-bottom"></div>
    </div>
  </div>
  
  <div className="tent">
      <div className="roof"></div>
      <div className="roof-border-left">
        <div className="roof-border roof-border1"></div>
        <div className="roof-border roof-border2"></div>
        <div className="roof-border roof-border3"></div>
      </div>
      <div className="entrance">
        <div className="door left-door">
          <div className="left-door-inner"></div>
        </div>
        <div className="door right-door">
          <div className="right-door-inner"></div>
        </div>
      </div>
    </div>

  <div className="floor">
      <div className="ground ground1"></div>
      <div className="ground ground2"></div>
    </div>
  
  <div className="fireplace">
    <div className="support"></div>
    <div className="support"></div>
    <div className="bar"></div>
    <div className="hanger"></div>
    <div className="smoke"></div>
    <div className="pan"></div>
    <div className="fire">
      <div className="line line1">
        <div className="particle particle1"></div>
        <div className="particle particle2"></div>
        <div className="particle particle3"></div>
        <div className="particle particle4"></div>
      </div>
      <div className="line line2">
        <div className="particle particle1"></div>
        <div className="particle particle2"></div>
        <div className="particle particle3"></div>
        <div className="particle particle4"></div>
      </div>
      <div className="line line3">
        <div className="particle particle1"></div>
        <div className="particle particle2"></div>
        <div className="particle particle3"></div>
        <div className="particle particle4"></div>
      </div>
    </div>
  </div>
  
  <div className="time-wrapper">
    <div className="time">
      <div className="day"></div>
      <div className="night">
        <div className="moon"></div>
        <div className="star star1 star-big"></div>
        <div className="star star2 star-big"></div>
        <div className="star star3 star-big"></div>
        <div className="star star4"></div>
        <div className="star star5"></div>
        <div className="star star6"></div>
        <div className="star star7"></div>
      </div>
    </div>
  </div>
</div>
          </div>
          </div>
        </div>
        {/* <RelatedTagIphone /> */}
        {ipad.length === 0 && <NoResults />}
        <ProductList data={ipad} productType="ipad" />
      </div>

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
