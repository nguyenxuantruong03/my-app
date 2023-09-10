import { getPostsMeta } from "@/lib/posts"
import ListItem from "./ListItem" 

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
export default async function NewsPageProduct() {
    const posts = await getPostsMeta()
    if (!posts) {
      return <p className="mt-10 text-center">Sorry, no posts available.</p>
  }
  const shuffledPosts = shuffleArray<Meta>(posts);
  const displayedPosts = shuffledPosts.slice(0, 7);



  return ( 
    <section className="mt-2 mx-auto">
    <ul className=" space-y-3 ">
    {displayedPosts.map(post => (
        <ListItem key={post.id} post={post} />
    ))}
    </ul>
    </section>
  )
}
