"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import {Heart, Rss} from "lucide-react"
import { useCarteStore } from '@/lib/hooks/useCarteStore'
import { useSession } from 'next-auth/react'
import {v4 as uuidv4} from "uuid"
import axios from 'axios'
type Props = {
    product:{
        _id:string
        name:string
        description:string
        price:number
        image:string;
        likes:number;
        isLiked?:boolean
    },
    setRender:any,
    refetch:any
}
export default function ProductCard({product,setRender,refetch}:Props) {
  const {addProductToCart} = useCarteStore((state):any=>state)
  const session = useSession()
  
  
  const handleLikeProduct = async()=>{
    try{

      const res =await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products/${product._id}/like`,{
        // @ts-ignore
        userId:session.data?.user?.data?._id

      })
 
        console.log("request successful")
        // @ts-ignore
        // setRender(uuidv4())
        refetch()
      
      console.log("res",res)
    }catch(err){
      console.log("Error",err)
    }
  }
  return (
    <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
    <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
       <Link href={`/products/${product._id}`}>
       <img
        className='w-full cursor-pointer h-48 object-cover'
        src={product.image ? product.image : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
        alt='Product 1'

      />
       </Link>
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>{product.name}</h2>
        <p className='text-gray-700'>{product.description}</p>
      </div>
      <div className='p-4'>
        <p className='text-lg font-bold mb-2'>${product.price}</p>
        <div className='flex gap-3 items-center'>
        <button
        onClick={()=>addProductToCart(product)}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Add to Cart
        </button>
       {session.status === 'authenticated' && <Heart  size={30} color='transparent' fill={product.isLiked ? 'red' : ''} onClick={handleLikeProduct} />
     }
        <div className='likes-count'>
          <p>{product.likes}</p>
    
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}
