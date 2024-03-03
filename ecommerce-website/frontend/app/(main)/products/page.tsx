import ProductsPageContainer from '@/components/pages/products-page-container'
import React from 'react'
import axios from "axios"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
// async function getData(query:string | string[] | undefined,category:string | string[] | undefined,session:any) {
//     const res = await fetch(`${process.env.API_URL}/products?query=${query ?query:"" }&category=${category ?category:"" }&userId=${session?.user?.data?._id ? session?.user?.data?._id : ""}`,
//     { cache: 'no-store' })
//     const data = await res.json()
//     return data

// }


export default async  function page({

    searchParams,
  }: {
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {

  // const session = await getServerSession(authOptions)
  // console.log(session)
  // const {query,category}=searchParams || {}
  // console.log(query)
  // const data = await getData(query,category,session)
  // console.log(data)
//   console.log(data)
  return  <>
   <ProductsPageContainer/>
  </>
}
