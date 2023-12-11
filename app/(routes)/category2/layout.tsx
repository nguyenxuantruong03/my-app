import {getCategories2 } from "@/actions/categories/get-categories";
import { Nunito } from 'next/font/google';
import type { GetStaticProps, NextPage } from "next";
import { ReactNode } from "react";

const roboto = Nunito({ weight: "400", subsets: ["latin"] });

interface PageProps {
  title: string;
  children?: ReactNode;
}

const RootLayout: NextPage<PageProps> = ({ title, children }) => (
  <html lang="en">
    <head>
      <title>{title}</title>
    </head>
    <body className={roboto.className}>
      {children}
    </body>
  </html>
);

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const categories = await getCategories2();
  const category = categories.find((category) => category.name);

  if (!category) {
    return {
      props: {
        title: "Ống nhựa, ống lưới xanh Not Found",
      },
    };
  }

  return {
    props: {
      title: "Ống nhựa, ống lưới xanh",
    },
  };
};

export default RootLayout;
