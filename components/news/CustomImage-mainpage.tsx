import Image from "next/image"

type Props = {
    src: string,
    alt: string,
    priority?: string,
}

export default function CustomImageMainPage({ src, alt, priority }: Props) {

    const prty = priority ? true : false
    return (

        <div className="w-full h-full my-2 ">
            <Image
                className="rounded-lg"
                src={src}
                alt={alt}
                width={350}
                height={350}
                priority={prty}
            />
        </div>
    )
}