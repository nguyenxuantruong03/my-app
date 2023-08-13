import { Category10 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categorieslaptop`

const getCategorieslaptop = async ():Promise<Category10[]> =>{
    const res = await fetch(URL)

    return res.json()
} 

export default getCategorieslaptop