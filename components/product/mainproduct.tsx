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
import RelatedTagDaydien from "./list-related-tag/related-tag-daydien";
import RelatedTagOngnhua from "./list-related-tag/related-tag-ongnhua";
import RelatedTagOcam from "./list-related-tag/related-tag-ocam";
import RelatedTagBongden from "./list-related-tag/related-tag-bongden";
import RelatedTagSon from "./list-related-tag/related-tag-son";
import dynamic from 'next/dynamic';
const ProductListSingle = dynamic(() => import('./product-list/product-list-signle'), { ssr: false });
const ProductList = dynamic(() => import('./product-list/product-list'), { ssr: false });

import { useEffect, useState } from "react";
import "./product-list/product-list.css"

interface ProductMainListProps {
  quat: Product1[];
  daydien: Product3[];
  ocam: Product7[];
  ongnhua: Product2[];
  bongden: Product10[];
  son: Product8[];
}
const MainProduct: React.FC<ProductMainListProps> = ({
  quat,
  daydien,
  ocam,
  ongnhua,
  bongden,
  son,
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
        className={`bg-black bg-opacity-90 rounded-md p-[1px] ${isVisible ? "block" : "hidden"}`}
      >
        <div className="flex item-center justify-between">
          <h1 className="content text-[16px] md:text-[30px] ml-2">Nổi bật</h1>
          <div>
              <div className="content text-[16px] md:text-[30px]">
                <div className="content__container h-[29px] md:h-[51px] md:px-11">
                  <p className="content__container__text">
                    Sản phẩm bán chạy nhất
                  </p>

                  <ul className="content__container__list -mt-[10] pl-[8.8rem] md:pl-[18.5rem] hidden lg:block text-[16px] md:text-[30px] md:mt-0">
                    <li className="m-0 leading-[24px] md:leading-[46px]">Ống nhựa, Ống lưới xanh</li>
                    <li className="m-0 leading-[24px] md:leading-[46px]">Quạt</li>
                    <li className="m-0 leading-[24px] md:leading-[46px]">Sơn</li>
                    <li className="m-0 leading-[24px] md:leading-[46px]">Dây điện</li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
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
        {quat.length === 0 && <NoResults />}
        <ProductList data={quat} productType="quat" />
      </div>

      <>
        <h1 className="mb-4 mt-4 md:mt-10 font-bold text-3xl md:ml-6 lg:ml-0">Dây điện</h1>
        <RelatedTagDaydien />
        {daydien.length === 0 && <NoResults />}
        <ProductList data={daydien} productType="daydien" />
      </>

      <>
        <h1 className="mb-4 mt-4 md:mt-10 font-bold text-3xl md:ml-6 lg:ml-0">Ổ cắm,mặt ổ cắm</h1>
        <RelatedTagOcam />
        {ocam.length === 0 && <NoResults />}
        <ProductListSingle data={ocam} route="ocam" />
      </>

      <>
        <h1 className="mb-4 mt-4 md:mt-10 font-bold text-3xl md:ml-6 lg:ml-0">Ống nhựa, Ống lưới xanh</h1>
        <RelatedTagOngnhua />
        {ongnhua.length === 0 && <NoResults />}
        <ProductList data={ongnhua} productType="ongnhua" />
      </>

      <>
        <h1 className="mb-4 mt-4 md:mt-10 font-bold text-3xl md:ml-6 lg:ml-0">Bóng đèn</h1>
        <RelatedTagBongden />
        {bongden.length === 0 && <NoResults />}
        <ProductList data={bongden} productType="bongden" />
      </>

      <>
        <h1 className="mb-4 mt-4 md:mt-10 font-bold text-3xl md:ml-6 lg:ml-0">Sơn</h1>
        <RelatedTagSon />
        {son.length === 0 && <NoResults />}
        <ProductListSingle data={son} route="son" />
      </>
    </div>
  );
};

export default MainProduct;
