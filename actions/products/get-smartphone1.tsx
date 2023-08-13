import { Product1 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product1`

const getProducts1 =async(id:string):Promise<Product1> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getProducts1;