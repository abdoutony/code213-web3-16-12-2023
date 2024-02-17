import React from 'react'

type Props = {
    product:any
}
export default function ProductCard({product}:Props) {
  return (
    <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
    <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
      <img
        className='w-full h-48 object-cover'
        src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        alt='Product 1'
      />
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>{product.name}</h2>
        <p className='text-gray-700'>{product.description}</p>
      </div>
    </div>
  </div>
  )
}
