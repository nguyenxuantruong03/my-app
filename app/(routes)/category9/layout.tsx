import type { Metadata } from "next";
export const metadata: Metadata & { image: string } = {
  title: "Vật liệu nhà tắm", 
  description: "Vật liệu xây dựng Xuân Trường",
  image: '/images/Home.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}