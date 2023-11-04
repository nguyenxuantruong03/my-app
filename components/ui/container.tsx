interface ContainerProps{
    children: React.ReactNode
}
const Container:React.FC<ContainerProps> = ({children}) => {
    return ( 
        <div className="mx-auto md:max-w-3xl lg:max-w-7xl ">
            {children}
        </div>
     );
}
 
export default Container;