import type { Metadata } from "next";
export const metadata: Metadata & { image: string } = {
  title: "Đồ dùng thông thường", 
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