import { Ipad } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/ipad`

const getIpad =async(id:string):Promise<Ipad> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getIpad;