import Footer from "@/components/footer/footer";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import ScrollButton from "@/components/backtotop/backToTop";
import ToastProvider from "@/providers/toast-provider";
import { Nunito } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs'
import { viVN } from "@clerk/localizations";
const roboto = Nunito({ weight:"400" , subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VLXD Xuân Trường",
  description: "Chào mừng đến VLXD Xuân Trường",
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
        <ScrollButton />
        <Footer />
    </ClerkProvider>
      </body>
    </html>
  );
}
