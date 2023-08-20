import { Tivi } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/tivi`

const getTivi =async(id:string):Promise<Tivi> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getTivi;