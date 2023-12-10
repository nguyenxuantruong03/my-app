import dynamic from 'next/dynamic';
import { root } from "@/components/color/color";

const NewsPage = dynamic(() => import('@/components/news/news'), {
    ssr: false,
  })
const News = () => {
    return ( 
        <div className={`pt-5 ${root.bgwhite}`}>
      <NewsPage />
      </div>
     );
}
 
export default News;