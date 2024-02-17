import React from 'react'
import HeroSection from '../global/hero-section'
import { Featured } from '../component/featured'

export default function MainPageContainer() {
  return (
    <main>
    <HeroSection />
  
    <div className="featured-container my-11">
    <h3 className="font-bold text-center">Featured products</h3>
     <Featured />
    </div>
  </main>
  )
}
