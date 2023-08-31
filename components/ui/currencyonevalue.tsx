"use client"

import { useEffect, useState } from "react";

// Giống với libs trong utils admin có thể xem trong đó
export const formatter = new Intl.NumberFormat("de-DE",{
    style: 'currency',
    currency: 'VND'
  })

  interface CurrencyonevalueProps{
    value?: string | number |null;
  }

const Currencyonevalue:React.FC<CurrencyonevalueProps> = ({value}) => {
    const[isMounted,setIsMounted] =useState(false)

    useEffect(()=>{
        setIsMounted(true);
    },[])

    if(!isMounted){
        return null
    }

    return ( 
        <div className="flex space-x-4">
        <div className="font-bold text-red-500 ">
            {formatter.format(Number(value))}
        </div>
        </div>
     );
}

export default Currencyonevalue;