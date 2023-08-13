import { Category7 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories7`

const getCategories7 = async ():Promise<Category7[]> =>{
    const res = await fetch(URL)

    return res.json()
} 

export default getCategories7