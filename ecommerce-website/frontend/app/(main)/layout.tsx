'use client';
import type { Metadata } from "next";

import "../globals.css";
import NavBar from "@/components/global/nav-bar";
import NextAuthSessionProvider from "../providers/session-provider";
import ReactQueryProvider from "@/lib/providers/rq-client-provider";


export default function layout({children}: {children: React.ReactNode}) {
  return (
    <NextAuthSessionProvider>
        <ReactQueryProvider>
        <NavBar />
        {children}
        </ReactQueryProvider>
    </NextAuthSessionProvider>
  );
}
