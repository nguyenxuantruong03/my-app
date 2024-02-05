import Image from "next/image";
import "./index.scss"
import { root } from "@/components/color/color";

const Sponsor = () => {
  return (
    <div className={` ${root.bgwhite}`}>
      <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <Image
            src="/images/dienquang-logo.png"
            alt=""
            height="10"
            width="120"
          />
        </div>
        <div className="slide">
          <Image
            src="/images/bachtuyet-logo.jpg"
            alt=""
            height="10"
            width="120"
          />
        </div>
        <div className="slide">
          <Image
            src="/images/binhminh-logo.png"
            alt=""
            height="10"
            width="120"
          />
        </div>
        <div className="slide">
          <Image
            src="/images/cadivi-logo.png"
            alt=""
            height="10"
            width="120"
          />
        </div>
        <div className="slide">
          <Image
            src="/images/daphaco-logo.png"
            alt=""
            height="10"
            width="120"
          />
        </div>

        <div className="slide">
          <Image
            src="/images/sino-logo.webp"
            alt=""
            height="10"
            width="120"
          />
        </div>
        <div className="slide">
          <Image
            src="/images/kimtin-logo.jpg"
            alt=""
            height="10"
            width="120"
          />
        </div>
        <div className="slide">
          <Image
            src="/images/panasonic-logo.jpg"
            alt=""
            height="10"
            width="120"
          />
        </div>
        <div className="slide">
          <Image
            src="/images/rangdong-logo.jpg"
            alt=""
            height="10"
            width="120"
          />
        </div>
        <div className="slide">
          <Image
            src="/images/senko-logo.png"
            alt=""
            height="10"
            width="120"
          />
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Sponsor;
