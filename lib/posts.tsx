import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import { compileMDX } from "next-mdx-remote/rsc";
import  Video  from '@/components/news/Video';
import  CustomImage  from '@/components/news/CustomImage';

type Filetree = {
  tree: [
    {
      path: string;
    }
  ];
};

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/nguyenxuantruong03/MDX-BlogPost/master/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return;
  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
    image: string;
  }>({
    source: rawMDX,
    components:{
      Video,CustomImage,
    },
    options: {
        parseFrontmatter: true,
        mdxOptions: {
            rehypePlugins: [
                rehypeHighlight,
                rehypeSlug,
            ],
        },
    }
  });
  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
      image: frontmatter.image
    },
    content,
  };

  return blogPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  /* Making a GET request to the GitHub API to retrieve the file tree of the "BlogPost" repository,
  including all files and directories recursively. The response will be in JSON format and will
  contain information about each file, including its path. */
  const res = await fetch(
    "https://api.github.com/repos/nguyenxuantruong03/MDX-BlogPost/git/trees/master?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  if (!res.ok) return undefined;

  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  /* Mã này đang truy xuất siêu dữ liệu cho các bài đăng trên blog từ kho lưu trữ GitHub, 
 lọc ra bất kỳ tệp nào không kết thúc bằng phần mở rộng ".mdx", sau đó sắp xếp mảng siêu dữ 
 liệu kết quả theo thứ tự giảm dần dựa trên thuộc tính "ngày" của mỗi bài đăng. */
  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}