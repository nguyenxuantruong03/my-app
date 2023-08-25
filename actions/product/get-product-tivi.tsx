import { Tivi } from "@/types";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/tivi`

interface Query{
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean
}

const getProductTivi= async (query: Query):Promise<Tivi[]> =>{
    const url = qs.stringifyUrl({
        url: URL,
        query:{
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    })
    const res = await fetch(url)

    return res.json()
} 

export default getProductTivi