import { Product2 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product2`

const getProducts2 =async(id:string):Promise<Product2> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getProducts2;