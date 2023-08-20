type Props = {
    id: string
}

export default function Video({ id }: Props) {
    return (
        <div className="m-5">
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-[70rem] h-[600px] mx-auto rounded-md"
            />
        </div>
    );
}