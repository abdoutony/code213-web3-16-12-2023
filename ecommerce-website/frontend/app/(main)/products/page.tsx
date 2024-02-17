import ProductsPageContainer from '@/components/pages/products-page-container'
import React from 'react'
import axios from "axios"

async function getData(name:string | string[] | undefined){
    const res = await axios.get(`${process.env.API_URL}/products?name=${name}`)
    return res.data

}


export default async  function page({
    params,
    searchParams,
  }: {
    params: { name: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
  const name=searchParams?.name
  console.log(name)
  const data = await getData(name)
  
//   console.log(data)
  return  <>
   <ProductsPageContainer data={data} />
  </>
}
