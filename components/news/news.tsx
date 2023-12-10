import { getPostsMeta } from "@/lib/posts"
import ListItem from "./ListItem" 
import HeadingEffect from "../uis-home/HeadingEffect";

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
  const displayedPosts = shuffledPosts.slice(0, 5);
  const displayedPostsinfoproduct3 = shuffledPosts.slice(0, 3);
  const displayedPostsinfoproduct1 = shuffledPosts.slice(0, 1);


  return ( 
    <>
    <section className="mt-6 max-w-7xl mx-auto hidden lg:block pb-6">
    <HeadingEffect heading="Cập nhật tin tức mới nhất"/>
    <ul className=" gap-5 grid grid-cols-5">
    {displayedPosts.map(post => (
        <ListItem key={post.id} post={post} />
    ))}
    </ul>
    </section>
    <section className="mt-6 max-w-3xl mx-auto hidden md:block lg:hidden">
    <h2 className="text-4xl font-bold "> Tin tức</h2>
    <ul className=" gap-3 grid grid-cols-3">
    {displayedPostsinfoproduct3.map(post => (
        <ListItem key={post.id} post={post} />
    ))}
    </ul>
    </section>
    <section className="mt-6 max-w-3xl mx-auto md:hidden">
    <h2 className="text-4xl font-bold "> Tin tức</h2>
    <ul className="grid grid-cols-1">
    {displayedPostsinfoproduct1.map(post => (
        <ListItem key={post.id} post={post} />
    ))}
    </ul>
    </section>
    </>
  )
}
