import { Category3 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories3`

const getCategories3 = async ():Promise<Category3[]> =>{
    const res = await fetch(URL)

    return res.json()
} 

export default getCategories3