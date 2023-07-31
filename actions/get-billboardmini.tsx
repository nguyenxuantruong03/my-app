import { Billboardmini } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboardsmini`

const getBillboardmini = async (id: string):Promise<Billboardmini> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json()
}

export default getBillboardmini