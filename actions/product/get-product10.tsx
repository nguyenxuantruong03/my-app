import { Product10 } from "@/types";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product10`

interface Query{
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean
}

const getProduct10 = async (query: Query):Promise<Product10[]> =>{
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