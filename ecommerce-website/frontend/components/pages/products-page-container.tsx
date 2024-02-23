"use client"
import React,{useEffect,useState} from 'react'
import ProductCard from '../global/product-card'
import axios from "axios"

type Props ={
    data:any 
}

export default function ProductsPageContainer({data}:Props) {
 
  return (
    <div className='container my-24'>
      <h1 className='text-3xl font-bold text-center my-10'>Products</h1>
   
      <div className='flex flex-wrap'>

        {
            data?.data?.map((product:any)=>{
              return(
                <ProductCard key={product._id} product={product}/>
              )
            })
        }
      </div>

    </div>
  )
}
