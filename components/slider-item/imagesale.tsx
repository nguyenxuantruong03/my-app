import { Billboardsale } from "@/types";

interface Imagesaleprops{
   data: Billboardsale
}
const ImageSale:React.FC<Imagesaleprops> = ({data}) => {
    return ( 
        <div className="h-[75px] rounded-xl my-4 mt-[4.5rem] xl:mt-[2.5rem]  md:mb-2">
           <div className="rounded-xl w-full h-[75px] overflow-hidden bg-cover"
            style={{backgroundImage: `url(${data?.imageUrl})`}}>
            </div>
        </div>
     );
}
 
export default ImageSale;