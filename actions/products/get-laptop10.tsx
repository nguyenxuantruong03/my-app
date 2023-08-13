import { Laptop } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/laptop`

const getProducts10 =async(id:string):Promise<Laptop> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getProducts10;