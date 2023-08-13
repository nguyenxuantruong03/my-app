import { Product9 } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product9`

const getProducts9 =async(id:string):Promise<Product9> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getProducts9;