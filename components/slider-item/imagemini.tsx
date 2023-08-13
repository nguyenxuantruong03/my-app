import { Billboardmini } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ImageMiniProps{
  data: Billboardmini
}

const ImageMini:React.FC<ImageMiniProps> = ({data}) => {
  return (
    <>
    <div className="h-[115px] rounded-md shadow-md ">
    <Link href="/">
    <div className=" overflow-hidden rounded-xl h-[115px]">
      <Image 
             src={data?.imagebillboardmini?.[0].url}
             width="275"
             height="215"
             alt="Image"
             className="object-cover rounded-md"
            />
             </div>
    </Link>
    </div>

    <div className="h-[115px] rounded-md shadow-md">
    <Link href="/">
    <div className=" overflow-hidden rounded-xl h-[115px] ">
      <Image 
             src={data?.imagebillboardmini?.[1].url}
             width="275"
             height="215"
             alt="Image"
             className="object-cover rounded-md"
            />
             </div>
    </Link>
    </div>

    <div className=" rounded-md shadow-md ">
    <Link href="/">
    <div className=" overflow-hidden rounded-xl h-[115px] ">
      <Image 
             src={data?.imagebillboardmini?.[2].url}
             width="275"
             height="215"
             alt="Image"
             className="object-cover rounded-md"
            />
             </div>
    </Link>
    </div>
    </>
  );
};

export default ImageMini;
