import { Laptop } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/laptop`

const getLaptop=async(id:string):Promise<Laptop> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getLaptop