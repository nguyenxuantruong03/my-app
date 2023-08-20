"use client"
import SeeDetail from "@/components/modal/see-detail-model";
import SeeDetailSpecifications from "@/components/modal/see-detail-model-specificationlaptop";
import SeeDetail1 from "@/components/modal/see-detail-model1";
import SeeDetail2 from "@/components/modal/see-detail-model2";
import SeeDetail3 from "@/components/modal/see-detail-model3";
import SeeDetail4 from "@/components/modal/see-detail-model4";
import { Laptop, Watch } from "@/types";
import { useEffect, useState } from "react";

interface ModalProviderProps{
    data: Laptop
}

const ModalProviderProductWatch:React.FC<ModalProviderProps> = ({data}) => {
    const [isMounted,setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }

    return ( 
        <>
        <SeeDetail />
        <SeeDetail1 />
        <SeeDetail2 />
        <SeeDetail3 />
        <SeeDetail4 />
        <SeeDetailSpecifications data={data}/>
        </>
     );
}
 
export default ModalProviderProductWatch;