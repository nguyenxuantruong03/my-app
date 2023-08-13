import { Laptop } from "@/types";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/laptop`

interface Query{
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean
}

const getProduct10 = async (query: Query):Promise<Laptop[]> =>{
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

export default getProduct10