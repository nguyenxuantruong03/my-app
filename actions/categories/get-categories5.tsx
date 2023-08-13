import { Category5 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories5`

const getCategories5 = async ():Promise<Category5[]> =>{
    const res = await fetch(URL)

    return res.json()
} 

export default getCategories5