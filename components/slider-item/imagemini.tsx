import { Billboardmini } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ImageMiniProps {
  data: Billboardmini;
}

const ImageMini: React.FC<ImageMiniProps> = ({ data }) => {
  const imageComponents = data?.imagebillboardmini?.slice(0, 3).map((image, index) => (
    <div key={index} className="rounded-md shadow-md overflow-hidden h-[125px]">
      <Link href="https://vlxdxuantruong.vercel.app/category1/52d11611-ccd2-4326-bf7f-bd224ebef89d">
          <Image
            src={image.url}
            width="285"
            height="115"
            alt={`Image ${index}`}
            className="object-cover rounded-md h-[125px]"
          />
      </Link>
    </div>
  ));

  return <>{imageComponents}</>;
};

export default ImageMini;
