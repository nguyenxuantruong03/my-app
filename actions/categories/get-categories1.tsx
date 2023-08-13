import { Category1 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories1`

const getCategories1 = async ():Promise<Category1[]> =>{
    const res = await fetch(URL)

    return res.json()
} 

export default getCategories1