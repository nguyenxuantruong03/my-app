import { Category2 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories2`

const getCategories2 = async ():Promise<Category2[]> =>{
    const res = await fetch(URL)

    return res.json()
} 

export default getCategories2