import type { Metadata } from "next";
import { Outfit, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const notoSansTC = Noto_Sans_TC({ subsets: ["latin"], variable: "--font-noto" });

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={`${outfit.variable} ${notoSansTC.variable}`}>
      <body className="font-[family-name:var(--font-outfit),var(--font-noto),system-ui,sans-serif] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
