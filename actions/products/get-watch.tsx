import { Watch } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/watch`

const getWatch=async(id:string):Promise<Watch> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getWatch