import { Product10 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product10`

const getProducts10 =async(id:string):Promise<Product10> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getProducts10;