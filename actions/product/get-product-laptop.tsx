import { Laptop } from "@/types";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/laptop`

interface Query{
    categorylaptopId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean
}

const getProductLaptop= async (query: Query):Promise<Laptop[]> =>{
    const url = qs.stringifyUrl({
        url: URL,
        query:{
            colorId: query.colorId,
            sizeId: query.sizeId,
            categorylaptopId: query.categorylaptopId,
            isFeatured: query.isFeatured
        }
    })
    const res = await fetch(url)

    return res.json()
} 

export default getProductLaptop