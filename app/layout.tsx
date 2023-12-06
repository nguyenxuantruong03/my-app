import dynamic from 'next/dynamic'
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs'
const ToastProvider = dynamic(() => import('@/providers/toast-provider'), {
  ssr: false,
})
const Navbar = dynamic(() => import('@/components/navbar/navbar'), {
  ssr: false,
})
const ScrollButton = dynamic(() => import('@/components/backtotop/backToTop'), {
  ssr: false,
})
const Footer = dynamic(() => import('@/components/footer/footer'), {
  ssr: false,
})
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
