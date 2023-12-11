"use client"
import { Nunito } from 'next/font/google';
import type { Metadata } from "next";
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { useEffect, useState } from 'react';
export const metadata: Metadata & { image: string } = {
  title: "Dây điện", 
  description: "Vật liệu xây dựng Xuân Trường",
  image: '/images/Home.png',
};

const roboto = Nunito({ weight:"400" , subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}