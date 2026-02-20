import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import ProductItem from '../components/ProductItem'
import BestSeller from '../components/BestSeller'

function Home() {
  return (
    <div className= 'w-[85%] mx-auto'>
      <Hero />
      <LatestCollection />
      <BestSeller />
      
    </div>
  )
}

export default Home