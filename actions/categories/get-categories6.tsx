import { Category6 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories6`

const getCategories6 = async ():Promise<Category6[]> =>{
    const res = await fetch(URL)

    return res.json()
} 

export default getCategories6