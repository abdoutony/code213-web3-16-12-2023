import React from 'react'

export default function HeroSection() {
  return (
   <div>
  <section className="w-screen"><div className="relative"
  >
    
    <img 
    src="https://minimalin-demo.myshopify.com/cdn/shop/files/slide-smartwatch-2_600x.png?v=1694444523"
    // src="/placeholder.svg" 
 height={400} 
  alt="Hero"
   className="aspect-[3.6]
    object-cover w-full
    brightness-50
     sm:aspect-[5/2]" />
  <div className="inset-0 absolute flex items-center justify-center p-4 md:p-6">
    <div className="grid gap-4 text-center">
        <h1 className="text-3xl font-semibold 
    
        tracking-tighter sm:text-5xl md:text-6xl/none text-gray-300 dark:text-gray-900">
            The Spring Collection
          </h1><p className="text-gray-200 dark:text-gray-400">
            Introducing our latest collection. Embrace the season with style.
          </p>
          </div>
          </div>
          </div>
          </section>
</div>
  )
}
