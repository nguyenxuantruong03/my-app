import { Category9 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories9`

const getCategories9 = async ():Promise<Category9[]> =>{
    const res = await fetch(URL)

    return res.json()
} 

export default getCategories9