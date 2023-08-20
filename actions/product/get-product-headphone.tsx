import { Headphone } from "@/types";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/headphone`

interface Query{
    categoryheadphoneId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean
}

const getProductHeadphone= async (query: Query):Promise<Headphone[]> =>{
    const url = qs.stringifyUrl({
        url: URL,
        query:{
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryheadphoneId: query.categoryheadphoneId,
            isFeatured: query.isFeatured
        }
    })
    const res = await fetch(url)

    return res.json()
} 

export default getProductHeadphone