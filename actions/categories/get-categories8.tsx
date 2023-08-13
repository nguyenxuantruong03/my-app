import { Category8 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories8`

const getCategories8 = async ():Promise<Category8[]> =>{
    const res = await fetch(URL)

    return res.json()
} 

export default getCategories8