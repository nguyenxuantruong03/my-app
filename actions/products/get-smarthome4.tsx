import { Product4 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product4`

const getProducts4 =async(id:string):Promise<Product4> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getProducts4;