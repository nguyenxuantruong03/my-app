import "../style.css";
import { useEffect, useRef, useState } from "react";
import SearchRecomment from "./search-recomment";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface SearchResult {
  heading: string;
  imageUrl?: string | null;
  name: string
  productType: any;
}

interface SearchResultsListProps {
  results: SearchResult[];
  loading: boolean;

}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({
  results,
  loading,
}) => {
  // Tất cả code dưới dùng để khi bấm ra màn hình thì cả return bên dưới tắt đi
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const resultsListRef = useRef<HTMLDivElement>(null);
  const router = useRouter()
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsListRef.current &&
        !resultsListRef.current.contains(event.target as Node)
      ) {
        setIsResultsVisible(false);
      }
    };

    const handleResultItemClick = () => {
      setIsResultsVisible(true);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("click", handleResultItemClick);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("click", handleResultItemClick);
    };
  }, [resultsListRef]);

  const getRouteBasedOnProductType = (productType: any) => {
    switch (productType.toLowerCase()) {
      case "ongnhua":
        return "ongnhua";
      case "quat":
        return "quat";
      case "bongden":
        return "bongden";
      case "daydien":
        return "daydien";
      case "ocam":
        return "ocam";
      case "son":
        return "son";
      case "product":
        return "product0";
      case "product1":
        return "product1";
      case "product2":
        return "product2";
      case "product3":
        return "product3";
      case "product4":
        return "product4";
      case "product5":
        return "product5";
      case "product6":
        return "product6";
      case "product7":
        return "product7";
      case "product8":
        return "product8";
      case "product9":
        return "product9";
      case "product10":
        return "product10";
      case "product11":
        return "product11";
      default:
        return ""; 
    }
  };

  return (
    <div
      className={`absolute top-20 z-10 bg-white shadow-md rounded-lg overflow-y-auto w-[70%] md:w-[52%] lg:w-1/3 ${
        isResultsVisible ? "visible" : "hidden"
      }`}
    >
      {loading ? (
        <div className="flex items-center justify-center p-4">
          <svg className="pll" width="60" height="60" viewBox="0 0 240 240">
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
        </div>
      ) : (
        <>
          {results.length > 0 && (
            <div ref={resultsListRef}>
              <>
                {results.map((result, id) => (
                  <div
                    key={id}
                    className="text-sm md:text-base p-4 hover:bg-gray-200 cursor-pointer">
                    <div className="flex items-center justify-between"
                    onClick={() => {
                      const route = getRouteBasedOnProductType(result.productType);
                
                      if (route) {
                        const href = `/${route}/${result.name}`;
                        router.push(href);
                      } else {
                        console.error('Invalid route:', route);
                      }
                    }}
                    >
                      <div>{result.heading}</div>
                      {result.imageUrl && (
                        <Image
                          src={result.imageUrl ?? "error"}
                          alt="Product Image"
                          width={50}
                          height={50}
                          className="rounded-md"
                        />
                      )}
                    </div>
                  </div>
                ))}
                <div className="px-2 hidden md:block">
                  <SearchRecomment />
                </div>
              </>
            </div>
          )}
        </>
      )}
    </div>
  );
};
