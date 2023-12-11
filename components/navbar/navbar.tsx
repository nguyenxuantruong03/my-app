"use client";
import { useEffect, useState } from "react";
import ImageDelivery from "./Delivery";
import Mainnav from "./mainnav";
import { navbarcolor } from "@/components/color/color";
import "./delivery.css";
import { Home, AlignLeft, Coins, Gift, ShoppingCart } from "lucide-react";
import Link from "next/link";
import axios from "axios";
const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalCoins, setTotalCoins] = useState<number>(0);
  const [rotation, setRotation] = useState<number>(0);
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const savedActiveIndex = localStorage.getItem("activeIndex")
    if (savedActiveIndex) {
      setActiveIndex(Number(savedActiveIndex));
    }
    // Load totalCoins from the server using GET request
    axios.get("/api/wheelSpin").then((response) => {
      setTotalCoins(response.data.totalCoins);
      setRotation(response.data.latestRotation)
    });
    // Add scroll event listener
    const handleScroll = () => {
      // Check if the scroll position is greater than or equal to 30
      setIsHidden(window.scrollY >= 30);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleItemClick = (index: number) => {
    setActiveIndex(index);

    localStorage.setItem("activeIndex", index.toString());
  };
  return (
    <>
      <div className=" fixed z-[100] w-full top-0">
      {!isHidden && (
        <div className={navbarcolor.bg_height}>
          <div className="max-w-[640px] md:max-w-3xl lg:mx-auto lg:max-w-7xl md:p-1 lg:p-0">
            <div className="md:grid md:grid-cols-3 overflow-hidden overflow-x-auto">
              <ImageDelivery />
            </div>
          </div>
        </div>
      )}
        <div className={navbarcolor.bg}>
          <div className="xl:mx-auto xl:max-w-7xl ">
            <div className="relative flex h-16 items-center justify-between px-5">
              <Mainnav />
            </div>
          </div>
        </div>
      </div>
        {/* Mobile */}
      <div className=" fixed z-[100] w-full bottom-0  md:hidden box-border bg-[#222327] h-[75px] rounded-[14px]">
        <div className="navigation">
          <ul>
            <li
              className={`list ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => handleItemClick(0)}
            >
              <Link href="/">
                <span className="icon">
                  <Home />
                </span>
                <span className="text">Trang chủ</span>
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => handleItemClick(1)}
            >
              <Link href="/home-product">
                <span className="icon">
                <ShoppingCart />
                </span>
                <span className="text">Sản phẩm</span>
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => handleItemClick(2)}
            >
              <Link href="/listproduct">
                <span className="icon">
                  <AlignLeft />
                </span>
                <span className="text">Danh sách</span>
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 3 ? "active" : ""}`}
              onClick={() => handleItemClick(3)}
            >
              <Link href="/spinlucky">
                <span className="icon">
                  <Coins />
                </span>
                <span className="text">{totalCoins} xu</span>
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 4 ? "active" : ""}`}
              onClick={() => handleItemClick(4)}
            >
              <Link href="/spinlucky">
                <span className="icon">
                  <Gift />
                </span>
                <span className="text">{rotation} vòng</span>
              </Link>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
