import './index.scss'
interface HeadingEffectProps{
    heading: string
}
const HeadingEffect:React.FC<HeadingEffectProps> = ({heading}) => {
    return ( 
        <>
        <div className="animate-charcter"> {heading}</div>
            <div className="flex items-center my-4 justify-center">
              <div className="border-t-2 border-solid border-gray-500 w-12" />
              <div className="border-t-2 border-solid border-orange-500 w-7 ml-1" />
            </div>
        </>
     );
}
 
export default HeadingEffect;