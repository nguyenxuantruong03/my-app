"use client"
import "./index.scss";
import HeadingDescription from "./Head-Deas";
import Button from "../ui/button";
import { ArrowRight } from 'lucide-react';
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  url: string;
};

const Video: React.FC<Props> = ({url}) => {
    const router = useRouter()
    const handleClickProduct = () =>{
        router.push("/home-product")
    }
  return (
    <div className="parallax">
      <video loop muted autoPlay>
        <source src={url} type="video/mp4" />
      </video>
      <div className="content-slider">
        <HeadingDescription
          fontSizeheading="35px"
          fontSizedescription="28px"
          heading="Cửa hàng vật liệu xây dựng"
          description="Trường Đạt"
          colordes="#fff"
          color="#fff"
          fontweightdes={900}
        />
        <div className="video-button" onClick={handleClickProduct}>
        <Button className="video-button-text"> Xem sản phẩm <ArrowRight className="video-button-icon"/> </Button>
        </div>
        <Link href="#cuahangtruongdat">
        <svg className="arrows">
                <path className="a1" d="M0 0 L15 16 L30 0"></path>
                <path className="a2" d="M0 10 L15 26 L30 10"></path>
                <path className="a3" d="M0 20 L15 36 L30 20"></path>
            </svg>
        </Link>
    </div>
    </div>
  );
};

export default Video