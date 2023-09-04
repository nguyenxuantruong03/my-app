import { Ipad } from "@/types";
import { Product5 } from "@/types";
import { Product } from "@/types";
import { Product8 } from "@/types";
import { Headphone } from "@/types";
import { Product2 } from "@/types";
import { Laptop } from "@/types";
import { Mouse } from "@/types";
import { Product9 } from "@/types";
import { Product6 } from "@/types";
import { Product10 } from "@/types";
import { Product11 } from "@/types";
import { Product4 } from "@/types";
import { Product1 } from "@/types";
import { Tivi } from "@/types";
import { Product7 } from "@/types";
import { Watch } from "@/types";
import { Product3 } from "@/types";


const URLIpad = `${process.env.NEXT_PUBLIC_API_URL}/ipad`

export const getIpad =async(id:string):Promise<Ipad> =>{
    const res = await fetch(`${URLIpad}/${id}`)

    return res.json();
}


const URLLaptop = `${process.env.NEXT_PUBLIC_API_URL}/laptop`

export const getLaptop=async(id:string):Promise<Laptop> =>{
    const res = await fetch(`${URLLaptop}/${id}`)

    return res.json();
}

const URLHeadphone = `${process.env.NEXT_PUBLIC_API_URL}/headphone`

export const getHeadphone =async(id:string):Promise<Headphone> =>{
    const res = await fetch(`${URLHeadphone}/${id}`)

    return res.json();
}


const URLMouse = `${process.env.NEXT_PUBLIC_API_URL}/mouse`

export const getMouse =async(id:string):Promise<Mouse> =>{
    const res = await fetch(`${URLMouse}/${id}`)

    return res.json();
}


const URLTivi = `${process.env.NEXT_PUBLIC_API_URL}/tivi`

export const getTivi =async(id:string):Promise<Tivi> =>{
    const res = await fetch(`${URLTivi}/${id}`)

    return res.json();
}


const URLWatch = `${process.env.NEXT_PUBLIC_API_URL}/watch`

export const getWatch=async(id:string):Promise<Watch> =>{
    const res = await fetch(`${URLWatch}/${id}`)

    return res.json();
}


const URLProduct = `${process.env.NEXT_PUBLIC_API_URL}/product`

export const getProducts =async(id:string):Promise<Product> =>{
    const res = await fetch(`${URLProduct}/${id}`)

    return res.json();
}


const URLProduct1 = `${process.env.NEXT_PUBLIC_API_URL}/product1`

export const getProducts1 =async(id:string):Promise<Product1> =>{
    const res = await fetch(`${URLProduct1}/${id}`)

    return res.json();
}


const URLProduct2 = `${process.env.NEXT_PUBLIC_API_URL}/product2`

export const getProducts2 =async(id:string):Promise<Product2> =>{
    const res = await fetch(`${URLProduct2}/${id}`)

    return res.json();
}


const URLProduct3 = `${process.env.NEXT_PUBLIC_API_URL}/product3`

export const getProducts3 =async(id:string):Promise<Product3> =>{
    const res = await fetch(`${URLProduct3}/${id}`)

    return res.json();
}


const URLProduct4 = `${process.env.NEXT_PUBLIC_API_URL}/product4`

export const getProducts4 =async(id:string):Promise<Product4> =>{
    const res = await fetch(`${URLProduct4}/${id}`)

    return res.json();
}

const URLProduct5 = `${process.env.NEXT_PUBLIC_API_URL}/product5`

export const getProducts5 =async(id:string):Promise<Product5> =>{
    const res = await fetch(`${URLProduct5}/${id}`)

    return res.json();
}


const URLProduct6 = `${process.env.NEXT_PUBLIC_API_URL}/product6`

export const getProducts6 =async(id:string):Promise<Product6> =>{
    const res = await fetch(`${URLProduct6}/${id}`)

    return res.json();
}

const URLProduct7 = `${process.env.NEXT_PUBLIC_API_URL}/product7`

export const getProducts7 =async(id:string):Promise<Product7> =>{
    const res = await fetch(`${URLProduct7}/${id}`)

    return res.json();
}


const URLProduct8 = `${process.env.NEXT_PUBLIC_API_URL}/product8`

export const getProducts8 =async(id:string):Promise<Product8> =>{
    const res = await fetch(`${URLProduct8}/${id}`)

    return res.json();
}


const URLProduct9 = `${process.env.NEXT_PUBLIC_API_URL}/product9`

export const getProducts9 =async(id:string):Promise<Product9> =>{
    const res = await fetch(`${URLProduct9}/${id}`)

    return res.json();
}


const URLProduct10 = `${process.env.NEXT_PUBLIC_API_URL}/product10`

export const getProducts10 =async(id:string):Promise<Product10> =>{
    const res = await fetch(`${URLProduct10}/${id}`)

    return res.json();
}



const URLProduct11 = `${process.env.NEXT_PUBLIC_API_URL}/product11`

export const getProducts11 =async(id:string):Promise<Product11> =>{
    const res = await fetch(`${URLProduct11}/${id}`)

    return res.json();
}

