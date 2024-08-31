import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uppbeat Joel's way",
  description: "Uppbeat made by me, for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className="text-brand-main-text flex min-h-svh flex-col items-stretch antialiased dark:bg-dark-gray">
          <div className="container">
            <Header></Header>
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
