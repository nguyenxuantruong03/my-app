import { Product7 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product7`

const getProducts7 =async(id:string):Promise<Product7> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getProducts7;