import { Ipad } from "@/types";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/ipad`

interface Query{
    categoryipadId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean
}

const getProductIpad= async (query: Query):Promise<Ipad[]> =>{
    const url = qs.stringifyUrl({
        url: URL,
        query:{
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryipadId: query.categoryipadId,
            isFeatured: query.isFeatured
        }
    })
    const res = await fetch(url)

    return res.json()
} 

export default getProductIpad