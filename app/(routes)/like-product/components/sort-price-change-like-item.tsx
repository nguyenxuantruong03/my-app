"use client";
import useLike from "@/hooks/use-like";
import "./like-item.css";
import React, { useState, useEffect } from "react";
import Currencyonevalue from "../../../../components/ui/currencyonevalue";
export const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "VND",
});
const PriceRange: React.FC = () => {
  const [priceGap, setPriceGap] = useState<number>(100);
  const [minPrice, setMinPrice] = useState<number>(0);
  // maxPrice: Đây là biến state chứa giá trị tối đa của khoảng giá, được sử dụng để hiển thị giá trị tối đa trên thanh trượt và trong giao diện người dùng.
  const [maxPrice, setMaxPrice] = useState<number>(0);
  // maxPriceInItems: Đây là biến state khác chứa giá trị tối đa của các mục trong mảng like.items. 
  // Nó được cập nhật từ mảng like.items bằng cách tính toán giá trị cao nhất của price * ((100 - percentpromotion) / 100) + 1000000 và sau đó được sử dụng để cập 
  // nhật giá trị tối đa của khoảng giá (maxPrice).
  const [maxPriceInItems, setMaxPriceInItems] = useState<number>(0); // Thêm biến trạng thái mới
  const like = useLike();

  useEffect(() => {
    // Tính giá trị cao nhất từ mảng items
    const maxPriceInItems = Math.max(
      ...like.items.map(
        (item) => item.price * ((100 - item.percentpromotion) / 100) + 1000000
      )
    );
    setMaxPriceInItems(maxPriceInItems);
    setMaxPrice(maxPriceInItems); // Cập nhật maxPrice với giá trị mới
  }, [like.items]);

  useEffect(() => {
    const progressWidth = ((minPrice / maxPriceInItems) * 100).toFixed(2);
    const progressRight = ((1 - maxPrice / maxPriceInItems) * 100).toFixed(2);
    const range = document.querySelector(".slider .progress") as HTMLDivElement;
    range.style.left = `${progressWidth}%`;
    range.style.right = `${progressRight}%`;
  }, [minPrice, maxPrice]);
  
  const handleRangeInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isMinRange: boolean
  ) => {
    const inputValue = parseInt(e.target.value);
    if (isMinRange && inputValue <= maxPrice - priceGap) {
      setMinPrice(inputValue);
    } else if (!isMinRange && inputValue >= minPrice + priceGap) {
      setMaxPrice(inputValue);
    }
    const filteredItems = like.items.filter(
      (item) =>
        item.price * ((100 - item.percentpromotion) / 100) >= minPrice &&
        item.price * ((100 - item.percentpromotion) / 100) <= maxPrice
    );
    like.setFilteredItems(filteredItems);
  };

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
          max={maxPriceInItems}
          value={minPrice}
          onChange={(e) => handleRangeInputChange(e, true)}
        />
        <input
          type="range"
          min="0"
          max={maxPriceInItems}
          value={maxPrice}
          onChange={(e) => handleRangeInputChange(e, false)}
        />
      </div>
    </div>
  );
};

export default PriceRange;
