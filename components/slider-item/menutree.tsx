"use client";
import { useState } from "react";

import { ChevronRight } from "lucide-react";
import { Category,Category1,Category2,Category3,Category4,Category5,Category6,Category7,Category8,Category9,Category10,Category11, } from "@/types";
import {usePathname} from "next/navigation"
import Link from "next/link";
import { cn } from "@/lib/utils";
import {menutreecolor} from "@/components/color/color"
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
categories10: Category10[]
categories11: Category11[]
}
const MenuTree:React.FC<menuTreeProps> = ({data,categories1,categories2,categories3,categories4,categories5,categories6,categories7,categories8,categories9,categories10,categories11}) => {

  const pathname = usePathname()
  const routes = data.map((route) =>({
    href:`/category/${route.name}`,
    label: route.name,
    active: pathname === `/category/${route.name}`
  }))
  const categories01 = categories1.map((categories) =>({
    href:`/category1/${categories.name}`,
    label: categories.name,
    active: pathname === `/category1/${categories.name}`
  }))
  const categories02 = categories2.map((categories) =>({
    href:`/category2/${categories.name}`,
    label: categories.name,
    active: pathname === `/category2/${categories.name}`
  }))
  const categories03 = categories3.map((categories) =>({
    href:`/category3/${categories.name}`,
    label: categories.name,
    active: pathname === `/category3/${categories.name}`
  }))
  const categories04 = categories4.map((categories) =>({
    href:`/category4/${categories.name}`,
    label: categories.name,
    active: pathname === `/category4/${categories.name}`
  }))
  const categories05 = categories5.map((categories) =>({
    href:`/category5/${categories.name}`,
    label: categories.name,
    active: pathname === `/category5/${categories.name}`
  }))
  const categories06 = categories6.map((categories) =>({
    href:`/category6/${categories.name}`,
    label: categories.name,
    active: pathname === `/category6/${categories.name}`
  }))
  const categories07 = categories7.map((categories) =>({
    href:`/category7/${categories.name}`,
    label: categories.name,
    active: pathname === `/category7/${categories.name}`
  }))
  const categories08 = categories8.map((categories) =>({
    href:`/category8/${categories.name}`,
    label: categories.name,
    active: pathname === `/category8/${categories.name}`
  }))
  const categories09 = categories9.map((categories) =>({
    href:`/category9/${categories.name}`,
    label: categories.name,
    active: pathname === `/category9/${categories.name}`
  }))
  const categories010 = categories10.map((categories) =>({
    href:`/category10/${categories.name}`,
    label: categories.name,
    active: pathname === `/category10/${categories.name}`
  }))
  const categories011 = categories11.map((categories) =>({
    href:`/category11/${categories.name}`,
    label: categories.name,
    active: pathname === `/category11/${categories.name}`
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
    <div className="h-[377px] rounded-md shadow-md hidden md:block">
      <div className=" md:w-[185px] lg:w-[205px] ">
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className={menutreecolor.flex_hover_bg}>
          <p className={menutreecolor.texthover}>Pin</p>
          <p>
            <ChevronRight className="absolute md:left-[165px] lg:left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-10 left-[195px] z-30 ">
          {isShown && (
            <div
              className="absolute 
      lg:w-[780px] 
      md:w-[535px]
      lg:h-[400px] 
      md:h-[388px]
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
              <div >
                <div className="space-x-5 px-5 py-2">
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
        <div className={menutreecolor.flex_hover_bg}>
          <p className={menutreecolor.texthover}>Quạt </p>
          <p>
            <ChevronRight className="absolute md:left-[165px] lg:left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-[4.5rem] left-[195px] z-30 ">
          {isShown1 && (
            <div
              className="absolute 
      w-[780px] 
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
              <div >
              <div className="space-x-5 px-5 py-2">
                {categories01.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black ",
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
        <div className={menutreecolor.flex_hover_bg}>
          <p className={menutreecolor.texthover}>Ống nhựa, Ống lưới xanh</p>
          <p>
            <ChevronRight className="absolute md:left-[165px] lg:left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-[6.5rem] left-[195px] z-30 ">
          {isShown2 && (
            <div
              className="absolute 
      w-[780px] 
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
              <div >
              <div className="space-x-5 px-5 py-2">
                {categories02.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black ",
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
        <div className={menutreecolor.flex_hover_bg}>
          <p className={menutreecolor.texthover}>Dây điện </p>
          <p>
            <ChevronRight className="absolute md:left-[165px] lg:left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-[8.5rem] left-[195px] z-30 ">
          {isShown3 && (
            <div
              className="absolute 
      w-[780px] 
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
              <div >
              <div className="space-x-5 px-5 py-2">
                {categories03.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black ",
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
        <div className={menutreecolor.flex_hover_bg}>
          <p className={menutreecolor.texthover}>Đá cắt</p>
          <p>
            <ChevronRight className="absolute md:left-[165px] lg:left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-[10.5rem] left-[195px] z-30 ">
          {isShown4 && (
            <div
              className="absolute 
      w-[780px] 
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
              <div >
              <div className="space-x-5 px-5 py-2">
                {categories04.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black ",
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
        <div className={menutreecolor.flex_hover_bg}>
          <p className={menutreecolor.texthover}>Ổ khóa </p>
          <p>
            <ChevronRight className="absolute md:left-[165px] lg:left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-[12.5rem] left-[195px] z-30 ">
          {isShown5 && (
            <div
              className="absolute 
      w-[780px] 
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
              <div >
              <div className="space-x-5 px-5 py-2">
                {categories05.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black ",
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
        <div className={menutreecolor.flex_hover_bg}>
          <p className={menutreecolor.texthover}>Keo </p>
          <p>
            <ChevronRight className="absolute md:left-[165px] lg:left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-[14.5rem] left-[195px] z-30 ">
          {isShown6 && (
            <div
              className="absolute 
      w-[780px] 
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
              <div >
              <div className="space-x-5 px-5 py-2">
                {categories06.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black ",
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
        <div className={menutreecolor.flex_hover_bg}>
          <p className={menutreecolor.texthover}>Ổ cắm,mặt ổ cắm </p>
          <p>
            <ChevronRight className="absolute md:left-[165px] lg:left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-[16.5rem] left-[195px] z-30 ">
          {isShown7 && (
            <div
              className="absolute 
      w-[780px] 
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
              <div >
              <div className="space-x-5 px-5 py-2">
                {categories07.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black ",
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
        <div className={menutreecolor.flex_hover_bg}>
          <p className={menutreecolor.texthover}>Sơn </p>
          <p>
            <ChevronRight className="absolute md:left-[165px] lg:left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-[18.5rem] left-[195px] z-30 ">
          {isShown8 && (
            <div
              className="absolute 
      w-[780px] 
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
              <div >
              <div className="space-x-5 px-5 py-2">
                {categories08.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black ",
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
        <div className={menutreecolor.flex_hover_bg}>
          <p className={menutreecolor.texthover}>Vật liệu nhà tắm</p>
          <p>
            <ChevronRight className="absolute md:left-[165px] lg:left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-[20.5rem] left-[195px] z-30 ">
          {isShown9 && (
            <div
              className="absolute 
      w-[780px] 
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
              <div >
              <div className="space-x-5 px-5 py-2">
                {categories09.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black ",
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
        <div className={menutreecolor.flex_hover_bg}>
          <p className={menutreecolor.texthover}>Bóng đèn </p>
          <p>
            <ChevronRight className="absolute md:left-[165px] lg:left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-[22.5rem] left-[195px] z-30 ">
          {isShown10 && (
            <div
              className="absolute 
      w-[780px] 
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
              <div >
              <div className="space-x-5 px-5 py-2">
              {categories010.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black ",
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

      <div onMouseOver={handleMouseOver11} onMouseOut={handleMouseOut11}>
        <div className={menutreecolor.flex_hover_bg}>
          <p className={menutreecolor.texthover}>Đồ thường dùng </p>
          <p>
            <ChevronRight className="absolute md:left-[165px] lg:left-[185px]" />
          </p>
        </div>

        <div className="relative bottom-[24.5rem] left-[195px] z-30 ">
          {isShown11 && (
            <div
              className="absolute 
      w-[780px] 
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
              <div >
                <div className="space-x-5 py-2 px-5 ">
                {categories011.map((categories) => (
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
      </div>
    </div>
  );
};

export default MenuTree;