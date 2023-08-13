import { Product5 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product5`

const getProducts5 =async(id:string):Promise<Product5> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getProducts5;