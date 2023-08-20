import { Category10 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories10`

const getCategories10 = async ():Promise<Category10[]> =>{
    const res = await fetch(URL)

    return res.json()
} 

export default getCategories10