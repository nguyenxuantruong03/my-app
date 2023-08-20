import { Category11 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories11`

const getCategories11 = async ():Promise<Category11[]> =>{
    const res = await fetch(URL)

    return res.json()
} 

export default getCategories11