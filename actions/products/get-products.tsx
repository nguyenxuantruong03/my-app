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

export const getProducts =async(name:string):Promise<Product> =>{
    const res = await fetch(`${URLProduct}/${name}`)

    return res.json();
}


const URLProduct1 = `${process.env.NEXT_PUBLIC_API_URL}/product1`

export const getProducts1 =async(name:string):Promise<Product1> =>{
    const res = await fetch(`${URLProduct1}/${name}`)

    return res.json();
}


const URLProduct2 = `${process.env.NEXT_PUBLIC_API_URL}/product2`

export const getProducts2 =async(name:string):Promise<Product2> =>{
    const res = await fetch(`${URLProduct2}/${name}`)

    return res.json();
}


const URLProduct3 = `${process.env.NEXT_PUBLIC_API_URL}/product3`

export const getProducts3 =async(name:string):Promise<Product3> =>{
    const res = await fetch(`${URLProduct3}/${name}`)

    return res.json();
}


const URLProduct4 = `${process.env.NEXT_PUBLIC_API_URL}/product4`

export const getProducts4 =async(name:string):Promise<Product4> =>{
    const res = await fetch(`${URLProduct4}/${name}`)

    return res.json();
}

const URLProduct5 = `${process.env.NEXT_PUBLIC_API_URL}/product5`

export const getProducts5 =async(name:string):Promise<Product5> =>{
    const res = await fetch(`${URLProduct5}/${name}`)

    return res.json();
}


const URLProduct6 = `${process.env.NEXT_PUBLIC_API_URL}/product6`

export const getProducts6 =async(name:string):Promise<Product6> =>{
    const res = await fetch(`${URLProduct6}/${name}`)

    return res.json();
}

const URLProduct7 = `${process.env.NEXT_PUBLIC_API_URL}/product7`

export const getProducts7 =async(name:string):Promise<Product7> =>{
    const res = await fetch(`${URLProduct7}/${name}`)

    return res.json();
}


const URLProduct8 = `${process.env.NEXT_PUBLIC_API_URL}/product8`

export const getProducts8 =async(name:string):Promise<Product8> =>{
    const res = await fetch(`${URLProduct8}/${name}`)

    return res.json();
}


const URLProduct9 = `${process.env.NEXT_PUBLIC_API_URL}/product9`

export const getProducts9 =async(name:string):Promise<Product9> =>{
    const res = await fetch(`${URLProduct9}/${name}`)

    return res.json();
}


const URLProduct10 = `${process.env.NEXT_PUBLIC_API_URL}/product10`

export const getProducts10 =async(name:string):Promise<Product10> =>{
    const res = await fetch(`${URLProduct10}/${name}`)

    return res.json();
}



const URLProduct11 = `${process.env.NEXT_PUBLIC_API_URL}/product11`

export const getProducts11 =async(name:string):Promise<Product11> =>{
    const res = await fetch(`${URLProduct11}/${name}`)

    return res.json();
}

