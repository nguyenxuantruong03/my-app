import Footer from "@/components/footer/footer";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import ScrollButton from "@/components/backtotop/backToTop";
import ToastProvider from "@/providers/toast-provider";
import { Nunito } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs'
import { viVN } from "@clerk/localizations";
import { Analytics } from '@vercel/analytics/react';
const roboto = Nunito({ weight:"400" , subsets: ["latin"] });

export const metadata: Metadata & { image: string } = {
  title: "VLXD Xuân Trường",
  description: "Vật liệu xây dựng Xuân Trường",
  image: '/images/Home.png',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={roboto.className}>
      <ClerkProvider localization={viVN}>
        <ToastProvider />
        <Navbar />
        {children}
        <Analytics />
        <ScrollButton />
        <Footer />
    </ClerkProvider>
      </body>
    </html>
  );
}
