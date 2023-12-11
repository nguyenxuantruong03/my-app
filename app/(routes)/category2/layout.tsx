import type { Metadata } from "next";
export const metadata: Metadata & { image: string } = {
  title: "Ống nhựa, ống lưới xanh", 
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