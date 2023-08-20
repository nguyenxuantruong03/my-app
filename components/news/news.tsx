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
export default async function NewsPage() {
    const posts = await getPostsMeta()
    if (!posts) {
      return <p className="mt-10 text-center">Sorry, no posts available.</p>
  }
  const shuffledPosts = shuffleArray<Meta>(posts);
  const displayedPosts = shuffledPosts.slice(0, 4);



  return ( 
    <section className="mt-6 max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold "> News</h2>
    <ul className=" space-x-10 grid grid-cols-4">
    {displayedPosts.map(post => (
        <ListItem key={post.id} post={post} />
    ))}
    </ul>
    </section>
  )
}
