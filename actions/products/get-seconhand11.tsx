import { Product11 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product11`

const getProducts11 =async(id:string):Promise<Product11> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getProducts11;