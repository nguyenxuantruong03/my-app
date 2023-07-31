import { Product } from "@/types";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product`

interface Query{
    categoryId?: string;
    colorId?: string;
    sizeId: string;
    salientfeaturesId: string;
    specificationsId: string;
    isFeatured: boolean
}

const getProducts= async (query: Query):Promise<Product[]> =>{
    const url = qs.stringifyUrl({
        url: URL,
        query:{
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            salientfeaturesId: query.salientfeaturesId,
            specificationsId: query.specificationsId,
            isFeatured: query.isFeatured
        }
    })
    const res = await fetch(url)

    return res.json()
} 

export default getProducts