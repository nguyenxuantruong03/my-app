import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'
import CustomImageMainPage from './CustomImage-mainpage'
type Props = {
    post: Meta 
}

export default function ListItem({post}: Props) {
    const {id,title,date,image } = post 
    const formattedDate = getFormattedDate(date)
  return (
    <div>
        <li className="mt-2 text-lg bg-gray-500 bg-opacity-10 rounded-md p-2">
            <Link className=" text-gray-900 hover:text-opacity-50 font-semibold" href={`/post/${id}`}>{title}
            <br />
            {image && <CustomImageMainPage src={image} alt={title} />}
            </Link>
            <p className="text-sm mt-1 font-semibold">{formattedDate}</p>
        </li>
    </div>
  )
}