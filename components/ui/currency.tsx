"use client"

import { useEffect, useState } from "react";

// Giống với libs trong utils admin có thể xem trong đó
export const formatter = new Intl.NumberFormat("de-DE",{
    style: 'currency',
    currency: 'VND'
  })

  interface CurrencyProps{
    value?: string | number;
    valueold?: string | number;
  }

const Currency:React.FC<CurrencyProps> = ({value,valueold}) => {
    const[isMounted,setIsMounted] =useState(false)

    useEffect(()=>{
        setIsMounted(true);
    },[])

    if(!isMounted){
        return null
    }

    return ( 
        <div className="flex space-x-4">
        <div className="font-bold text-red-500 text-xs md:text-base">
            {formatter.format(Number(value))}
        </div>
        <div className="font-bold text-gray-500 line-through text-xs md:text-base">
            {formatter.format(Number(valueold))}
        </div>
        </div>
     );
}

export default Currency;