import { Category } from "@/types";
import { Category1 } from "@/types";
import { Category2 } from "@/types";
import { Category3 } from "@/types";
import { Category4 } from "@/types";
import { Category5 } from "@/types";
import { Category6 } from "@/types";
import { Category7 } from "@/types";
import { Category8 } from "@/types";
import { Category9 } from "@/types";
import { Category10 } from "@/types";
import { Category11 } from "@/types";

const URLCategories = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export const getCategories= async ():Promise<Category[]> =>{
    const res = await fetch(URLCategories)

    return res.json()
} 



const URLCategories1 = `${process.env.NEXT_PUBLIC_API_URL}/categories1`

export const getCategories1 = async ():Promise<Category1[]> =>{
    const res = await fetch(URLCategories1)

    return res.json()
} 


const URLCategories2 = `${process.env.NEXT_PUBLIC_API_URL}/categories2`

export const getCategories2 = async ():Promise<Category2[]> =>{
    const res = await fetch(URLCategories2)

    return res.json()
} 



const URLCategories3 = `${process.env.NEXT_PUBLIC_API_URL}/categories3`

export const getCategories3 = async ():Promise<Category3[]> =>{
    const res = await fetch(URLCategories3)

    return res.json()
} 



const URLCategories4 = `${process.env.NEXT_PUBLIC_API_URL}/categories4`

export const getCategories4 = async ():Promise<Category4[]> =>{
    const res = await fetch(URLCategories4)

    return res.json()
} 



const URLCategories5 = `${process.env.NEXT_PUBLIC_API_URL}/categories5`

export const getCategories5 = async ():Promise<Category5[]> =>{
    const res = await fetch(URLCategories5)

    return res.json()
} 


const URLCategories6 = `${process.env.NEXT_PUBLIC_API_URL}/categories6`

export const getCategories6 = async ():Promise<Category6[]> =>{
    const res = await fetch(URLCategories6)

    return res.json()
} 


const URLCategories7 = `${process.env.NEXT_PUBLIC_API_URL}/categories7`

export const getCategories7 = async ():Promise<Category7[]> =>{
    const res = await fetch(URLCategories7)

    return res.json()
} 


const URLCategories8 = `${process.env.NEXT_PUBLIC_API_URL}/categories8`

export const getCategories8 = async ():Promise<Category8[]> =>{
    const res = await fetch(URLCategories8)

    return res.json()
} 


const URLCategories9 = `${process.env.NEXT_PUBLIC_API_URL}/categories9`

export const getCategories9 = async ():Promise<Category9[]> =>{
    const res = await fetch(URLCategories9)

    return res.json()
} 


const URLCategories10 = `${process.env.NEXT_PUBLIC_API_URL}/categories10`

export const getCategories10 = async ():Promise<Category10[]> =>{
    const res = await fetch(URLCategories10)

    return res.json()
} 


const URLCategories11 = `${process.env.NEXT_PUBLIC_API_URL}/categories11`

export const getCategories11 = async ():Promise<Category11[]> =>{
    const res = await fetch(URLCategories11)

    return res.json()
} 
