"use client";
import SeeDetail from "@/components/modal/see-detail-model";
import SeeDetailSpecifications from "@/components/modal/see-detail-model-specification";
import SeeDetail1 from "@/components/modal/see-detail-model1";
import SeeDetail2 from "@/components/modal/see-detail-model2";
import SeeDetail3 from "@/components/modal/see-detail-model3";
import SeeDetail4 from "@/components/modal/see-detail-model4";
import { Product,Headphone, Ipad, Laptop, Mouse, Product1, Product10, Product11, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9, Tivi, Watch } from "@/types";
import { useEffect, useState } from "react";

interface ModalProviderProps {
  data: Product | Product1 | Product2 | Product3 | Product4 | Product5 |Product6 | Product7 | Product8 | Product9 | Product10 | Product11 | Ipad |Headphone | Laptop |Tivi |Watch |Mouse;
}



const ModalProviderProduct1: React.FC<ModalProviderProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SeeDetail />
      <SeeDetail1 />
      <SeeDetail2 />
      <SeeDetail3 />
      <SeeDetail4 />
      <SeeDetailSpecifications data={data} />
    </>
  );
};

export default ModalProviderProduct1;
