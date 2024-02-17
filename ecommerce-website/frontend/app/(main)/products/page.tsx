import ProductsPageContainer from '@/components/pages/products-page-container'
import React from 'react'
import axios from "axios"

async function getData(){
    const res = await axios.get("http://localhost:4000/api/products")
    return res.data

}


export default async  function page({
    params,
    searchParams,
  }: {
    params: { name: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
  const data = await getData()
  
//   console.log(data)
  return  <>
   <ProductsPageContainer data={data} />
  </>
}
