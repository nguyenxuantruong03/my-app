import { Product6 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product6`

const getProducts6 =async(id:string):Promise<Product6> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getProducts6;