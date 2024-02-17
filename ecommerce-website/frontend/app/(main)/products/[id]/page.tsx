import React from 'react'
import axios from "axios"

async function getData(id: string) {
    const res = await axios.get(`${process.env.API_URL}/products/${id}`)
    return res.data

}
export default async function page({
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    const id = params.id
    const data = await getData(id)
    console.log(data)
  return (
    <div className="product-details-container container py-12">
      <h1 className="text-3xl font-bold my-11">Product Details</h1>
      <img src={data?.data?.image} 
      alt={data?.data?.name}
      className='rounded-md mb-4 max-w-screen-sm'
      /> 
      <p className='text-2xl font-bold my-4'>{data?.data?.name}</p>
      <p className='text-sm font-bold my-4 text-gray-700'>{data?.data?.category.name}</p>
      
      
      <p>{data?.data?.description}</p>
      <p className='text-2xl font-bold my-4'>{data?.data?.price} $</p>
    </div>
  )
}
