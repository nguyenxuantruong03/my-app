import { Billboardsale } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboardssale`

const getBillboardsale = async (id: string):Promise<Billboardsale> =>{
    const res = await fetch(`${URL}/${id}`)

    return res.json()
}

export default getBillboardsale