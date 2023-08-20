import { Mouse } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/mouse`

const getMouse =async(id:string):Promise<Mouse> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getMouse;