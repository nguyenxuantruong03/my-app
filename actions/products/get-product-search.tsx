import { Product5 } from "@/types";
import { Product } from "@/types";
import { Product8 } from "@/types";
import { Product2 } from "@/types";
import { Product9 } from "@/types";
import { Product6 } from "@/types";
import { Product10 } from "@/types";
import { Product11 } from "@/types";
import { Product4 } from "@/types";
import { Product1 } from "@/types";
import { Product7 } from "@/types";
import { Product3 } from "@/types";

const URLProduct = `${process.env.NEXT_PUBLIC_API_URL}/product`

export const getProductSearchAll =async():Promise<Product> =>{
    const res = await fetch(`${URLProduct}`)

    return res.json();
}


const URLProduct1 = `${process.env.NEXT_PUBLIC_API_URL}/product1`

export const getProductSearchAll1 =async():Promise<Product1> =>{
    const res = await fetch(`${URLProduct1}`)

    return res.json();
}


const URLProduct2 = `${process.env.NEXT_PUBLIC_API_URL}/product2`

export const getProductSearchAll2 =async():Promise<Product2> =>{
    const res = await fetch(`${URLProduct2}`)

    return res.json();
}


const URLProduct3 = `${process.env.NEXT_PUBLIC_API_URL}/product3`

export const getProductSearchAll3 =async():Promise<Product3> =>{
    const res = await fetch(`${URLProduct3}`)

    return res.json();
}


const URLProduct4 = `${process.env.NEXT_PUBLIC_API_URL}/product4`

export const getProductSearchAll4 =async():Promise<Product4> =>{
    const res = await fetch(`${URLProduct4}`)

    return res.json();
}

const URLProduct5 = `${process.env.NEXT_PUBLIC_API_URL}/product5`

export const getProductSearchAll5 =async():Promise<Product5> =>{
    const res = await fetch(`${URLProduct5}`)

    return res.json();
}


const URLProduct6 = `${process.env.NEXT_PUBLIC_API_URL}/product6`

export const getProductSearchAll6 =async():Promise<Product6> =>{
    const res = await fetch(`${URLProduct6}`)

    return res.json();
}

const URLProduct7 = `${process.env.NEXT_PUBLIC_API_URL}/product7`

export const getProductSearchAll7 =async():Promise<Product7> =>{
    const res = await fetch(`${URLProduct7}`)

    return res.json();
}


const URLProduct8 = `${process.env.NEXT_PUBLIC_API_URL}/product8`

export const getProductSearchAll8 =async():Promise<Product8> =>{
    const res = await fetch(`${URLProduct8}`)

    return res.json();
}


const URLProduct9 = `${process.env.NEXT_PUBLIC_API_URL}/product9`

export const getProductSearchAll9 =async():Promise<Product9> =>{
    const res = await fetch(`${URLProduct9}`)

    return res.json();
}


const URLProduct10 = `${process.env.NEXT_PUBLIC_API_URL}/product10`

export const getProductSearchAll10 =async():Promise<Product10> =>{
    const res = await fetch(`${URLProduct10}`)

    return res.json();
}



const URLProduct11 = `${process.env.NEXT_PUBLIC_API_URL}/product11`

export const getProductSearchAll11 =async():Promise<Product11> =>{
    const res = await fetch(`${URLProduct11}`)

    return res.json();
}

