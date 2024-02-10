import type { Metadata } from "next";

import "../globals.css";
import NavBar from "@/components/global/nav-bar";
import NextAuthSessionProvider from "../providers/session-provider";
export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Ecommerce plateform",
};

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <NextAuthSessionProvider>
        <NavBar />
        {children}
    </NextAuthSessionProvider>
  );
}
