"use client";
import { useEffect, useState } from "react";
import {
  ArrowDownAZ,
  ArrowDownWideNarrow,
  ArrowDownZA,
  ArrowUpNarrowWide,
  Heart,
  Percent,
} from "lucide-react";
import useLike from "@/hooks/use-like";
import LikeItem from "./components/like-item";
import { SortButton } from "@/components/ui/sortButton";
import SortPriceRange from "@/app/(routes)/like-product/components/sort-price-change-like-item";

const sortButtons = [
  {
    label: "Giá cao đến thấp",
    sortType: "priceHighToLow",
    icon: <ArrowDownWideNarrow className="w-5 h-5" />,
  },
  {
    label: "Giá thấp đến cao",
    sortType: "priceLowToHigh",
    icon: <ArrowUpNarrowWide className="w-5 h-5 " />,
  },
  {
    label: "Tên A đến Z",
    sortType: "nameAToZ",
    icon: <ArrowDownAZ className="w-5 h-5 " />,
  },
  {
    label: "Tên Z đến A",
    sortType: "nameZToA",
    icon: <ArrowDownZA className="w-5 h-5" />,
  },
  {
    label: "Khuyến mãi hot",
    sortType: "percentPromotionHighToLow",
    icon: <Percent className="w-5 h-5" />,
  },
];

const LikePage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [sortType, setSortType] = useState(null);
  const like = useLike();
  //Handle sort product
  const handleSortChange = (sortType: any) => {
    setSortType(sortType);
    like.setSortType(sortType);
    like.setFilteredItems(like.getSortedItems()); // Update the filtered items based on the sort type
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white mt-16 mx-auto max-w-7xl pl-2 pt-16 sm:px-6 lg:px-8">
      <div className="lg:grid-cols-12 lg:items-start gap-x-12 lg:col-span-7">
        {like.items.length === 0 && (
          <>
            <div className="text-3xl font-semibold">Thả tim</div>
            <div className="flex pb-2 font-bold">
              Chưa có sản phẩm được thả
              <Heart className="fill-red-500 text-red-500" />.
            </div>
          </>
        )}
        {like.items.length > 0 && (
          <>
            <div className="text-3xl font-semibold">Chọn theo tiêu chí:</div>
            <SortPriceRange />
            <div className="my-2 text-3xl font-semibold">Sắp xếp theo:</div>
            <div className="flex justify-start items-center mb-4 w-full overflow-x-auto">
              <div className="flex space-x-2">
                {sortButtons.map((button, index) => (
                  <SortButton
                    key={index}
                    onClick={() => handleSortChange(button.sortType)}
                    active={sortType === button.sortType}
                    label={button.label}
                    icon={button.icon}
                  />
                ))}
              </div>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 lg:col-span-4 lg:mt-0 mb-4">
          {like.filteredItems.map((item) => (
            <LikeItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LikePage;
