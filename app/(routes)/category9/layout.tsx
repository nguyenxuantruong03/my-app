import { getCategories9 } from "@/actions/categories/get-categories";
import { Nunito } from 'next/font/google';
import type { Metadata } from "next";

export async function generateMetadata() {
  const categories = await getCategories9();
  const category = categories.find((category) => category.name);

  if (!category) {
    return {
      title: "Vật liệu nhà tắm Not Found",
    };
  }
  return {
    title: "Vật liệu nhà tắm",
  };
}

export const metadata: Metadata & { image: string } = {
  title: "Loading...", 
  description: "Vật liệu xây dựng Xuân Trường",
  image: '/images/Home.png',
};

generateMetadata().then((result) => {
  metadata.title = result.title;
});
const roboto = Nunito({ weight:"400" , subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <title>{metadata.title as React.ReactNode}</title>
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}