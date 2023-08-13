"use client";
import { useState } from "react";

import { ChevronRight } from "lucide-react";
import { Category, Category1, Category10, Category2, Category3,Category4,Category5,Category6,Category7,Category8,Category9 } from "@/types";
import {usePathname} from "next/navigation"
import Link from "next/link";
import { cn } from "@/lib/utils";

interface menuTreeProps{
data: Category[]
categories1: Category1[]
categories2: Category2[]
categories3: Category3[]
categories4: Category4[]
categories5: Category5[]
categories6: Category6[]
categories7: Category7[]
categories8: Category8[]
categories9: Category9[]
categorieslaptop: Category10[]
}
const MenuTree:React.FC<menuTreeProps> = ({data,categories1,categories2,categories3,categories4,categories5,categories6,categories7,categories8,categories9,categorieslaptop}) => {

  const pathname = usePathname()
  const routes = data.map((route) =>({
    href:`/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))

  const categories01 = categories1.map((categories) =>({
    href:`/category1/${categories.id}`,
    label: categories.name,
    active: pathname === `/category1/${categories.id}`
  }))
  const categories02 = categories2.map((categories) =>({
    href:`/category2/${categories.id}`,
    label: categories.name,
    active: pathname === `/category2/${categories.id}`
  }))
  const categories03 = categories3.map((categories) =>({
    href:`/category3/${categories.id}`,
    label: categories.name,
    active: pathname === `/category3/${categories.id}`
  }))
  const categories04 = categories4.map((categories) =>({
    href:`/category4/${categories.id}`,
    label: categories.name,
    active: pathname === `/category4/${categories.id}`
  }))
  const categories05 = categories5.map((categories) =>({
    href:`/category5/${categories.id}`,
    label: categories.name,
    active: pathname === `/category5/${categories.id}`
  }))
  const categories06 = categories6.map((categories) =>({
    href:`/category6/${categories.id}`,
    label: categories.name,
    active: pathname === `/category6/${categories.id}`
  }))
  const categories07 = categories7.map((categories) =>({
    href:`/category7/${categories.id}`,
    label: categories.name,
    active: pathname === `/category7/${categories.id}`
  }))
  const categories08 = categories8.map((categories) =>({
    href:`/category8/${categories.id}`,
    label: categories.name,
    active: pathname === `/category8/${categories.id}`
  }))
  const categories09 = categories9.map((categories) =>({
    href:`/category9/${categories.id}`,
    label: categories.name,
    active: pathname === `/category9/${categories.id}`
  }))
  const categorieslaptops = categorieslaptop.map((categories) =>({
    href:`/category10/${categories.id}`,
    label: categories.name,
    active: pathname === `/category10/${categories.id}`
  }))

  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);
  const [isShown7, setIsShown7] = useState(false);
  const [isShown8, setIsShown8] = useState(false);
  const [isShown9, setIsShown9] = useState(false);
  const [isShown10, setIsShown10] = useState(false);
  const [isShown11, setIsShown11] = useState(false);

  const handleMouseOver = () => {
    setIsShown(true);
  };

  const handleMouseOut = () => {
    setIsShown(false);
  };

  const handleMouseOver1 = () => {
    setIsShown1(true);
  };

  const handleMouseOut1 = () => {
    setIsShown1(false);
  };

  const handleMouseOver2 = () => {
    setIsShown2(true);
  };

  const handleMouseOut2 = () => {
    setIsShown2(false);
  };

  const handleMouseOver3 = () => {
    setIsShown3(true);
  };

  const handleMouseOut3 = () => {
    setIsShown3(false);
  };

  const handleMouseOver4 = () => {
    setIsShown4(true);
  };

  const handleMouseOut4 = () => {
    setIsShown4(false);
  };

  const handleMouseOver5 = () => {
    setIsShown5(true);
  };

  const handleMouseOut5 = () => {
    setIsShown5(false);
  };

  const handleMouseOver6 = () => {
    setIsShown6(true);
  };

  const handleMouseOut6 = () => {
    setIsShown6(false);
  };

  const handleMouseOver7 = () => {
    setIsShown7(true);
  };

  const handleMouseOut7 = () => {
    setIsShown7(false);
  };

  const handleMouseOver8 = () => {
    setIsShown8(true);
  };

  const handleMouseOut8 = () => {
    setIsShown8(false);
  };

  const handleMouseOver9 = () => {
    setIsShown9(true);
  };

  const handleMouseOut9 = () => {
    setIsShown9(false);
  };

  const handleMouseOver10 = () => {
    setIsShown10(true);
  };

  const handleMouseOut10 = () => {
    setIsShown10(false);
  };

  const handleMouseOver11 = () => {
    setIsShown11(true);
  };

  const handleMouseOut11 = () => {
    setIsShown11(false);
  };

  return (
    <div className="h-[377px] rounded-md shadow-md">
      <div className=" w-[205px] ">
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className="flex relative cursor-pointer rounded-sm px-2 py-1 hover:bg-slate-200">
          <p className="hover:text-red-500">Điện thoại </p>
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
                <div>
                {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        route.active ? "text-black" : "text-neutral-500"
                      )}
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1}>
        <div className="flex relative cursor-pointer rounded-sm px-2 py-1 hover:bg-slate-200">
          <p className="hover:text-red-500">Samsung </p>
          <p>
            <ChevronRight className="absolute left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-10 left-[195px] z-30 ">
          {isShown1 && (
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
              <div>
                {categories01.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        categories.active ? "text-black" : "text-neutral-500"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
        <div className="flex relative cursor-pointer rounded-sm px-2 py-1 hover:bg-slate-200">
          <p className="hover:text-red-500">Âm thanh </p>
          <p>
            <ChevronRight className="absolute left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-10 left-[195px] z-30 ">
          {isShown2 && (
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
              <div>
                {categories02.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        categories.active ? "text-black" : "text-neutral-500"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}>
        <div className="flex relative cursor-pointer rounded-sm px-2 py-1 hover:bg-slate-200">
          <p className="hover:text-red-500">Đồng hồ,Máy ảnh </p>
          <p>
            <ChevronRight className="absolute left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-10 left-[195px] z-30 ">
          {isShown3 && (
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
              <div>
                {categories03.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        categories.active ? "text-black" : "text-neutral-500"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4}>
        <div className="flex relative cursor-pointer rounded-sm px-2 py-1 hover:bg-slate-200">
          <p className="hover:text-red-500">Gia dụng,Smarthome</p>
          <p>
            <ChevronRight className="absolute left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-10 left-[195px] z-30 ">
          {isShown4 && (
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
              <div>
                {categories04.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        categories.active ? "text-black" : "text-neutral-500"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div onMouseOver={handleMouseOver5} onMouseOut={handleMouseOut5}>
        <div className="flex relative cursor-pointer rounded-sm px-2 py-1 hover:bg-slate-200">
          <p className="hover:text-red-500">Phụ kiện </p>
          <p>
            <ChevronRight className="absolute left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-10 left-[195px] z-30 ">
          {isShown5 && (
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
              <div>
                {categories05.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        categories.active ? "text-black" : "text-neutral-500"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div onMouseOver={handleMouseOver6} onMouseOut={handleMouseOut6}>
        <div className="flex relative cursor-pointer rounded-sm px-2 py-1 hover:bg-slate-200">
          <p className="hover:text-red-500">PC,Màn hình </p>
          <p>
            <ChevronRight className="absolute left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-10 left-[195px] z-30 ">
          {isShown6 && (
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
              <div>
                {categories06.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        categories.active ? "text-black" : "text-neutral-500"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div onMouseOver={handleMouseOver7} onMouseOut={handleMouseOut7}>
        <div className="flex relative cursor-pointer rounded-sm px-2 py-1 hover:bg-slate-200">
          <p className="hover:text-red-500">Tivi </p>
          <p>
            <ChevronRight className="absolute left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-10 left-[195px] z-30 ">
          {isShown7 && (
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
              <div>
                {categories07.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        categories.active ? "text-black" : "text-neutral-500"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div onMouseOver={handleMouseOver8} onMouseOut={handleMouseOut8}>
        <div className="flex relative cursor-pointer rounded-sm px-2 py-1 hover:bg-slate-200">
          <p className="hover:text-red-500">Ốp lưng </p>
          <p>
            <ChevronRight className="absolute left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-10 left-[195px] z-30 ">
          {isShown8 && (
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
              <div>
                {categories08.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        categories.active ? "text-black" : "text-neutral-500"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div onMouseOver={handleMouseOver9} onMouseOut={handleMouseOut9}>
        <div className="flex relative cursor-pointer rounded-sm px-2 py-1 hover:bg-slate-200">
          <p className="hover:text-red-500">Chuột, bàn phím </p>
          <p>
            <ChevronRight className="absolute left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-10 left-[195px] z-30 ">
          {isShown9 && (
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
              <div>
                {categories09.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        categories.active ? "text-black" : "text-neutral-500"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div onMouseOver={handleMouseOver10} onMouseOut={handleMouseOut10}>
        <div className="flex relative cursor-pointer rounded-sm px-2 py-1 hover:bg-slate-200">
          <p className="hover:text-red-500">Laptop </p>
          <p>
            <ChevronRight className="absolute left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-10 left-[195px] z-30 ">
          {isShown10 && (
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
              <div>
                {categorieslaptops.map((categorie) => (
                    <Link
                      key={categorie.href}
                      href={categorie.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        categorie.active ? "text-black" : "text-neutral-500"
                      )}
                    >
                      {categorie.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div onMouseOver={handleMouseOver11} onMouseOut={handleMouseOut11}>
        <div className="flex relative cursor-pointer rounded-sm px-2 py-1 hover:bg-slate-200">
          <p className="hover:text-red-500">Iphone 15 </p>
          <p>
            <ChevronRight className="absolute left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-10 left-[195px] z-30 ">
          {isShown11 && (
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
                <div>112312323</div>
                <div>123</div>
                <div>123</div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default MenuTree;
