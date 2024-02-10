import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "./providers/session-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Ecommerce plateform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200`}>
        <NextAuthSessionProvider>
          {children}
        </NextAuthSessionProvider>
        </body>
    </html>
  );
}
