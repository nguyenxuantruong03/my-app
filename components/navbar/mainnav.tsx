"use client";
import Link from "next/link";
import {
  AlignJustify,
  UserCircle2,
  ShoppingBag,
  Gift,
  Coins,
  Gamepad2,
  Phone,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";
import Menu from "@/components/navbar/menu-list";
import axios from "axios";
import {mainnavcolor} from "@/components/color/color"
import SearchPage from "./Search";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import "./mainnav.css";
import { SignInButton } from "@clerk/nextjs";

const MainNav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const user = useUser();
  const router = useRouter();
  const cart = useCart();
  //List-onClick-onBlur click mở blur ra ngoài thì tắt đi
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    if (isOpen) {
      // Add the event listener when the menu is open
      document.addEventListener('click', handleOutsideClick);
    } else {
      // Remove the event listener when the menu is closed
      document.removeEventListener('click', handleOutsideClick);
    }
    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, handleOutsideClick]);
  

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //Coin
  const [totalCoins, setTotalCoins] = useState<number>(0);
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    // Load totalCoins from the server using GET request
    axios.get("/api/wheelSpin").then((response) => {
      setTotalCoins(response.data.totalCoins);
      setRotation(response.data.latestRotation)
    });
  }, []);
  
  

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Link href="/home-product" >
        <div className="hidden xl:block">
       <div className="bg-[#333]  p-1  rounded-lg">
       <svg width="120" height="35" viewBox="0 0 512 52" xmlns="http://www.w3.org/2000/svg">
          <text x="20" y="10" className="text1">Xuân</text>
          <text x="160" y="10" className="text2">Trường</text>
          <text x="32" y="72" className="text1">vật liệu</text>
          <text x="245" y="72" className="text3">xây dựng</text>
        </svg>
        </div>
        </div>
        <div className="block xl:hidden">
            <Image alt=""  src="/images/logo.ico" width="45" height="45" className="rounded-md m-[6.5px] border border-white"/>  
        </div>
      </Link>

      <div onClick={toggleOpen} className="hidden xl:block">
        <div className={mainnavcolor.bg_list}>
          <div className="flex items-center justify-center text-white ">
            <div className="px-1 py-1">
              <AlignJustify className="w-5 h-5" />
            </div>
            Danh sách
          </div>
        </div>
      </div>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
          onClick={toggleOpen}
        ></div>
      )}
       {/* Menu */}
      {isOpen && (
        <div className="absolute top-[-40px] z-40 " ref={menuRef}>
          <Menu />
        </div>
      )}

      <div className={mainnavcolor.bgroundedmd}>
        <div className=" flex-col md:flex-row justify-center  items-center  py-[2px] hidden md:flex">
          <div className="basis-1/2 md:flex gap-2">
            <div className="basis-1/3 flex md:flex-col flex-row items-center justify-center ">
              <Coins className=" text-white w-5 h-5" />
            </div>
            <div className="basis-2/3 ">
              <div className="text-sm flex gap-3 text-white">Tổng xu</div>
              <div className="text-sm w-24 text-white"> {totalCoins} xu</div>
            </div>
          </div>
        </div>
      </div>

      <SearchPage />

      <Link href="/spinlucky" className=" hidden md:block">
        <div className={mainnavcolor.bghover}>
          <div className="flex flex-col md:flex-row justify-center  items-center">
            <div className="basis-1/2 md:flex gap-2">
              <div className="basis-1/3 flex md:flex-col flex-row items-center justify-center relative">
                <Gift className="w-6 h-6 text-white" />
                <span className="w-5 h-5 absolute bg-[#e53350] rounded-full  left-[10px] top-0 -mt[1px] shadow-lg">
            <p className="text-[0.75rem] text-center font-semibold text-white">{rotation} </p>
          </span>
              </div>
              
              <div className="basis-2/3">
                <div className="text-xs flex gap-4 text-white">Vòng quay</div>
                <div className="text-xs w-20 text-white">May Mắn</div>
              </div>
            </div>
          </div>
          
        </div>
      </Link>

      <Link href="/game" className="hidden xl:block">
        <div className={mainnavcolor.bghover}>
          <div className="flex flex-col md:flex-row justify-center  items-center">
            <div className="basis-1/2 md:flex gap-2">
              <div className="basis-1/3 flex md:flex-col flex-row items-center justify-center ">
                <Gamepad2 className=" text-white w-6 h-6" />
              </div>
              <div className="basis-2/3">
                <div className="text-xs flex gap-4 text-white">Trò chơi</div>
                <div className="text-xs w-14 text-white">giải trí</div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link href="tel:0948468558" className="hidden lg:block">
          <div className={mainnavcolor.bghover} >
            <div className="flex flex-col md:flex-row justify-center  items-center ">
            <div className="basis-1/2 md:flex gap-2">
            <div className="basis-1/3 flex md:flex-col flex-row items-center justify-center ">
                <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="basis-2/3" >
            <div className="text-xs flex gap-4 text-white">
                Gọi mua hàng
                </div>
            <div className="text-xs w-20 text-white">032.311.5151</div>
            </div>
            </div>
            </div>
          </div>
        </Link>

      <button onClick={() => router.push("/cart")}>
        <div className={mainnavcolor.bghover_gio_hang}>
          <div className="flex flex-col md:flex-row justify-center  items-center relative">
            <div className="basis-1/2 md:flex gap-2">
              <div className="basis-1/3 flex md:flex-col flex-row items-center justify-center ">
                <ShoppingBag className="w-6 h-6 text-white" />
                <span className="w-5 h-5 absolute bg-[#e53350] rounded-full left-[10px] -top-[5px] md:top-0 bg-opacity-90 -mt[1px] shadow-lg">
            <p className="text-[0.75rem] m-auto text-white font-semibold">{cart.items.length} </p>
          </span>
              </div>
              <div className="basis-2/3 hidden md:block">
                <div className="text-xs flex gap-4 text-white">Giỏ</div>
                <div className="text-xs text-white">hàng</div>
              </div>
            </div>
          </div>
          
        </div>
      </button>
            
      
          {user.isSignedIn ? (
            <div className="bg-[#e53350]  px-2 py-1  rounded-lg ">
            <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="bg-[#e53350]  px-2 py-1  rounded-lg ">
            <div className="items-center justify-center text-white flex" >
            <UserCircle2 />
            </div>
            <div className="text-white text-xs"> 
              <SignInButton />
            </div>
          </div>
          )}
    </>
  );
};

export default MainNav;
