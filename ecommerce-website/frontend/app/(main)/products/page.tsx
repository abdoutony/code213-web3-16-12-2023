import ProductsPageContainer from '@/components/pages/products-page-container'
import React from 'react'
import axios from "axios"

async function getData(query:string | string[] | undefined,category:string | string[] | undefined) {
    const res = await fetch(`${process.env.API_URL}/products?query=${query ?query:"" }&category=${category ?category:"" }`,
    { cache: 'no-store' })
    const data = await res.json()
    return data

}


export default async  function page({

    searchParams,
  }: {
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
  const {query,category}=searchParams || {}
  console.log(query)
  const data = await getData(query,category)
  console.log(data)
//   console.log(data)
  return  <>
   <ProductsPageContainer data={data} />
  </>
}
