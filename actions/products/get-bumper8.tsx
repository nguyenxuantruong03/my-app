import { Product8 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product8`

const getProducts8 =async(id:string):Promise<Product8> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getProducts8;