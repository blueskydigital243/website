import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./satoshi.css";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProviders } from "./providers/providers";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aginatech",
  description: "Le Digital c'est nous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`dark:bg-black grainy overflow-x-hidden`}>
        <ThemeProviders>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProviders>
      </body>
    </html>
  );
}
