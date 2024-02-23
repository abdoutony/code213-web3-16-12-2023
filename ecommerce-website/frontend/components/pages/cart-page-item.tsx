"use client"
import { Minus, Plus, Trash } from 'lucide-react'
import React from 'react'
import { useCarteStore } from '@/lib/hooks/useCarteStore'
type Props = {
    item?:{
        _id:string,
        image:string,
        name:string,
        price:string,
        quantity:number
    }
}
export default function CartPageItem({item}:Props) {
    const {image,name,price,quantity}:any=item 

    const {removeProductFromCart,increaseQuantity,decreaseQuantity} = useCarteStore((state):any=>state)
  return (
    <div className="cart-item flex gap-16 bg-white shadow-lg my-5">
    <div className="product-image">
      <img src={image} alt={name} width={200} height={200} />
    </div>
   <div className="product-details flex-1">
   <div className="product-name ">
      <h2 className='text-3xl font-bold relative mt-5'>{name}</h2>
    </div>
   <div className='flex justify-between'>
   <div className="product-price">
      <p className='text-2xl font-bold'>{price}</p>
    </div>
    {/* remove from cart */}
  
    <div className="product-right-content flex flex-col gap-y-3 ">
    <div className="product-remove flex justify-center ">
      <button 
       onClick={()=>removeProductFromCart(item)}
      className='text-2xl text-red-500 '>
        <Trash />
      </button>
    </div>
    <div className="quantity flex gap-5 ">
      <button onClick={() => increaseQuantity(item)} className='text-2xl  rounded-xl p-2'>
        <Plus />
      </button>
      <p className='text-2xl'>{quantity}</p>
      <button onClick={() => decreaseQuantity(item)} className='text-sm  rounded-xl p-2'>
        <Minus />
      </button>
    </div>
    </div>
   </div>
   </div>
  </div>
  )
}
