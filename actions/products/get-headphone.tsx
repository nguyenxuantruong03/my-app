import { Headphone } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/headphone`

const getHeadphone =async(id:string):Promise<Headphone> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getHeadphone;