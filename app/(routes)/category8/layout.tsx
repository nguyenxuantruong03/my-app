import { Nunito } from 'next/font/google';
import type { Metadata } from "next";
export const metadata: Metadata & { image: string } = {
  title: "Sơn", 
  description: "Vật liệu xây dựng Xuân Trường",
  image: '/images/Home.png',
};

const roboto = Nunito({ weight:"400" , subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}