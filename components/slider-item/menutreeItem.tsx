"use client";
import { useState } from "react";

import { ChevronRight } from "lucide-react";
const MenuTreeItem = () => {
  const [isShown, setIsShown] = useState(false);

  const handleMouseOver = () => {
    setIsShown(true);
  };

  const handleMouseOut = () => {
    setIsShown(false);
  };

  return (
    <>
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className="flex relative cursor-pointer rounded-sm px-2 py-1 hover:bg-slate-200">
          <p className="hover:text-red-500">Iphone 15 </p>
          <p>
            <ChevronRight className="absolute left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-10 left-[195px] z-30 ">
          {isShown && (
            <div
              className="absolute 
      w-[1000px] 
      h-[400px] 
      shadow-xl 
      bg-white 
      rounded-md 
      animate-duration-500 
      animate-fade 
      animate-once 
      animate-ease-in-out 
      animate-normal 
      animate-fill-forwards"
            >
              <div className="grid grid-cols-5">
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuTreeItem;
