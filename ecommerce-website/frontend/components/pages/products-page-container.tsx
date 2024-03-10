"use client"
import React,{useEffect,useState} from 'react'
import ProductCard from '../global/product-card'
import axios from "axios"
import useFetch from '@/lib/hooks/useFetch'
import { useSession } from 'next-auth/react'
import {  useSearchParams,  } from 'next/navigation'
type Props ={
    data:any 
}

export default function ProductsPageContainer() {
  const session = useSession()
  console.log(session.data?.user?.data)
  const [render,setRender] = useState("ddd")
  const searchParams = useSearchParams()
 
  const query = searchParams.get('query')
  console.log(query)
  const { data, isLoading, error ,refetch}  = useFetch(
    //  @ts-ignore
    `${process.env.NEXT_PUBLIC_API_URL}/products?query=${query ?query:"" }&userId=${session?.data?.user?.data?._id ? session?.data?.user?.data?._id : ""}`,
    `products-${session?.data?.user?.data?._id ? session?.data?.user?.data?._id : ""}`,
    
  );

 
  return (
    <div className='container my-24'>
      {/* {isLoading && <p>Loading...</p>} */}
      {error && <p>Error: {error.message}</p>}
     {!isLoading && !error && (
       <div className='flex flex-wrap'>

       {
           data?.data?.map((product:any)=>{
             return(
               <ProductCard key={product._id} refetch={refetch} product={product} setRender={setRender}/>
             )
           })
       }
     </div>
      )}

      {!isLoading && !error && data && data.data.length === 0 && (
        <p>No products found</p>
      )}


    </div>
  )
}
