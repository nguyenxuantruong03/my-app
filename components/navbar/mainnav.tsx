"use client";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import {
  AlignJustify,
  UserCircle2,
  Truck,
  ShoppingBag,
  Gift,
  MapPin,
  Coins,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";
import Menu from "@/components/navbar/menu-list";
import axios from "axios";
const MainNav = () => {
  const [isMounted, setIsMounted] = useState(false);
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

  useEffect(() => {
    // Load totalCoins from the server using GET request
    axios.get("/api/wheelSpin").then((response) => {
      setTotalCoins(response.data.totalCoins);
    });
  }, []);
  
  

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Link href="/">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="52"
            viewBox="0 0 512 52"
          >
            <path
              fill="#fff"
              d="M384.111.398c1.847 0 2.236 1.107 2.236 2.039v3.428h-3.53c-1.766 0-2.136-1.054-2.136-1.94V.402h3.43V.398Zm-.3 11.233c1.464 0 2.238.738 2.238 2.137v28.78h-3.182v-.112c-1.14-.102-1.888-.93-1.888-2.124v-28.68h2.832Zm-168.424 22.44c1.09.99 1.403 1.402 1.414 1.42l.127.168l-.145.152c-4.908 5.14-9.837 7.334-16.483 7.334c-11.93 0-20.927-9.253-20.927-21.522C179.373 9.498 188.609 0 200.399 0c8.092 0 12.556 3.187 16.176 6.63l.176.167l-.163.18a56.62 56.62 0 0 1-1.797 1.897c-1.01 1.124-2.382.848-3.222.112c-3.427-2.875-7.008-4.215-11.27-4.215c-8.926 0-15.657 7.16-15.657 16.652c0 9.448 6.878 16.85 15.658 16.85c4.424 0 7.749-1.25 11.472-4.317c.917-.814 2.458-1.042 3.615.116Zm75.574-23.235c7.144 0 11.581 4.78 11.581 12.476V42.35h-2.635c-2.058 0-2.336-1.283-2.336-2.536V24.306c0-5.655-2.773-8.896-7.604-8.896c-4.083 0-8.203 2.842-8.203 9.194V42.35h-2.733c-1.443 0-2.238-.795-2.238-2.238V24.207c0-5.51-2.842-8.797-7.603-8.797c-4.753 0-8.2 3.908-8.2 9.294v15.408c0 1.787-.785 2.138-2.14 2.138h-2.832V11.333h2.734c1.484 0 2.335.85 2.335 2.336v2.185c1.908-2.677 4.6-5.215 9.594-5.215c5.803 0 8.575 3.485 9.778 5.824c2.689-3.783 6.129-5.627 10.5-5.627h.002Zm35.888.1c7.155 0 14.762 5.626 14.762 16.054c0 10.429-7.607 16.055-14.764 16.055c-4.612 0-8.34-1.947-11.381-5.95v14.7h-2.833c-1.4 0-2.138-.775-2.138-2.238V11.532h2.436c1.658 0 2.533.842 2.533 2.435v3.19c3.044-4.186 6.774-6.221 11.385-6.221Zm9.592 16.054c0-7.603-5.277-11.58-10.488-11.58c-5.302 0-10.785 4.294-10.785 11.48c0 7.25 5.482 11.582 10.785 11.582c6.176 0 10.488-4.72 10.488-11.482Zm82.412-13.22c0-1.507 1.38-2.337 2.335-2.337h2.734v25.4c0 9.57-5.707 15.06-15.657 15.06c-5.213 0-9.908-1.455-13.962-4.32l-.173-.124l.096-.19c.011-.025.31-.621 1.103-1.909c.423-.689.966-1.01 1.57-1.001c.5.012 1.052.229 1.854.721a19.3 19.3 0 0 0 9.413 2.45c6.854 0 10.785-3.86 10.785-10.588v-2.868c-3.256 3.967-7.086 5.899-11.68 5.899c-7.06 0-14.563-5.106-14.563-14.565c0-4.22 1.603-8.036 4.516-10.745c2.677-2.49 6.338-3.918 10.047-3.918c5.845 0 9.477 2.947 11.582 5.659V13.77Zm.199 11.828c0-6.618-5.61-10.19-10.885-10.19c-5.963 0-10.291 4.245-10.291 10.09c0 5.81 4.424 10.19 10.291 10.19c5.351 0 10.885-3.774 10.885-10.09Zm28.283-14.662c7.215 0 11.878 4.857 11.878 12.375v19.136h-3.033c-1.39 0-2.035-.676-2.035-2.135V24.406c0-5.572-3.067-8.897-8.203-8.897c-5.239 0-8.897 3.822-8.897 9.294l.101 17.644h-5.072V11.532h2.734c1.163 0 2.337.66 2.337 2.137V16.3c2.427-3.562 5.85-5.365 10.19-5.365Zm-87.085.198c8.46 0 13.172 4.393 13.273 12.374V42.35h-2.735c-1.458 0-2.138-.648-2.138-2.038V38.22c-2.723 3.161-6.438 4.825-10.785 4.825c-7.957 0-11.583-5.076-11.583-9.792c0-6.223 4.838-9.791 13.273-9.791h5.118V25.2c0 1.438-.73 2.137-2.236 2.137h-2.485c-5.546 0-8.6 2.066-8.6 5.815c0 3.997 3.84 5.816 7.406 5.816c5.732 0 9.89-3.366 9.89-8.002v-7.358c0-5.162-3.122-8.002-8.795-8.002c-2.557 0-4.86.455-7.465 1.475c-.948.315-2.1.288-2.51-.736a86.776 86.776 0 0 1-.897-2.395l-.077-.215l.209-.096c3.815-1.733 7.25-2.506 11.137-2.506Zm-125.159 0c8.458 0 13.172 4.393 13.273 12.374V42.35h-2.735c-1.458 0-2.138-.648-2.138-2.038V38.22c-2.722 3.161-6.436 4.825-10.785 4.825c-7.957 0-11.582-5.076-11.582-9.792c0-6.223 4.838-9.791 13.273-9.791h5.082V25.2c0 1.438-.733 2.137-2.237 2.137h-2.449c-5.546 0-8.598 2.066-8.598 5.815c0 3.997 3.839 5.816 7.405 5.816c5.733 0 9.891-3.366 9.891-8.002v-7.358c0-5.162-3.124-8.002-8.797-8.002c-2.557 0-4.859.455-7.465 1.475c-.953.319-2.1.288-2.508-.736a78.472 78.472 0 0 1-.897-2.395l-.08-.218l.213-.093c2.95-1.302 6.341-2.506 11.134-2.506Zm275.22 11.481c1.118.786 1.689 1.757 1.689 2.884v.56c-.013.87-.325 2.094-1.69 3.119l-.004.003c-.658.47-7.347 5.104-14.429 10.012c-6.928 4.801-14.735 10.211-15.689 10.886v.781l-.463-.78c-.022-.04-.043-.073-.02-.127h-.013v-4.075c0-1.39.153-2.058 1.7-3.09c1.292-.83 21.743-15.011 24.457-16.89c-2.693-1.87-22.88-15.886-24.264-16.899l-.164-.118c-1.023-.741-1.827-1.324-1.827-2.867v-4.85l.388.272c1.207.84 29.538 20.588 30.328 21.18Zm-17.709 5.486c-.7 0-1.395-.244-2.125-.73c-1.77-1.181-10.848-7.494-10.94-7.558l-.105-.074v-3.113c0-.715.308-1.28.848-1.555c.579-.295 1.301-.198 1.933.26c1.366.879 14.575 10.044 14.708 10.14l.3.206l-.305.203s-.893.595-1.884 1.288c-.848.622-1.641.933-2.43.933Zm-421.66 7.261c.97.97 1.467 1.37 1.472 1.376l.2.16l-.166.195c-2.416 2.817-6.02 6.052-12.517 6.052c-8.742 0-15.856-7.203-15.856-16.056c0-9.058 6.965-16.153 15.856-16.153c4.997 0 8.794 1.68 12.311 5.447l.154.166l-.152.169a55.896 55.896 0 0 1-1.7 1.8c-.974.971-1.996.915-3.317-.184c-1.783-1.446-4.06-2.926-7.395-2.926c-5.936 0-10.588 5.088-10.588 11.582c0 6.495 4.782 11.583 10.885 11.583c2.816 0 5.402-1.05 7.688-3.118c.671-.538 2.067-1.15 3.125-.091v-.002ZM103.971.4c1.359 0 2.236.917 2.236 2.337v3.131h-3.528c-1.767 0-2.139-1.055-2.139-1.94V.401h3.43V.399Zm-.398 11.234c1.464 0 2.236.737 2.236 2.137v28.78h-3.18v-.112c-1.141-.103-1.89-.93-1.89-2.124V11.63h2.834v.002Zm32.676 1.64c.489-1.174 1.377-1.743 2.714-1.743h3.462l-.152.348c-.122.28-12.135 27.85-12.627 28.931c-.521 1.148-1.273 1.638-2.512 1.638h-.598c-1.28 0-2.074-.245-2.614-1.543c-.49-1.077-12.504-28.846-12.624-29.127l-.15-.348h3.558c1.358 0 2.305.622 2.815 1.844c.36 1.082 7.893 19.358 9.313 22.806c1.424-3.447 8.967-21.732 9.415-22.806Zm31.146 11.878c.288 0 .502-.077.625-.23c.173-.203.215-.573.124-1.07c-.41-5.12-4.107-8.544-9.2-8.544c-5.053 0-8.998 4.16-9.594 10.115c-.002.018-.098.704-.098 1.666c0 .865.096 1.55.096 1.556c.635 6.06 4.85 10.125 10.49 10.125c3.275 0 5.952-.986 8.184-3.017c.593-.593 1.72-.96 2.908-.011a206.63 206.63 0 0 0 1.497 1.298l.195.167l-.173.189c-3.624 3.975-7.544 5.748-12.71 5.748c-8.812 0-15.458-6.946-15.458-16.153c0-9.211 6.39-16.155 14.862-16.155c7.734 0 13.426 5.241 14.165 13.048c.124 1.669-.253 3.025-1.09 3.926c-.81.873-2.032 1.318-3.63 1.318c-2.72 0-9.282.01-14.934.099l-.252.003v-1.943c0-1.337.799-2.137 2.137-2.137h11.856v.002ZM24.468 1.931c.59 1.28 17.919 39.777 18.095 40.165l.157.351h-2.969c-.631 0-2.552 0-3.308-1.636c-.549-1.191-13.225-29.963-15.085-34.184l-9.06 20.313h13.41v2.238c0 1.457-1.057 2.435-2.633 2.435H10.286c-.482 1.064-3.462 7.616-4.01 8.802c-.77 1.43-1.667 2.034-3.01 2.034H0l.157-.353c.176-.39 17.7-39.374 18.093-40.259c.545-.984 1.422-1.539 2.414-1.539h1.193c1.342 0 1.999.412 2.608 1.629l.003.006v-.001Zm68.897 36.14c.28.209.614.629.614 1.443c0 1.095-.096 1.978-.1 2.017l-.015.133l-.12.06c-1.578.79-4.1 1.32-6.276 1.32c-5.673 0-8.798-3.126-8.798-8.8V.498h2.437c1.539 0 2.533.917 2.533 2.337v8.797h7.01c1.268 0 2.633.731 2.633 2.336v2.137h-9.642l.1 17.447c0 3.2 1.622 4.822 4.82 4.822c1.05 0 1.803-.185 2.917-.488c.738-.22 1.427-.154 1.887.188v-.002Z"
            />
          </svg>
        </div>
      </Link>

      <div onClick={toggleOpen}>
        <div className="bg-[#e53350] p-2 rounded-lg cursor-pointer">
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

      <div className="bg-[#e53350]  px-2  rounded-lg ">
        <div className="flex flex-col md:flex-row justify-center  items-center ">
          <div className="basis-1/2 md:flex gap-2">
            <div className="basis-1/3 flex md:flex-col flex-row items-center justify-center ">
              <Coins className=" text-white w-5 h-5" />
            </div>
            <div className="basis-2/3 ">
              <div className="text-xs flex gap-3 text-white">Tổng xu</div>
              <div className="text-md w-24 text-white"> {totalCoins} xu</div>
            </div>
          </div>
        </div>
      </div>

      <Link href="/">
        <Input
          width="300px"
          animated={false}
          clearable
          placeholder="Bạn muốn tìm kiếm gì ?"
        />
      </Link>

      <Link href="/spinlucky">
        <div className="rounded-lg p-2 hover:bg-[#e53350] ">
          <div className="flex flex-col md:flex-row justify-center  items-center ">
            <div className="basis-1/2 md:flex gap-2">
              <div className="basis-1/3 flex md:flex-col flex-row items-center justify-center ">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div className="basis-2/3">
                <div className="text-xs flex gap-4 text-white">Vòng quay</div>
                <div className="text-xs w-20 text-white">May Mắn</div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link href="/">
        <div className="rounded-lg p-2 hover:bg-[#e53350] ">
          <div className="flex flex-col md:flex-row justify-center  items-center ">
            <div className="basis-1/2 md:flex gap-2">
              <div className="basis-1/3 flex md:flex-col flex-row items-center justify-center ">
                <MapPin className=" text-white w-6 h-6" />
              </div>
              <div className="basis-2/3">
                <div className="text-xs flex gap-4 text-white">Cửa hàng</div>
                <div className="text-xs w-20 text-white">gần bạn</div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link href="/">
        <div className=" rounded-lg p-2 hover:bg-[#e53350] ">
          <div className="flex flex-col md:flex-row justify-center  items-center ">
            <div className="basis-1/2 md:flex gap-2">
              <div className="basis-1/3 flex md:flex-col flex-row items-center justify-center ">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="basis-2/3">
                <div className="text-xs flex gap-4 text-white">Tra cứu</div>
                <div className="text-xs w-14 text-white">đơn hàng</div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <button onClick={() => router.push("/cart")}>
        <div className=" rounded-lg p-2 hover:bg-[#e53350] ">
          <div className="flex flex-col md:flex-row justify-center  items-center relative">
            <div className="basis-1/2 md:flex gap-2">
              <div className="basis-1/3 flex md:flex-col flex-row items-center justify-center ">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div className="basis-2/3">
                <div className="text-xs flex gap-4 text-white">Giỏ</div>
                <div className="text-xs text-white">hàng</div>
              </div>
            </div>
          </div>
          <span className="w-4 h-4 absolute bg-white rounded-full top-[15px] right-[122px] bg-opacity-90">
            <p className="items-center text-sm ">{cart.items.length} </p>
          </span>
        </div>
      </button>

      <Link href="/">
        <div className="bg-[#e53350]  px-2 py-1  rounded-lg ">
          <div className="items-center justify-center text-white flex">
            <UserCircle2 />
          </div>
          <div className="text-white text-xs">Đăng nhập</div>
        </div>
      </Link>
    </>
  );
};

export default MainNav;
