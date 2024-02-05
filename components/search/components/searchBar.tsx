"use client";
import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { Search, X } from "lucide-react";
import "../style.css";
import {
  getProductSearchAll,
  getProductSearchAll1,
  getProductSearchAll2,
  getProductSearchAll3,
  getProductSearchAll4,
  getProductSearchAll5,
  getProductSearchAll6,
  getProductSearchAll7,
  getProductSearchAll8,
  getProductSearchAll9,
  getProductSearchAll10,
  getProductSearchAll11,
} from "@/actions/products/get-product-search";
import { ProductUnion } from "@/hooks/use-cart";

interface SearchBarProps {
  setResults: React.Dispatch<React.SetStateAction<any[]>>;
  setLoading: (loading: boolean) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  setResults,
  setLoading,
}) => {
  const [input, setInput] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false); // Track input focus state
  const productFunctions = [
    getProductSearchAll,
    getProductSearchAll1,
    getProductSearchAll2,
    getProductSearchAll3,
    getProductSearchAll4,
    getProductSearchAll5,
    getProductSearchAll6,
    getProductSearchAll7,
    getProductSearchAll8,
    getProductSearchAll9,
    getProductSearchAll10,
    getProductSearchAll11,
  ];
  //Đánh giá tên nào gần đúng nhất thì đem lên đầu
  // Function to calculate the match score between a string and a search term
  const getMatchScore = (str: string, searchTerm: string) => {
    //tiếng Việt và làm cho tìm kiếm không phân biệt chữ hoa chữ thường, có thể sửa đổi chức năng để chuẩn hóa cả chuỗi đầu vào và cụm từ tìm kiếm trước khi thực hiện đối chiếu
    const lowerStr = str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const lowerSearchTerm = searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
    // Check if the string starts with the search term
    if (lowerStr.startsWith(lowerSearchTerm)) {
      return 3; // Higher score for exact match at the beginning
    } else if (lowerStr.includes(lowerSearchTerm)) {
      return 2; // Medium score for partial match
    } else if (lowerStr.includes(lowerSearchTerm.replace(/\s+/g, ""))) {
      return 1; // Lower score for partial match without spaces
    } else {
      return 0; // No match
    }
  };
  
  const debouncedFetchData = debounce((value: string) => {
    setLoading(true);

    const productNamesPromises = productFunctions.map((getProductFunc) =>
      getProductFunc()
    );

    Promise.all(productNamesPromises)
      .then((productNames) => {
        const results = productNames
          .flat()
          .map((product: ProductUnion) => ({
            product,
            matchScore: getMatchScore(product.heading, value),
          }))
          .filter(({ matchScore }) => matchScore > 0)
          .sort((a, b) => b.matchScore - a.matchScore)
          .map(({ product }) => ({
            heading: product.heading,
            imageUrl: product.images.length > 0 ? product.images[0].url : null,
            name: product.name,
            productType: product.productType,
          }))
          .slice(0, 5);

        setResults(results);
        setNoResults(results.length === 0 && clicked);
        setLoading(false);
        // Reset initialInputChangeRef.current after API call
      initialInputChangeRef.current = null;
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, 500);

  // initialInputChangeRef dùng để sau khi người dùng nhập xong sau 3 giay thì nó mới call data và nó sẽ lọt useEfffect có dependency nên chỉ  call API 1 lần
  // nếu  ko có useEffect thì cứ ghi 1 chữ thì nó call 1 chữ VD: chữ Quạt thì nó call từng chữ như vậy làm chậm hiệu năng
  const initialInputChangeRef = useRef<string | null>(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (initialInputChangeRef.current !== null) {
        // Only call debouncedFetchData if there was an initial input change
        debouncedFetchData(initialInputChangeRef.current);
      }
    }, 1500);
    return () => {
      clearTimeout(timerId);
    };
  }, [initialInputChangeRef.current]); // useEffect will be called whenever initialInputChangeRef.current changes

  const handleChange = (value: string) => {
    setInput(value);
    setClicked(false);
    if (value.trim() !== "") {
      setClicked(true);
      // Save the initial input change after 3 seconds
      initialInputChangeRef.current = value;
      // No need to call debouncedFetchData here
    } else {
      setNoResults(false);
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleClearInput = () => {
    setInput("");
    setNoResults(false);
    setResults([]); // Clear the results when the input is cleared
  };

  return (
    <>
      <div className="relative h-12 md:h-10 z-20 border-none rounded-2xl px-4 shadow-md bg-white flex items-center ">
        <Search className="text-red-500" />
        <input
          placeholder="Bạn cần tìm gì ?"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="bg-transparent border-none h-full text-lg w-full ml-5 focus:outline-none"
        />
        {input && (
          <div
            className="p-2 shadow-md rounded-full hover:scale-[1.1]"
            onClick={handleClearInput}
          >
            <X className="w-3 h-3" />
          </div>
        )}
        {noResults && (
          <p className=" p-4 flex items-center bg-white flex-col shadow-md rounded-lg mt-4 max-h-300 overflow-y-auto absolute top-14 font-semibold">
            Không tìm thấy kết quả
          </p>
        )}
      </div>
      {isInputFocused && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
      )}
    </>
  );
};
