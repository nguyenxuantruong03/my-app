import { Product3 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product3`

const getProducts3 =async(id:string):Promise<Product3> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getProducts3;