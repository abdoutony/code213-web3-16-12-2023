"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "./providers/session-provider";
import ReactQueryProvider from "@/lib/providers/rq-client-provider";

const inter = Inter({ subsets: ["latin"] });




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200`}>
        <NextAuthSessionProvider>
          <ReactQueryProvider>
          {children}
          </ReactQueryProvider>
        </NextAuthSessionProvider>
        </body>
    </html>
  );
}
