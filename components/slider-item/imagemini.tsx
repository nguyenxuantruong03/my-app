import { Billboardmini } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ImageMiniProps {
  data: Billboardmini;
}

const ImageMini: React.FC<ImageMiniProps> = ({ data }) => {
  const imageComponents = data?.imagebillboardmini?.slice(0, 3).map((image, index) => (
    <div key={index} className="h-[115px] rounded-md shadow-md">
      <Link href="/">
        <div className="overflow-hidden rounded-xl h-[115px]">
          <Image
            src={image.url}
            width="275"
            height="215"
            alt={`Image ${index}`}
            className="object-cover rounded-md"
          />
        </div>
      </Link>
    </div>
  ));

  return <>{imageComponents}</>;
};

export default ImageMini;
