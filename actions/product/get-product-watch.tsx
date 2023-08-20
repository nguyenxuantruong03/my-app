import { Watch } from "@/types";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/watch`

interface Query{
    categorywatchId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean
}

const getProductWatch= async (query: Query):Promise<Watch[]> =>{
    const url = qs.stringifyUrl({
        url: URL,
        query:{
            colorId: query.colorId,
            sizeId: query.sizeId,
            categorywatchId: query.categorywatchId,
            isFeatured: query.isFeatured
        }
    })
    const res = await fetch(url)

    return res.json()
} 

export default getProductWatch