import { Category4 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories4`

const getCategories4 = async ():Promise<Category4[]> =>{
    const res = await fetch(URL)

    return res.json()
} 

export default getCategories4