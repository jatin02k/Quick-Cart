import type { Metadata } from "next";
import { Nunito, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getCanonicalUrl } from '@/utils';

const inter = Nunito({ subsets: ['latin'] });
const cuteFont = Josefin_Sans({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "Quick Cart",
  description: "Discover the power of simplicity with Quick Cart – the ultimate solution for effortless selling products. Unlock convenience and boost your sales.",
  alternates: {
    canonical: getCanonicalUrl(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header font={cuteFont.className}  />
        <hr className="h-0.5 bg-gray-100 border-0"></hr> 
        <div className="bg-amber-50">{children}</div>
        <Footer font={cuteFont.className}  />
      </body>
    </html>
  );
}
