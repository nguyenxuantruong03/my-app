"use client";
import {
  getProducts,
  getProducts1,
  getProducts10,
  getProducts11,
  getProducts2,
  getProducts3,
  getProducts4,
  getProducts5,
  getProducts6,
  getProducts7,
  getProducts8,
  getProducts9,
} from "@/actions/products/get-products";
import {
  Product,
  Product1,
  Product10,
  Product11,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
  Product9,
} from "@/types";
import { Input } from "@nextui-org/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

const SearchPage = () => {
  const router = useRouter();
  const productFunctions = [
    getProducts,
    getProducts1,
    getProducts2,
    getProducts3,
    getProducts4,
    getProducts5,
    getProducts6,
    getProducts7,
    getProducts8,
    getProducts9,
    getProducts10,
    getProducts11,
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProductNames, setFilteredProductNames] = useState<string[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  // Debounce the API call
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const extractProductNames = (
    products: (
      | Product
      | Product1
      | Product2
      | Product3
      | Product4
      | Product5
      | Product6
      | Product7
      | Product8
      | Product9
      | Product10
      | Product11
    )[]
  ) => {
    return products
      .filter((product) => product && (product.name))
      .map((product) => product.name);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue); // Convert to lowercase for case-insensitive search and 
  };

  const productContainerRef = useRef<HTMLDivElement | null>(null); // Adjusted type for the ref
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        productContainerRef.current &&
        !productContainerRef.current.contains(event.target as Node) // Explicit type assertion for event.target
      ) {
        // Clicked outside the product container, so hide the content
        setFilteredProductNames([]);
      }
    };
    // Attach event listener when component mounts
    document.addEventListener("click", handleOutsideClick);
    // Clean up the event listener when component is unmounted
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);

      const productNamesPromises = productFunctions.map((getProductFunc) =>
        getProductFunc(debouncedSearchTerm)
      );
      Promise.all(productNamesPromises)
      .then((productNames) => {
        const allProductNames = extractProductNames(productNames);
    
        const filteredProductNames = allProductNames.filter((productName) =>
         productName.includes(debouncedSearchTerm)
              );
    
        setFilteredProductNames(filteredProductNames);
        // Handle routing based on index
        productNames.forEach((product, index) => {
          const productName = product && product.name; 
          if (productName && filteredProductNames.includes(productName)) {
            // Adjust index since getProducts is at index 0
            const productIndex = index - 1;
            if (productIndex >= -1 && productIndex <= 11) {
              const productRoute = `/product${productIndex + 1}/${productName}`;
              router.push(productRoute);
            }
          }
        });
    
        if (filteredProductNames.length === 0) {
          toast.error(`Không tìm thấy ${debouncedSearchTerm}`);
        }
      })
      .finally(() => setLoading(false))
    } else {
      setFilteredProductNames([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <>
     <div className="w-full flex flex-col gap-2 max-w-[200px] md:max-w-[300px]">
      <Input
        animated={false}
        clearable
        placeholder="Nhập tên đường dẫn VD:pincono."
        value={searchTerm}
        onChange={handleInputChange}
      />
      </div>
      {filteredProductNames.length > 0 && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
      )}

      <div
        ref={productContainerRef}
        className="bg-white shadow-xl absolute top-[4.5rem] w-[352px] left-[1rem] md:left-[4rem] lg:left-[20rem] md:w-[500px] rounded-md z-40"
      >
        {loading && (
          <svg
            className="pll m-auto"
            width="60"
            height="60"
            viewBox="0 0 240 240"
          >
            <circle
              className="pl__ring pl__ring--a"
              cx="120"
              cy="120"
              r="105"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 660"
              stroke-dashoffset="-330"
              stroke-linecap="round"
            ></circle>
            <circle
              className="pl__ring pl__ring--b"
              cx="120"
              cy="120"
              r="35"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 220"
              stroke-dashoffset="-110"
              stroke-linecap="round"
            ></circle>
            <circle
              className="pl__ring pl__ring--c"
              cx="85"
              cy="120"
              r="70"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 440"
              stroke-linecap="round"
            ></circle>
            <circle
              className="pl__ring pl__ring--d"
              cx="155"
              cy="120"
              r="70"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 440"
              stroke-linecap="round"
            ></circle>
          </svg>
        )}

        <ul>
          {filteredProductNames.map((productName, index) => (
            <div className="p-2" key={index}>
              <li
                className="text-base text-red-500 py-1 header__cart-list"
                key={index}
              >
                      {productName}
              </li>
              <div className="border-t-2 border-gray-200 my-2 " />
              <div className="my-2 text-base text-gray-500 text-opacity-90">
                Sản phẩm nổi bật
              </div>
              <div className="grid grid-cols-2 ">
                <div className="my-1">
                  <Link href="https://vlxdxuantruong.vercel.app/category2/e9762cb1-1077-43ef-97e9-44d0d20dec83" className="flex items-center my-2">
                    <div className="my-1">Ống nhựa</div>
                  <Image
                  src="/images-product/ongnhuapvc.png"
                  alt="404"
                  width="35"
                  height="35"
                  className="ml-20"
                  />
                  </Link>

                  <Link href="https://vlxdxuantruong.vercel.app/category10/4bf607bb-79d9-4b51-bde2-320c285573e0" className="flex items-center my-2">
                    <div className="my-1">Bóng đèn</div>
                  <Image
                  src="/images-product/bongdienquang.png"
                  alt="404"
                  width="35"
                  height="35"
                  className="ml-20"
                  />
                  </Link>

                  <Link href="https://vlxdxuantruong.vercel.app/category1/52d11611-ccd2-4326-bf7f-bd224ebef89d" className="flex items-center my-2">
                    <div className="my-1">Quạt</div>
                   <Image
                  src="/images-product/quatbansenko.png"
                  alt="404"
                  width="35"
                  height="35"
                  className="ml-28"
                  />
                  </Link>
                </div>

                <div className="my-2">
                  <div className="border-l-2 border-gray-200 my-1">
                  <Link href="https://vlxdxuantruong.vercel.app/product7/o-cam-cay-thong" className="flex items-center">
                      <div className="mx-2">Ổ cắm cây thông</div>
                    <Image
                  src="/images-product/ocamcaythong.png"
                  alt="404"
                  width="35"
                  height="35"
                  className="ml-7"
                  />
                  </Link>
                  </div>

                  <div className="border-l-2 border-gray-200 my-1">
                  <Link href="https://vlxdxuantruong.vercel.app/category/8bcd192e-d45b-49e6-a73e-444a17c09a50" className="flex items-center">
                      <div className="mx-2">Pin</div>
                    <Image
                  src="/images-product/pincono.png"
                  alt="404"
                  width="35"
                  height="35"
                  className="ml-32"
                  />
                  </Link>
                  </div>

                  <div className="border-l-2 border-gray-200 my-1">
                  <Link href="https://vlxdxuantruong.vercel.app/category8/595f6934-f5d2-49e0-84f0-71c1e6eba2f9" className="flex items-center">
                      <div className="mx-2">Sơn</div>
                    <Image
                  src="/images-product/sonexpo.png"
                  alt="404"
                  width="35"
                  height="35"
                  className="ml-[7.6rem]"
                  />
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

// Debounce hook
function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default SearchPage;
