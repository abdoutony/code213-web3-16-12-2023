"use client"
import React from 'react'
import CartPageItem from './cart-page-item'
import { useCarteStore } from '@/lib/hooks/useCarteStore'
export default function CartPageContainer() {
    const {total,cart}:any = useCarteStore((state)=>state)
  return (
    <div className="">
    <div className="container my-24">
      <div className="w-full">
        <h1 className="text-center text-4xl font-bold">Cart</h1>
       
      </div>
  
      <div className="card-item-grid">
        <div className="card-item-container">
          {/* {cartItems.map((item) => (
            <CartPageItem key={item.id} {...item} />
          ))} */}
          {
            cart && cart.length > 0 ? cart.map((item:any) => (
              <CartPageItem key={item._id} item={item} />
            )) : <p className='text-2xl '>No items in cart</p>
          }
          {/* <CartPageItem item={{_id:"dddd",name:"hello",price:"0",image:"https://placehold.co/600x400"}}  /> 
          <CartPageItem item={{_id:"dddd",name:"hello",price:"0",image:"https://placehold.co/600x400"}}  />  */}

        </div>
      </div>
      <div className="w-full pt-5" style={{ paddingRight: "15px" }}>
        {/* <h2 className="total">Total Amount: ${totalAmount.toFixed(2)}</h2> */}
        <h2 className="total text-xl font-bold">Total Amount: {total}</h2>
      </div>
    </div>
  </div>
  )
}
