"use client";
import Currencyonevalue from "./currencyonevalue";
import "./style.css";
import React, { useState, useEffect } from "react";
interface PriceRangeCategoryProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
  maxPriceInDatas: any
}

const PriceRangeCategory: React.FC<PriceRangeCategoryProps> = ({
  minPrice,
  maxPrice,
  onPriceChange,
  maxPriceInDatas
}) => {
  const [priceGap, setPriceGap] = useState<number>(1000);
  // --------------maxPrice-------------: Biến này được sử dụng để theo dõi giá cao nhất của sản phẩm sau khi đã áp dụng khuyến mãi (percentpromotion). 
  // Nó được cập nhật trong quá trình lấy dữ liệu sản phẩm từ server.

  // -------maxPriceInDatas-------: Biến này giữ giá cao nhất trong danh sách sản phẩm trước khi áp dụng khuyến mãi. 
  // Nó được sử dụng để thiết lập giá trị tối đa cho thanh trượt (input range) trong thành phần PriceRangeCategory. 
  // Giá trị này không thay đổi trong quá trình chạy ứng dụng và chỉ được xác định một lần khi lấy dữ liệu sản phẩm.
  const handleRangeInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isMinRange: boolean
  ) => {
    const inputValue = parseInt(e.target.value);
    if (isMinRange && inputValue <= maxPrice - priceGap) {
      onPriceChange(inputValue, maxPrice);
    } else if (!isMinRange && inputValue >= minPrice + priceGap) {
      onPriceChange(minPrice, inputValue);
    }
  };

  useEffect(() => {
    const progressWidth = ((minPrice / maxPriceInDatas) * 100).toFixed(2);
    const progressRight = ((1 - maxPrice / maxPriceInDatas) * 100).toFixed(2);
    const range = document.querySelector(".slider .progress") as HTMLDivElement;
    range.style.left = `${progressWidth}%`;
    range.style.right = `${progressRight}%`;
  }, [minPrice, maxPrice]);
  return (
    <div className="wrapper w-full md:w-[500px]">
      <div className="price-input">
        <div className="field">
          <span className="font-semibold mr-1">Tối thiểu: </span>
          <Currencyonevalue value={minPrice} />
        </div>
        <div className="seperator text-red-500">-</div>
        <div className="field">
          <span className="font-semibold mr-1">Tối đa: </span>
          <Currencyonevalue value={maxPrice} />
        </div>
        {/* Thanh trướt slider và progress để kéo */}
      </div>
      <div className="slider">
        <div className="progress"></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          min="0"
          max={maxPriceInDatas}
          value={minPrice}
          onChange={(e) => handleRangeInputChange(e, true)}
        />
        <input
          type="range"
          min="0"
          max={maxPriceInDatas}
          value={maxPrice}
          onChange={(e) => handleRangeInputChange(e, false)}
        />
      </div>
    </div>
  );
};

export default PriceRangeCategory;
